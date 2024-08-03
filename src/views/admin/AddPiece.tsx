import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { addPiece } from "../../api/PieceAPI"
import { PieceFormData } from "../../types"
import { toast } from "react-toastify"
import InputFieldsPieceForm from "../../components/InputFieldsPieceForm"

export default function AddPiece() {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!token) return <Navigate to={'/admin/login'}/>

    const initialValues = {} as PieceFormData
    const navigate = useNavigate()

    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState<FileList | null>(null);
    
    const {register, handleSubmit, reset, formState: {errors}, resetField} = useForm({defaultValues: initialValues}) 

    const { mutate } = useMutation({
        mutationFn: (formDataWithFiles : PieceFormData) => addPiece(formDataWithFiles),
        onError: (error) => {
            toast.error(error.message)
            navigate('/admin/login')
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })

    const handleAddPiece = (formData : PieceFormData) => {
        if(photos !== null && photos.length <= 5){
            const formDataWithFiles = {...formData, photos}
            mutate(formDataWithFiles)
        }else{
            toast.error("Ingresa de 1 a 5 fotos.")
        }
    }
    
    return (
        <>
            <h1 className="text-center pt-10 text-5xl capitalize pb-5">Agregar pieza nueva</h1>

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
                onSubmit={handleSubmit(handleAddPiece)}
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
                    Agregar Pieza
                    </button>
                </div>
            </form>
        </>
    )
}
