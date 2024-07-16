import { ChangeEvent, useState } from "react"

export default function CustomizationForm() {
    
    const [category, setCategory] = useState('')
    const [budget, setbudget] = useState(false)

    const handleChangeCategory = (e : ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    return (
        <form
            className="mx-auto w-full max-w-screen-sm shadow-lg grid grid-rows-form-xs grid-cols-1 gap-5 p-10 pt-5 mb-20 rounded-2xl xs:grid-rows-form-lg xs:grid-cols-2"
            action="https://formsubmit.co/db8e06899d780c750f034f6f69c58e8f"
            method="POST"
            encType="multipart/form-data"
        >
            <div className="xs:col-span-2">
                <h2 className="flex items-center text-[1.15rem] font-bold"><>Ingresa las características de tu pieza deseada:</></h2>
                <p>Crearemos la pieza <span className="text-red-500 uppercase font-bold text-[0.95rem]">ideal para ti </span>a corde a tus necesidades.</p>
            </div>

            <select
                className="shadow-inner w-full h-full rounded-md bg-gray-100 p-2"
                name="categoría"
                onChange={handleChangeCategory}
                defaultValue=""
                required
            >
                <option value="" disabled className='opacity-55'>-- Tipo de pieza --</option>
                <option value="cadena">Cadena</option>
                <option value="esclava">Esclava</option>
                <option value="aretes">Aretes</option>
                <option value="anilloDeMatrimonio">Anillo de matrimonio</option>
                <option value="dije">Dije</option>
                <option value="anillo">Anillo</option>
            </select>


            {category === 'anillo' || category === 'anilloDeMatrimonio' ? (
                <select
                    className="shadow-inner w-full p-3 rounded-md bg-gray-100"
                    name="medida"
                    defaultValue=""
                    required
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
                            required
                        />
                        ) : (
                        <div className="shadow-inner w-full p-2 rounded-md bg-gray-100 h-full"> 
                            <p className="text-gray-400"> Sin medida. </p>
                        </div>
                    )}
                </>
            )}
        

            <div className="containerRadio justify-center font-black mt-5 uppercase">
                <h3 className="text-center uppercase mb-4">Kilataje</h3>
                <label>
                    <input type="radio" name="kilataje" value="10K"/>
                    <span className="font-black">10k</span>
                </label>
                <label>
                    <input type="radio" name="kilataje" value="12K"/>
                    <span className="font-black">12k</span>
                </label>
                <label>
                    <input type="radio" name="kilataje" value="14K"/>
                    <span className="font-black">14k</span>
                </label>
                <label>
                    <input type="radio" name="kilataje" value="18K"/>
                    <span className="font-black">18k</span>
                </label>
            </div>

            <div className="xs:col-span-1 containerRadio justify-center font-black mt-5 uppercase">
                <h3 className="text-center uppercase mb-4">Color De Oro</h3>
                <label>
                    <input type="radio" name="colorDeOro" value="Amarillo"/>
                    <span className="font-black">Amarillo</span>
                </label>
                <label>
                    <input type="radio" name="colorDeOro" value="Blanco"/>
                    <span className="font-black">Blanco</span>
                </label>
                <label>
                    <input type="radio" name="colorDeOro" value="Rosa"/>
                    <span className="font-black">Rosa</span>
                </label>
                <label>
                    <input type="radio" name="colorDeOro" value="Tricolor"/>
                    <span className="font-black">Tricolor</span>
                </label>
            </div>

            <input 
                type="email"
                className="shadow-inner w-full p-2 rounded-md bg-gray-100 xs:col-span-2"
                placeholder="Email"
                name="email"
                required
            />

            <textarea
                className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize xs:col-span-2"
                placeholder="Detalles adicionales de la pieza: "
                name="detalles"
                rows={3}
                required
            ></textarea>

            <div className="h-full xs:col-span-2 mt-2 flex flex-col justify-center items-center">
                <label htmlFor="image" className="text-center uppercase mb-4 font-bold">Sube una imagen de la pieza a recrear:</label>
                <input 
                    type="file" 
                    id="image"
                    name="imagen"
                    accept="image/png, image/jpeg"
                    className="pl-14"
                    required
                />
            </div>

            <div className="xs:col-span-2 gap-10 redio">
                <div className="containerRadio">
                    <h3 className="text-center uppercase mb-4 mt-5 font-black">¿Tienes un presupuesto en mente?</h3>
                    <label className="flex items-center">
                        <input 
                            type="radio"
                            name="presupuesto"
                            value="si"
                            onChange={() => setbudget(true)}
                        />
                        <span className="font-black">Si</span>
                        <p className="text-red-600 font-black text-sm pl-1">*Adaptaremos la pieza a tu presupuesto.</p>
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio"
                            name="presupuesto"
                            value="no"
                            onChange={() => setbudget(false)}
                        />
                        <span className="font-black">No</span>
                        <p className="text-red-600 font-black text-sm">*Recrearemos la pieza lo más idéntica posible.</p>
                    </label>
                </div>
                
                <input 
                    type="number"
                    className={budget ? "shadow-inner w-full p-2 rounded-md bg-gray-100 block" : "hidden"}
                    placeholder="Presupuesto"
                    name="presupuesto"
                    required
                />
            </div>

            <div className="xs:col-span-2 flex justify-center">
                <button 
                    type="submit"
                    className="shadow hover:shadow-inner hover:bg-gray-200 ease transition-all duration-200 w-1/2 p-2 rounded-md bg-gray-100"
                >
                Enviar
                </button>
            </div>

            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_next" value="https://jomer.netlify.app/#gracias/customizationForm"></input>
        </form>
    )
}
