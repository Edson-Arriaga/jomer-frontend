import { Link, useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getPieceById, updatePiece, updatePieceProps } from "../../api/PieceAPI"
import InputFieldsPieceForm from "../../components/InputFieldsPieceForm"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { PieceFormData } from "../../types"
import { toast } from "react-toastify"
import useAuth from "../../hooks/useAuth"
import Loading from "../../components/helpers/Loading"

export default function UpdatePiece() {

    const {isErrorAuth, isLoadingAuth, errorAuth} = useAuth()

    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [photoSelected, setPhotoSelected] = useState('')
    const [newPhotoFile, setNewPhotoFile] = useState<File | null>(null)

    const params = useParams()
    const pieceId = params.pieceId!

    const queryClient = useQueryClient()
    const { data, isError, isLoading } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    const {register, handleSubmit, reset, formState: {errors}, resetField} = useForm<PieceFormData>() 

    useEffect(() => {
        if (data) {
            const initialValues: PieceFormData = {
                name: data.name,
                description: data.description,
                price: data.price,
                category: data.category,
                measure: data.measure,
                measure2: data.measure2,
                weight: data.weight,
                caratage: data.caratage
            }
            setCategory(data.category)
            reset(initialValues)
            setNewPhotoFile(null)
            setPhotoSelected('')
        }
    }, [data])

    const { mutate } = useMutation({
        mutationFn: ({formDataWithFiles, pieceId, photoSelected} : updatePieceProps) => updatePiece({formDataWithFiles, pieceId, photoSelected}),
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
            queryClient.invalidateQueries({queryKey: ['piece', pieceId]})
            toast.success(data)
            navigate('/admin')
            reset()
        }
    })

    const handleUpdatePiece = (formData : PieceFormData) => {
        if(photoSelected !== '' && newPhotoFile === null){
            toast.error("Ingresa la nueva foto.")
        }else{
            const formDataWithFiles = {...formData, newPhotoFile}
            mutate({formDataWithFiles, pieceId, photoSelected})
        }
    }

    if(isError) navigate('/404')

    useEffect(() => {
        if(isErrorAuth){
            toast.error(errorAuth?.message)
            navigate('/admin/login')
        }
    }, [isErrorAuth, errorAuth])

    if(isLoading || isLoadingAuth) return <Loading img="20" contHeight="52"/>

    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl uppercase pb-5">Actualizar Pieza</h1>

            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin'}
                    className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                >
                    Regresar al panel de administración
                </Link>
            </div>

            <form
                className="mx-2 sm:mx-auto sm:w-full max-w-screen-sm shadow-lg grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-10 rounded-xl xs:grid-cols-2 bg-white border-y-[1.5rem] border-black"
                onSubmit={handleSubmit(handleUpdatePiece)}
                encType="multipart/form-data"
                noValidate
            >
                <h2 className="flex items-center text-[1.15rem] font-bold xs:col-span-2"><>Ingresa las características de tu pieza deseada:</></h2>

                <InputFieldsPieceForm
                    register={register}
                    errors={errors}
                    resetField={resetField}
                    category={category}
                    setCategory={setCategory}
                />
                
                <div className="flex mx-auto xs:col-span-2 justify-center gap-4 px-10 flex-wrap">
                    {data.photos.map(photo => (
                        <div key={photo} className="w-32 cursor-pointer" onClick={() => setPhotoSelected(photo)}>
                            <img className={photo === photoSelected ? `scale-105 rounded-lg outline outline-4 outline-blue-300` : `hover:scale-105 rounded-lg transition-transform`} src={`${photo}?t=${new Date().getTime()}`} />
                        </div>
                    ))}
                </div>

                {photoSelected ? (
                    <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                        <label htmlFor="images" className="text-center uppercase mb-4 font-bold">Sube al menos una foto de la pieza:</label>
                        <input 
                            type="file" 
                            accept="image/jpeg, image/jpg"
                            name="image"
                            className="pl-14 pt-3 pb-1"
                            onChange={e => setNewPhotoFile(e.target.files![0])}
                        />
                    </div>
                ) : (
                    <p className="xs:col-span-2 text-center">Selecciona la foto que deseas actualizar</p>
                )}
        
                <div className="xs:col-span-2 flex justify-center mt-5">
                    <button 
                        type="submit"
                        className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                    >
                    Actualizar Pieza
                    </button>
                </div>
            </form>
        </>
    )
}
