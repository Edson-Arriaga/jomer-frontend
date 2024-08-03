import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import ScrollToTop from "../../components/helpers/ScrollToTop"
import { PieceForm } from "../../types"
import ErrorMessage from "../../components/helpers/ErrorMessage"
import { toast } from "react-toastify"
import { useMutation } from "@tanstack/react-query"
import { addPiece } from "../../api/PieceAPI"
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function AddPiece() {
    const token = localStorage.getItem('AUTH_TOKEN_JOMER')
    if(!token) return <Navigate to={'/admin/login'}/>

    const navigate = useNavigate()
    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState<FileList | null>(null);

    const initialValues = {} as PieceForm
    
    const {register, handleSubmit, reset, formState: {errors}, resetField} = useForm({defaultValues: initialValues}) 

    const { mutate } = useMutation({
        mutationFn: (formDataWithFiles : PieceForm) => addPiece(formDataWithFiles),
        onError: (error) => {
            toast.error(error.message)
            navigate('/admin/login')
        },
        onSuccess: (data) => {
            toast.success(data)
            reset()
        }
    })

    const handleChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        resetField('measure')
        resetField('measure2')
        setCategory(e.target.value)
    }

    const handleAddPiece = (formData : PieceForm) => {
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

                <div>
                    <input
                        type="text"
                        className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                        placeholder="Nombre"
                        {...register("name", {
                            required: "El NOMBRE es obligatorio."
                        })}
                    />
                    {errors.name && (
                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                        placeholder="Precio"
                        {...register("price", {
                            required: "El PRECIO es obligatorio.",
                            valueAsNumber: true
                        })}
                    />
                    {errors.price && (
                        <ErrorMessage>{errors.price.message}</ErrorMessage>
                    )}
                </div>

                <div className="xs:col-span-2">
                    <select
                        className="shadow-inner w-full rounded-md bg-gray-100 p-2 py-3"
                        defaultValue=""
                        {...register("category", {
                            required: "La CATEGORÍA es obligatoria.",
                            onChange: handleChangeCategory
                        })}
                    >
                        <option value="" disabled className='opacity-55'>-- Tipo de pieza --</option>
                        <option value="chain">Cadena</option>
                        <option value="cuffBracelet">Esclava</option>
                        <option value="earings">Aretes</option>
                        <option value="engagementRing">Anillo de matrimonio</option>
                        <option value="weddingRing">Argollas de matrimonio</option>
                        <option value="pendant">Dije</option>
                        <option value="ring">Anillo</option>
                    </select>
                    {errors.category && (
                        <ErrorMessage>{errors.category.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                        placeholder="Peso"
                        {...register("weight", {
                            required: "El PESO es obligatorio.",
                            valueAsNumber: true
                        })}
                    />
                    {errors.weight && (
                        <ErrorMessage>{errors.weight.message}</ErrorMessage>
                    )}
                </div>

                <div>
                    {category === 'ring' || category === 'engagementRing' || category === 'weddingRing' ? (
                        <div className="flex gap-2">
                            <select
                                className="shadow-inner w-full h-10 p-3 rounded-md bg-gray-100"
                                defaultValue=""
                                {...register("measure", {
                                    required: "La MEDIDA es obligatoria.",
                                    valueAsNumber: true
                                })}
                            >
                                <option value="" disabled className='opacity-55'>{category === 'weddingRing' ? 'Med. 1' : '-- Medida --'}</option>
                                <option value="4">4</option>
                                <option value="4.5">4.5</option>
                                <option value="5">5</option>
                                <option value="5.5">5.5</option>
                                <option value="6">6</option>
                                <option value="6.5">6.5</option>
                                <option value="7">7</option>
                                <option value="7.5">7.5</option>
                                <option value="8">8</option>
                                <option value="8.5">8.5</option>
                                <option value="9">9</option>
                                <option value="9.5">9.5</option>
                                <option value="10">10</option>
                                <option value="10.5">10.5</option>
                                <option value="11">11</option>
                                <option value="11.5">11.5</option>
                                <option value="12">12</option>
                            </select>
                    
                            {category === 'weddingRing' && (
                                <select
                                    className="shadow-inner w-full p-3 h-10 rounded-md bg-gray-100"
                                    defaultValue=""
                                    {...register("measure2", {
                                        required: "La MEDIDA 2 es obligatoria.",
                                        valueAsNumber: true
                                    })}
                                >
                                    <option value="" disabled className='opacity-55'>Med. 2</option>
                                    <option value="4">4</option>
                                    <option value="4.5">4.5</option>
                                    <option value="5">5</option>
                                    <option value="5.5">5.5</option>
                                    <option value="6">6</option>
                                    <option value="6.5">6.5</option>
                                    <option value="7">7</option>
                                    <option value="7.5">7.5</option>
                                    <option value="8">8</option>
                                    <option value="8.5">8.5</option>
                                    <option value="9">9</option>
                                    <option value="9.5">9.5</option>
                                    <option value="10">10</option>
                                    <option value="10.5">10.5</option>
                                    <option value="11">11</option>
                                    <option value="11.5">11.5</option>
                                    <option value="12">12</option>
                                </select>
                            )}
                        </div>
                    ) : (
                        <>
                            {category === 'cuffBracelet' || category === 'chain' || category === 'pendant'? (
                                    <input
                                        type="number"
                                        className="shadow-inner w-full p-2 h-10 rounded-md bg-gray-100"
                                        placeholder="Medida en cm. Ej. 23, 30, 21."
                                        {...register("measure", {
                                            required: "La MEDIDA es obligatoria.",
                                            min: {value: 1, message: "La MEDIDA debe ser mayor a 0"},
                                            valueAsNumber: true,
                                        })}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className="shadow-inner w-full p-2 h-10 rounded-md bg-gray-100"
                                        placeholder={category === '' ? 'Medida' : 'Unitalla'}
                                        disabled
                                    />
                            )}
                        </>
                    )}  
                    {errors.measure && (
                        <ErrorMessage>{errors.measure.message}</ErrorMessage>
                    )}

                    {errors.measure2 !== undefined && (
                        errors.measure2 && (
                            <ErrorMessage>{errors.measure2.message}</ErrorMessage>
                        )
                    )}
                </div>

            <div className="xs:col-span-2">
                <div className="containerRadio containerRadioAddProduct justify-evenly font-black mt-2 uppercase text-center flex items-center">
                    <h3 className="text-center uppercase col-span-2">Kilataje</h3>
                    <label className="flex justify-center">
                        <input type="radio" value="10K" {...register("caratage", {
                        required: "El KILATAJE es obligatorio."
                    })}/>
                        <span className="font-black">10k</span>
                    </label>

                    <label className="flex justify-center">
                        <input type="radio" value="12K" {...register("caratage", {
                        required: "El KILATAJE es obligatorio."
                    })}/>
                        <span className="font-black">12k</span>
                    </label>

                    <label className="flex justify-center">
                        <input type="radio" value="14K" {...register("caratage", {
                        required: "El KILATAJE es obligatorio."
                    })}/>
                        <span className="font-black">14k</span>
                    </label>

                    <label className="flex justify-center">
                        <input type="radio" value="18K" {...register("caratage", {
                        required: "El KILATAJE es obligatorio."
                    })}/>
                        <span className="font-black">18k</span>
                    </label>
                </div>
                {errors.caratage && (
                    <ErrorMessage>{errors.caratage.message}</ErrorMessage>
                )}
            </div>

                <div className="xs:col-span-2">
                    <textarea
                        className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize"
                        placeholder="Descripción"
                        rows={3}
                        {...register("description", {
                            required: "La DESCRIPCIÓN es obligatoria.",
                            maxLength: {value: 250, message: "La DESCRIPCIÓN debe tener máximo 250 caracteres."}
                        })}
                    ></textarea>
                    {errors.description && (
                        <ErrorMessage>{errors.description.message}</ErrorMessage>
                    )}
                </div>

                <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                    <label htmlFor="images" className="text-center uppercase mb-4 font-bold">Sube al menos una foto de la pieza:</label>
                    <>
                        <input 
                            type="file" 
                            accept="image/jpeg, image/jpg"
                            className="pl-14 pt-3 pb-1"
                            onChange={e => setPhotos(e.target.files)}
                            multiple  
                        />
                    </>
                </div>

                <div className="xs:col-span-2 flex justify-center mt-5">
                    <button 
                        type="submit"
                        className="shadow hover:shadow-inner hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-md bg-gray-100"
                    >
                    Enviar
                    </button>
                </div>
            </form>
        </>
    )
}
