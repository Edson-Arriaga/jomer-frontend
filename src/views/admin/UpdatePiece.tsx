import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getPieceById, updatePiece } from "../../api/PieceAPI"
import InputFieldsPieceForm from "../../components/InputFieldsPieceForm"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Piece, PieceFormData } from "../../types"
import { toast } from "react-toastify"

export default function UpdatePiece() {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!token) return <Navigate to={'/admin/login'}/>

    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState<FileList | null>(null);

    const params = useParams()
    const pieceId = params.pieceId!
    
    const { data, isError, isLoading } = useQuery({
        queryKey: ['piece', pieceId],
        queryFn: () => getPieceById(pieceId),
        retry: 1
    })

    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return (
        <div className="w-full h-32 flex justify-center items-center">
            <p className="text-2xl animate-pulse uppercase">Cargando...</p>
        </div>
    )

    let initialValues = {} as PieceFormData

    if(data){
        initialValues = {
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category,
            measure: data.measure,
            measure2: data.measure2,
            weight: data.weight,
            caratage: data.caratage
        }
        useEffect(() => {
            setCategory(data.category)
        }, [])
    }
    
    const {register, handleSubmit, reset, formState: {errors}, resetField} = useForm({defaultValues: initialValues}) 

    const { mutate } = useMutation({
        mutationFn: ({formDataWithFiles, pieceId} : {formDataWithFiles : PieceFormData, pieceId: Piece['_id']}) => updatePiece({formDataWithFiles, pieceId}),
        onError: (error) => {
            toast.error(error.message)
            navigate('/admin/login')
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })

    const handleUpdatePiece = (formData : PieceFormData) => {
        if(photos !== null && photos.length <= 5){
            const formDataWithFiles = {...formData, photos}
            mutate({formDataWithFiles, pieceId})
        }else{
            toast.error("Ingresa de 1 a 5 fotos.")
        }
    }

    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl capitalize pb-5">Actualizar Pieza</h1>

            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin'}
                    className="shadow hover:shadow-inner hover:bg-gray-700 ease transition-colors py-2 px-4 rounded-md bg-black text-white uppercase"
                >
                    Regresar al panel de administración
                </Link>
            </div>

            <form
                className="mx-auto w-full max-w-screen-sm shadow-lg grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-10 rounded-2xl xs:grid-cols-2"
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
                
                <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                    <label htmlFor="images" className="text-center uppercase mb-4 font-bold">Sube al menos una foto de la pieza:</label>
                    <input 
                        type="file" 
                        accept="image/jpeg, image/jpg"
                        className="pl-14 pt-3 pb-1"
                        onChange={e => setPhotos(e.target.files)}
                        multiple  
                    />
                </div>
        
                <div className="xs:col-span-2 flex justify-center mt-5">
                    <button 
                        type="submit"
                        className="shadow hover:shadow-inner hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-md bg-gray-100"
                    >
                    Actualizar Pieza
                    </button>
                </div>
            </form>
        </>
    )
}
