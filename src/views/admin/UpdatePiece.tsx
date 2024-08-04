import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getPieceById, updatePiece, updatePieceProps } from "../../api/PieceAPI"
import InputFieldsPieceForm from "../../components/InputFieldsPieceForm"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { PieceFormData } from "../../types"
import { toast } from "react-toastify"

export default function UpdatePiece() {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!token) return <Navigate to={'/admin/login'}/>

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
            navigate('/admin/login')
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
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

    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return (
        <div className="w-full h-32 flex justify-center items-center">
            <p className="text-2xl animate-pulse uppercase">Cargando...</p>
        </div>
    )

    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl uppercase pb-5">Actualizar Pieza</h1>

            <div className="flex justify-center mb-5">
                <Link
                    to={'/admin'}
                    className="shadow hover:shadow-inner hover:bg-gray-100 ease transition-colors py-2 px-4 rounded-sm bg-white text-balck uppercase"
                >
                    Regresar al panel de administración
                </Link>
            </div>

            <form
                className="mx-auto w-full max-w-screen-sm shadow-lg grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-10 rounded-xl xs:grid-cols-2 bg-white"
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
                
                <div className="flex mx-auto col-span-2 justify-center gap-4 px-10 flex-wrap">
                    {data.photos.map(photo => (
                        <div key={photo} className="w-32 cursor-pointer" onClick={() => setPhotoSelected(photo)}>
                            <img className={photo === photoSelected ? `scale-105 rounded-lg outline outline-4 outline-blue-300` : `hover:scale-105 rounded-lg transition-transform`} src={photo} />
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
                    <p className="col-span-2 text-center">Selecciona la foto que deseas actualizar</p>
                )}
        
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
