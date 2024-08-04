import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import PieceCard from "../components/PieceCard"
import { Navigate, useParams } from "react-router-dom"
import { getPieces } from "../api/PieceAPI.ts"

export default function Products() {
    const { filter } = useParams()
    const [category, setCategory] = useState(filter)
  
    const { data, isLoading, isError } = useQuery({
        queryKey: ['pieces'],
        queryFn: getPieces,
        retry: 2
    })

    if(isError) return <Navigate to={'/404'}/>
    if(isLoading) return (
        <div className="w-full h-32 flex justify-center items-center">
            <p className="text-2xl animate-pulse">Cargando...</p>
        </div>
    )

    if (data) return (
        <>
            <h1 className="text-center pt-10 text-5xl uppercase pb-6">Catálogo</h1>

            <div className="flex">
                {/* <select
                    className="shadow-inner w-full p-3 rounded-md bg-gray-100 mx-auto"
                    name="medida"
                    defaultValue={''}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="" disabled className='opacity-55'>-- Filtrar Por --</option>
                    <option value="chains">Cadenas</option>
                    <option value="cuffBracelets">Esclavas</option>
                    <option value="earings">Aretes</option>
                    <option value="engagementRings">Anillos de matrimonio</option>
                    <option value="pendants">Dijes</option>
                    <option value="rings">Anillos</option>
                    <option value="all">Todas las piezas</option>
                
                </select> */}
                <div className="max-w-screen-xl mx-auto w-full grid p-5 pt-2 gap-x-2 gap-y-12 grid-cols-2 px-2 xs:px-30 md:px-20 xs:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    {data.map(piece => (
                        <PieceCard
                            key={piece._id}
                            piece={piece}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
