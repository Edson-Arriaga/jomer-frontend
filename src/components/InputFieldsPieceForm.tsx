import { ChangeEvent, Dispatch } from "react";
import { FieldErrors, UseFormRegister, UseFormResetField } from "react-hook-form";
import { PieceFormData } from "../types";
import ErrorMessage from "./helpers/ErrorMessage";

type InputFieldsPieceFormProps = {
    register: UseFormRegister<PieceFormData>,
    errors: FieldErrors<PieceFormData>,
    resetField: UseFormResetField<PieceFormData>,
    category: string,
    setCategory: Dispatch<React.SetStateAction<string>>
}

export default function InputFieldsPieceForm({register, errors, resetField, category, setCategory} : InputFieldsPieceFormProps) {
    
    const handleChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        resetField('measure')
        resetField('measure2')
        setCategory(e.target.value)
    }
    
    return (
        <>
            <div>
                <input
                    type="text"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Nombre"
                    {...register("name", {
                        required: "El NOMBRE es obligatorio.",
                        maxLength: {value: 25, message: "Máximo 25 caracteres."}
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>

            <div>
                <input
                    type="number"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Precio"
                    {...register("price", {
                        required: "El PRECIO es obligatorio.",
                        valueAsNumber: true,
                        min: {value: 0, message: 'Ingresa un precio mayor a 0.'}
                    })}
                />
                {errors.price && (
                    <ErrorMessage>{errors.price.message}</ErrorMessage>
                )}
            </div>

            <div className="xs:col-span-2">
                <select
                    className="shadow-inner w-full rounded-md bg-gray-100 p-2 py-3 border-l-4 border-black"
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
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black"
                    placeholder="Peso"
                    {...register("weight", {
                        required: "El PESO es obligatorio.",
                        min: {value: 0, message: 'Ingresa un precio mayor a 0.'},
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
                            className="shadow-inner w-full h-10 p-3 rounded-md bg-gray-100 border-l-4 border-black"
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
                                className="shadow-inner w-full p-3 h-10 rounded-md bg-gray-100 border-l-4 border-black"
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
                                    className="shadow-inner w-full p-2 h-10 rounded-md bg-gray-100 border-l-4 border-black"
                                    placeholder="Medida en cm. Ej. 23, 30, 21."
                                    {...register("measure", {
                                        required: "La MEDIDA es obligatoria.",
                                        min: {value: 0, message: "La MEDIDA debe ser mayor a 0"},
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
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 border-l-4 border-black no-resize"
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
        </>
    )
}
