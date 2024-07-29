import { ChangeEvent, useState } from "react"
import { useForm } from "react-hook-form"
import ScrollToTop from "../components/ScrollToTop"

export default function AddProduct() {
    const [category, setCategory] = useState('')

    const handleChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    const {register, reset, handleSubmit, formState: {errors}} = useForm() 
    
    return (
        <>
            <ScrollToTop />
            <h1 className="text-center pt-10 text-5xl capitalize pb-5">Agregar pieza nueva</h1>
        
            <form
                className="mx-auto w-full max-w-screen-sm shadow-lg grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-20 rounded-2xl xs:grid-cols-2"
                encType="multipart/form-data"
                {...register}
            >
                <h2 className="flex items-center text-[1.15rem] font-bold xs:col-span-2"><>Ingresa las características de tu pieza deseada:</></h2>

                <input 
                    type="text"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                    placeholder="Nombre"
                    name="name"
                />

                <input 
                    type="number"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                    placeholder="Precio"
                    name="price"
                />

                <select
                    className="shadow-inner w-full h-full rounded-md bg-gray-100 p-2 xs:col-span-2"
                    name="categoría"
                    onChange={handleChangeCategory}
                    defaultValue=""
                >
                    <option value="" disabled className='opacity-55'>-- Tipo de pieza --</option>
                    <option value="cadena">Cadena</option>
                    <option value="esclava">Esclava</option>
                    <option value="aretes">Aretes</option>
                    <option value="anilloDeMatrimonio">Anillo de matrimonio</option>
                    <option value="dije">Dije</option>
                    <option value="anillo">Anillo</option>
                </select>

                <input 
                    type="text"
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                    placeholder="Peso"
                    name="weigth"
                />

                {category === 'anillo' || category === 'anilloDeMatrimonio' ? (
                    <select
                        className="shadow-inner w-full p-3 rounded-md bg-gray-100"
                        name="medida"
                        defaultValue=""
                    >
                        <option value="" disabled className='opacity-55'>-- Medida --</option>
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
                ) : (
                    <>
                        {category === 'esclava' || category === 'cadena' ? (
                            <input 
                                type="number"
                                className="shadow-inner w-full p-2 rounded-md bg-gray-100"
                                placeholder="Medida en cm. Ej. 23, 30, 21."
                                name="medida"
                            />
                            ) : (
                            <div className="shadow-inner w-full p-2 rounded-md bg-gray-100 h-full"> 
                                <p className="text-gray-400"> Sin medida. </p>
                            </div>
                        )}
                    </>
                )}

            <div className="containerRadio containerRadioAddProduct justify-evenly font-black mt-2 uppercase xs:col-span-2 text-center flex items-center">
                <h3 className="text-center uppercase col-span-2">Kilataje</h3>
                <label className="flex justify-center">
                    <input type="radio" name="kilataje" value="10K"/>
                    <span className="font-black">10k</span>
                </label>
                <label className="flex justify-center">
                    <input type="radio" name="kilataje" value="12K"/>
                    <span className="font-black">12k</span>
                </label>
                <label className="flex justify-center">
                    <input type="radio" name="kilataje" value="14K"/>
                    <span className="font-black">14k</span>
                </label>
                <label className="flex justify-center">
                    <input type="radio" name="kilataje" value="18K"/>
                    <span className="font-black">18k</span>
                </label>
            </div>

                <textarea
                    className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize xs:col-span-2"
                    placeholder="Descripción de la pieza: "
                    name="description"
                    rows={3}
                ></textarea>

                <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                    <label htmlFor="image" className="text-center uppercase mb-4 font-bold">Sube las fotos del producto:</label>
                    <input 
                        type="file" 
                        id="image"
                        name="imagen"
                        accept="image/png, image/jpeg"
                        className="pl-14"
                        multiple
                    />
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
