import { useInfiniteQuery } from "@tanstack/react-query"
import PieceCard from "../components/PieceCard"
import { Navigate, useSearchParams } from "react-router-dom"
import { getPieces } from "../api/PieceAPI.ts"
import { useEffect } from "react"
import Loading from "../components/helpers/Loading.tsx"
import useScreenSize from "../hooks/useScreenSize.tsx"
import { useIsBottom } from "../hooks/useIsBottom.tsx"
import FilterControls from "../components/FilterControls.tsx"
import { Piece } from "../types/index.tsx"

export default function Catalog() {
    const searchParams = useSearchParams()
    const category = searchParams[0].get('category') || ''
    const caratage = searchParams[0].get('caratage') || ''
    const availability = searchParams[0].get('availability') || ''

    const {isBottom} = useIsBottom()
    const {width} = useScreenSize()
    
    const { data, fetchNextPage, isLoading, isError, isFetching, refetch } = useInfiniteQuery({
        queryKey: ['pieces', category, caratage, availability],
        queryFn: ({ pageParam }) => getPieces({ pageParam, category, caratage, availability }),
        getNextPageParam: (lastPage) => lastPage?.nextPage,
        initialPageParam: 1,
        retry: 2,
    });

    useEffect(() => { refetch() }, [])

    useEffect(() => {
        if(isBottom) fetchNextPage()
    }, [isBottom])

    let allPieces : Piece[] = []

    if(data){
        allPieces = data.pages.flatMap(page => page?.pieces) as Piece[];
    }

    if (isLoading) return <Loading />
    if (isError) return <Navigate to={'/404'}/>

    return (
        <>  
            <h1 className="text-center mt-10 text-[2.6rem] sm:text-5xl uppercase mb-3 after:bg-black after:block after:w-64 after:h-[2px] after:mx-auto after:mt-3 before:bg-black before:block before:w-64 before:h-[2px] before:mx-auto before:mb-4">Catálogo</h1>
            <p className="text-center font-bold pb-10 px-14">*Los productos disponibles están listos para entrega inmediata.</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className="lg:col-span-1 mb-10">
                    <FilterControls
                        category={category}
                        caratage={caratage}
                        availability={availability}
                        searchParams={searchParams}
                    />
                </div>

                <div className="lg:col-span-3 w-full mb-5 px-2 grid gap-x-2 gap-y-8 grid-cols-2 xs:px-30 md:px-20 xs:grid-cols-3 lg:px-10 lg:grid-cols-4">
                    {allPieces.length === 0 ? (
                        <div className="col-span-3 text-center w-full mt-10 mb-36">
                            <p className="font-bold uppercase text-xl">No hay piezas con esas características.</p>
                        </div>
                    ) : (
                        <>
                            {allPieces.map(piece =>(
                                <PieceCard
                                    key={piece._id}
                                    piece={piece}
                                />
                            ))}
                        </>
                    )}
                    
                    {isFetching && <div className="lg:col-span-4 text-center w-full"><Loading /></div>}
                </div>
            </div>
            
            {width >= 1024 && <div className="inset-0 z-10 w-10 fixed bg-black" />}
        </>
    )
}
