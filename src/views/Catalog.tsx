import { useInfiniteQuery } from "@tanstack/react-query"
import PieceCard from "../components/PieceCard"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getPieces } from "../api/PieceAPI.ts"
import { ChangeEvent, useMemo, useState } from "react"
import { filterPieces } from "../utils/filterPieces.ts"
import Loading from "../components/helpers/Loading.tsx"
import useScreenSize from "../hooks/useScreenSize.tsx"
import { Transition } from "@headlessui/react"
import { useIsBottom } from "../hooks/useIsBottom.ts"

export default function Products() {
    const { filter } = useParams()
    const [category, setCategory] = useState(filter)
    const [caratage, setCaratage] = useState('')
    const [availability, setAvailability] = useState('')
    const [isFilterActive, setIsFilterActive] = useState(false)

    const {isBottom} = useIsBottom()
    
    const navigate = useNavigate()
    const {width} = useScreenSize()
    
    const { data, fetchNextPage, isLoading, isError } = useInfiniteQuery({
        queryKey: ['pieces'],
        queryFn: ({ pageParam }) => getPieces({ pageParam }),
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        initialPageParam: 1,
        retry: 2
    });

    if(isBottom){
        fetchNextPage()
    }

    const filteredPieces = useMemo(
        () => filterPieces(data?.pages.flatMap(page => page!.pieces) || [], category, caratage, availability),
        [category, caratage, availability, data]
    );

    const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
        navigate(`/catalogo/${e.target.value}`)
        setCategory(e.target.value)
    }

    const handleClickFilter = () => {
        setIsFilterActive(prev => !prev)
        setAvailability('')
        setCaratage('')
        if (isFilterActive){
            setCategory('all')
        }
    }

    if (isLoading) return <Loading />
    if (isError) return <Navigate to={'/404'}/>

    return (
        <>  
            <h1 className="text-center mt-10 text-[2.6rem] sm:text-5xl uppercase pb-10 after:bg-black after:block after:w-64 after:h-[2px] after:mx-auto after:mt-3 before:bg-black before:block before:w-64 before:h-[2px] before:mx-auto before:mb-4">Catálogo</h1>
            
            <div className="grid grid-cols-1 gap-10 mx-2 xs:mx-5 sm:mx-10 lg:grid-cols-4 mb-16">
                <div className="col-span-1">
                    <div 
                        className="max-w-sm mx-auto w-32 bg-black p-2 rounded-md flex items-center justify-center cursor-pointer lg:mx-0 lg:top-32 lg:inset-0 lg:h-10 lg:w-44 lg:rounded-r-lg lg:fixed lg:pl-12"
                        onClick={() => handleClickFilter()}
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
                        <section className="flex flex-col space-y-6 lg:fixed justify-start mt-5 lg:mt-0 lg:w-40">
                            <select
                                className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-60 lg:transition-all"
                                defaultValue={category === 'all' ? '' : category}
                                onChange={handleChange}
                            >
                                <option value="" disabled>-- Categría --</option>
                                <option value="chain">Cadenas</option>
                                <option value="cuffBracelet">Esclavas</option>
                                <option value="earings">Aretes</option>
                                <option value="marriage">Matrimonio</option>
                                <option value="pendant">Dijes</option>
                                <option value="ring">Anillos</option>
                                <option value="all">Todas las piezas</option>
                            </select>
                            <select
                                className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-60 lg:transition-all lg:bottom-44"
                                defaultValue={''}
                                onChange={e => setCaratage(e.target.value)}
                            >
                                <option value="" disabled>-- Kilataje --</option>
                                <option value="10K">10k</option>
                                <option value="12K">12k</option>
                                <option value="14K">14k</option>
                                <option value="18K">18k</option>
                                <option value="">Todos los kilatajes</option>
                            </select>
                            <select
                                className="w-48 shadow-inner p-3 lg:p-4 bg-black mx-auto rounded-md uppercase text-white lg:rounded-none lg:rounded-r-lg mt-3 lg:hover:w-60 lg:transition-all"
                                defaultValue={''}
                                onChange={e => setAvailability(e.target.value)}
                            >
                                <option value="" disabled>-- Disponibilidad --</option>
                                <option value="true">Disponible</option>
                                <option value="false">Agotado</option>
                                <option value="">Todas las disp.</option>
                            </select>
                        </section>
                    </Transition>
                </div>

                <div className="lg:col-span-3 w-full px-3 grid gap-x-2 gap-y-8 grid-cols-2 xs:px-30 md:px-20 xs:grid-cols-3 md:grid-cols-3 lg:px-0 lg:grid-cols-4">
                    {filteredPieces.map(piece => ( 
                        <PieceCard
                            key={piece._id}
                            piece={piece}
                        />
                    ))}
                </div>
            </div>

            {!filteredPieces.length && (
                <div className="text-center w-full mt-10 mb-36">
                    <p className="font-bold uppercase text-xl">No hay piezas con esas características.</p>
                </div>
            )}
            
            {width >= 1024 && <div className="inset-0 z-10 w-10 fixed bg-black" />}
        </>
    )
}
