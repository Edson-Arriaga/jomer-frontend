import { ChangeEvent, useState } from "react";
import { SetURLSearchParams, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { Transition } from "@headlessui/react";

type FilterControlsProps = { 
    category: string
    caratage: string
    availability: string
    searchParams: [URLSearchParams, SetURLSearchParams]
}

export default function FilterControls({category, caratage, availability, searchParams} : FilterControlsProps) {
    
    const [isFilterActive, setIsFilterActive] = useState(false)
    const navigate = useNavigate()

    console.log(searchParams)
    const queryClient = useQueryClient()

    const handleOnClick = () => {
        setIsFilterActive(false)
        queryClient.invalidateQueries({queryKey: ['pieces']})
    }

    const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        searchParams[0].set(e.target.name, e.target.value)
        navigate(`?${searchParams[0]}`)
    }
    
    return (
        <>
            <div 
                className="max-w-sm mx-auto mb-5 lg:mb-10 w-32 bg-black p-2 rounded-md flex items-center justify-center cursor-pointer lg:mx-0 lg:top-32 lg:inset-0 lg:h-10 lg:w-44 lg:rounded-r-lg lg:fixed lg:pl-12"
                onClick={() => setIsFilterActive(prev => !prev)}
            >
                <div className="w-5 h-5 rounded-full animate-pulse mr-2 mb-[0.1rem]">
                    <img src="/images/logos/white-logo.webp" alt="complete-white-logo" />
                </div>
                <p className="text-white font-bold uppercase">Filtrar Por</p>
            </div>
            
            <Transition
                show={isFilterActive}
                enter="duration-500"
                enterFrom="opacity-0 -translate-x-44"
                enterTo="opacity-100"
                leave="duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 -translate-x-44"   
            >
                <form className="flex flex-col space-y-6 lg:fixed lg:w-40 lg:left-10 lg:top-52">
                    <select
                        className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg lg:hover:w-52 lg:transition-all cursor-pointer"
                        defaultValue={category || ''}
                        onChange={handleOnChange}
                        name="category"
                    >
                        <option value="" disabled>-- Categría --</option>
                        <option value="chain">Cadenas</option>
                        <option value="cuffBracelet">Esclavas</option>
                        <option value="earings">Aretes</option>
                        <option value="marriage">Matrimonio</option>
                        <option value="pendant">Dijes</option>
                        <option value="ring">Anillos</option>
                        <option value="">Todas las piezas</option>
                    </select>
                    <select
                        className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-52 lg:transition-all cursor-pointer"
                        defaultValue={caratage || ''}
                        onChange={handleOnChange}
                        name="caratage"
                    >
                        <option value="" disabled>-- Kilataje --</option>
                        <option value="10K">10k</option>
                        <option value="12K">12k</option>
                        <option value="14K">14k</option>
                        <option value="18K">18k</option>
                        <option value="">Todos los kilatajes</option>
                    </select>
                    <select
                        className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-52 lg:transition-all cursor-pointer"
                        defaultValue={availability || ''}
                        onChange={handleOnChange}
                        name="availability"
                    >
                        <option value="" disabled>-- Disponibilidad --</option>
                        <option value="true">Disponible</option>
                        <option value="false">Agotado</option>
                        <option value="">Todas las disp.</option>
                    </select>
                    <button 
                        className="w-40 shadow-inner p-1 font-black uppercase bg-green-100 hover:bg-green-200 border border-green-700 mx-auto rounded-md lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-44 lg:transition-all"
                        type="button"
                        onClick={handleOnClick}
                    >Aplicar Filtros</button>
                </form> 
            </Transition>
        </>
    )
}
