import { useState } from "react"

export default function CustomizationForm() {
    
    const [category, setCategory] = useState('')
    const [budget, setbudget] = useState(false)

    return (
        <form
            className="mx-2 sm:mx-auto sm:w-full max-w-screen-sm shadow-lg grid grid-cols-1 gap-5 p-10 px-5 xs:px-10 pt-5 mb-20 rounded-xl xs:grid-cols-2 bg-white border border-y-[1.5rem] border-y-black"
            action="https://formsubmit.co/db8e06899d780c750f034f6f69c58e8f"
            method="POST"
            encType="multipart/form-data"
        >
            <div className="xs:col-span-2">
                <h2 className="flex items-center text-[1.15rem] font-bold"><>Ingresa las características de tu pieza deseada:</></h2>
                <p>Crearemos la pieza <span className="text-red-500 uppercase font-bold text-[0.95rem]">ideal para ti </span>a corde a tus necesidades.</p>
            </div>

            <select
                className="shadow-inner w-full rounded-md bg-gray-100 p-2 py-3 border-l-4 border-black"
                onChange={e => setCategory(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled className='opacity-55'>-- Tipo de pieza --</option>
                <option value="cadena">Cadena</option>
                <option value="esclava">Esclava</option>
                <option value="aretes">Aretes</option>
                <option value="anilloDeCompromiso">Anillo de Compromiso</option>
                <option value="argollasDeMatrimonio">Argollas de matrimonio</option>
                <option value="dije">Dije</option>
                <option value="anillo">Anillo</option>
            </select>

            {category === 'anillo' || category === 'anilloDeCompromiso' || category === 'argollasDeMatrimonio' ? (
                    <div className="flex gap-2">
                        <select
                            className="shadow-inner w-full h-10 p-3 rounded-md bg-gray-100 border-l-4 border-black"
                            defaultValue=""
                            name="medida"
                        >
                            <option value="" disabled className='opacity-55'>{category === 'argollasDeMatrimonio' ? 'Med. 1' : '-- Medida --'}</option>
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
                
                        {category === 'argollasDeMatrimonio' && (
                            <select
                                className="shadow-inner w-full p-3 h-10 rounded-md bg-gray-100 border-l-4 border-black"
                                defaultValue=""
                                name="medida2"
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
                        {category === 'esclava' || category === 'cadena' || category === 'dije'? (
                                <input
                                    type="number"
                                    className="shadow-inner w-full p-2 h-10 rounded-md bg-gray-100 border-l-4 border-black"
                                    placeholder="Medida en cm. Ej. 23, 30, 21."
                                    name="medida"
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="shadow-inner w-full p-2 h-10 rounded-md bg-gray-100"
                                    placeholder={category === '' ? 'Medida' : 'Unitalla'}
                                    name="medida"
                                    disabled
                                />
                        )}
                    </>
                )} 
        

            <div className="containerRadio containerRadioCustomization font-black mt-5 uppercase">
                <h3 className="text-center uppercase mb-4 col-span-2 text-lg">Kilataje</h3>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="kilataje" value="10K"/>
                    <span className="font-black before:bg-amber-100">10k</span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="kilataje" value="12K"/>
                    <span className="font-black before:bg-amber-200">12k</span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="kilataje" value="14K"/>
                    <span className="font-black before:bg-amber-300">14k</span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="kilataje" value="18K"/>
                    <span className="font-black before:bg-amber-400">18k</span>
                </label>
            </div>

            <div className="xs:col-span-1 containerRadio containerRadioCustomization justify-center font-black mt-5 uppercase">
                <h3 className="text-center uppercase mb-4 col-span-2 text-lg">Color De Oro</h3>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="colorDeOro" value="Amarillo"/>
                    <span className="font-black before:bg-amber-200">Amarillo</span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="colorDeOro" value="Blanco"/>
                    <span className="font-black">Blanco<p className="text-transparent">....</p></span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="colorDeOro" value="Rosa"/>
                    <span className="font-black before:bg-rose-300">Rosa<p className="text-transparent">...........</p></span>
                </label>
                <label className="flex justify-center xs:justify-normal">
                    <input type="radio" name="colorDeOro" value="Tricolor"/>
                    <span className="font-black before:bg-triColor">Tricolor</span>
                </label>
            </div>

            <input 
                type="email"
                className="shadow-inner w-full p-2 rounded-md bg-gray-100 xs:col-span-2 border-l-4 border-black"
                placeholder="Email"
                name="email"
                required
            />

            <textarea
                className="shadow-inner w-full p-2 rounded-md bg-gray-100 no-resize xs:col-span-2 border-l-4 border-black"
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
                    <h3 className="text-center uppercase mb-4 mt-5 font-black col-span-2">¿Tienes un presupuesto en mente?</h3>
                    <label className="flex items-center col-span-2">
                        <input 
                            type="radio"
                            name="presupuesto"
                            value="si"
                            onChange={() => setbudget(true)}
                        />
                        <span className="font-black">Si</span>
                        <p className="text-red-600 font-black text-sm pl-2">*Adaptaremos la pieza a tu presupuesto.</p>
                    </label>
                    <label className="flex items-center col-span-2">
                        <input 
                            type="radio"
                            name="presupuesto"
                            value="no"
                            onChange={() => setbudget(false)}
                        />
                        <span className="font-black">No</span>
                        <p className="text-red-600 font-black text-sm pl-2">*Recrearemos la pieza lo más idéntica posible.</p>
                    </label>
                </div>
                
                <input 
                    type="number"
                    className={budget ? "shadow-inner w-full p-2 border-l-4 border-black rounded-md bg-gray-100 block mt-4" : "hidden"}
                    placeholder="Presupuesto"
                    name="presupuesto"
                    required
                />
            </div>

            <div className="xs:col-span-2 flex justify-center">
                <button 
                    type="submit"
                    className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-8 rounded-xl bg-black text-balck uppercase text-white"
                >
                Enviar
                </button>
            </div>

            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_next" value="https://jomer.netlify.app/#gracias/customizationForm"></input>
        </form>
    )
}
