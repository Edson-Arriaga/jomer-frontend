import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addPiece } from "../../api/PieceAPI"
import { PieceFormData, PieceFormDataWithFiles } from "../../types"
import { toast } from "react-toastify"
import InputFieldsPieceForm from "../../components/InputFieldsPieceForm"
import useAuth from "../../hooks/useAuth"
import Loading from "../../components/helpers/Loading"

export default function AddPiece() {
    const {isErrorAuth, isLoadingAuth, errorAuth} = useAuth()

    const params = useParams()
    const pieceId = params.pieceId!

    const initialValues = {} as PieceFormData
    const navigate = useNavigate()

    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState<FileList | null>(null);
    
    const {register, handleSubmit, reset, formState: {errors}, resetField} = useForm({defaultValues: initialValues}) 

    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: (formDataWithFiles : PieceFormDataWithFiles) => addPiece(formDataWithFiles),
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
            queryClient.invalidateQueries({queryKey: ['piece', pieceId]})
            navigate('/admin')
            toast.success(data)
            reset()
        }
    })

    const handleAddPiece = (formData : PieceFormData) => {
        if(photos !== null && photos.length <= 5){
            const formDataWithFiles : PieceFormDataWithFiles = {...formData, photos}
            mutate(formDataWithFiles)
        }else{
            toast.error("Ingresa de 1 a 5 fotos.")
        }
    }

    useEffect(() => {
        if(isErrorAuth){
            toast.error(errorAuth?.message)
            navigate('/admin/login')
        }
    }, [isErrorAuth, errorAuth])

    if (isLoadingAuth || isPending) return <Loading />
    
    return (
        <>
            <h1 className="text-center pt-10 text-5xl uppercase pb-5">Agregar pieza nueva</h1>

            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin'}
                    className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                >
                    Regresar al panel de administración
                </Link>
            </div>

            <form
                className="mx-2 sm:mx-auto sm:w-full max-w-screen-sm shadow-xl grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-10 rounded-lg xs:grid-cols-2 bg-white border-y-[1.5rem] border-black"
                onSubmit={handleSubmit(handleAddPiece)}
                encType="multipart/form-data"
                noValidate
            >
                <h2 className="flex items-center text-[1.15rem] font-bold xs:col-span-2"><>Ingresa las características de la pieza nueva:</></h2>

                <InputFieldsPieceForm 
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    category={category}
                    setCategory={setCategory}
                />
                
                <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                    <label htmlFor="images" className="text-center uppercase mb-4 font-bold">Sube al menos una foto de la pieza:</label>
                    <input 
                        type="file" 
                        name="photos"
                        accept="image/jpeg, image/jpg"
                        className="pl-14 pt-3 pb-1"
                        onChange={e => setPhotos(e.target.files)}
                        multiple
                    />
                </div>
        
                <div className="xs:col-span-2 flex justify-center mt-5">
                    <button 
                        type="submit"
                        className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                    >
                    Agregar Pieza
                    </button>
                </div>
            </form>
        </>
    )
}
