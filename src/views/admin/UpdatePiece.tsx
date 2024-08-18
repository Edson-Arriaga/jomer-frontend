import { Link, useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addImage, deleteImage, getPieceById, updatePiece, updatePieceProps } from "../../api/PieceAPI"
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
    const [isActiveSubmitFile, setIsActiveSubmitFile] = useState(false)
    const [currentlyAction, setCurrentlyAction] = useState('')

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
                availability: data.availability.toString(),
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


    //Update Mutate
    const { mutate : updateMutate } = useMutation({
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

    //Delete Mutate
    const { mutate : deleteImageMutate } = useMutation({
        mutationFn: deleteImage,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
            queryClient.invalidateQueries({queryKey: ['piece', pieceId]})
            toast.success(data)
            navigate('/admin')
        }
    })

    //Add Mutate
    const { mutate : addImageMutation } = useMutation({
        mutationFn: addImage,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['pieces']})
            queryClient.invalidateQueries({queryKey: ['piece', pieceId]})
            toast.success(data)
            navigate('/admin')
        }
    })

    const handleUpdatePiece = (formData : PieceFormData) => {
        if(photoSelected !== '' && newPhotoFile === null){
            toast.error("Ingresa la nueva foto.")
        }else{
            const formDataWithFiles = {...formData, newPhotoFile}
            updateMutate({formDataWithFiles, pieceId, photoSelected})
        }
    }

    if(isError) navigate('/404')

    useEffect(() => {
        if(isErrorAuth){
            toast.error(errorAuth?.message)
            navigate('/admin/login')
        }
    }, [isErrorAuth, errorAuth])

    if(isLoading || isLoadingAuth) return <Loading />

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
                        <div
                            key={photo} 
                            className="w-32 cursor-pointer" 
                            onClick={() => {
                                setPhotoSelected(photo)
                                if(isActiveSubmitFile){
                                    setIsActiveSubmitFile(false)
                                }
                            }} 
                                
                        >
                            <img className={photo === photoSelected ? `scale-105 rounded-lg outline outline-4 outline-blue-300` : `hover:scale-105 rounded-lg transition-transform`} src={`${photo}?t=${new Date().getTime()}`} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col mx-auto w-full justify-between sm:flex-row xs:col-span-2 gap-y-5">
                    <button
                        className="shadow valid:hover:shadow-inner valid:hover:bg-blue-100 disabled:opacity-50 ease transition-colors py-1 px-3 rounded-xl text-balck uppercase border"
                        disabled={photoSelected === ""}
                        onClick={(e) => {
                            e.preventDefault()
                            setIsActiveSubmitFile(true)  
                        }}
                    >Actualizar Foto</button>

                    <button
                        className="shadow valid:hover:shadow-inner valid:hover:bg-red-100 disabled:opacity-50 ease transition-colors py-1 px-3 rounded-xl text-balck uppercase border"
                        disabled={photoSelected === "" || data.photos.length === 1}
                        onClick={(e) => {
                            e.preventDefault()
                            deleteImageMutate({pieceId, photo: photoSelected})
                        }}
                    >Eliminar Foto</button>
                    <button
                        className="shadow valid:hover:shadow-inner valid:hover:bg-emerald-100 disabled:opacity-50 ease transition-colors py-1 px-3 rounded-xl text-balck uppercase border"
                        disabled={data.photos.length === 5}
                        onClick={(e) => {
                            e.preventDefault()
                            setIsActiveSubmitFile(true)
                            setCurrentlyAction('add')
                            if(newPhotoFile !== null){
                                addImageMutation({pieceId, photo: newPhotoFile})
                            }
                            setPhotoSelected('')
                        }}
                    >Agregar foto</button>
                </div>

                {isActiveSubmitFile && (
                    <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                        <label htmlFor="image" className="text-center uppercase mb-4 font-bold">Sube La Foto nueva:</label>
                        <input 
                            type="file" 
                            accept="image/jpeg, image/jpg"
                            name="image"
                            className="pl-14 pt-3 pb-1"
                            onChange={e => setNewPhotoFile(e.target.files![0])}
                        />
                    </div> 
                )}
                
                <div className="xs:col-span-2 flex justify-center mt-5">
                    <button 
                        type="submit"
                        className="shadow hover:shadow-inner active:hover:bg-gray-800 disabled:opacity-50 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                        disabled={currentlyAction === 'add'}
                    >
                    Actualizar Pieza
                    </button>
                </div>
            </form>
        </>
    )
}
