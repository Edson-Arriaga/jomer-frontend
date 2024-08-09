import { useNavigate } from "react-router-dom"
import { Piece } from "../types"
import { formatPrice } from "../utils/formatPrice"
import { useState } from "react"
import Loading from "./helpers/Loading"
import useScreenSize from "../hooks/useScreenSize"

type PieceCardProps = {
    piece: Piece
}

export default function PieceCard({piece} : PieceCardProps) {
  
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const {width} = useScreenSize()

    return (
        <div 
            key={piece._id}
            className="rounded-lg overflow-hidden ease shadow-md hover:bg-gray-100 h-full flex flex-col bg-white transition-colors"
        >
            <div className="overflow-hidden">
                {isLoading && <Loading img={'14'} contHeight={width >= 640 ? '52' : '24'}/>}
                <img
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={piece.photos[0]}
                    alt={`Photo 1 ${piece.name}`}
                    onClick={() => navigate(`/piece/${piece._id}`)}
                    onLoad={() => setIsLoading(false)}
                />
            </div>

            <div className="text-center flex flex-col pt-5 flex-grow">
                <h1 className="font-bold text-[1.1rem] sm:text-xl sm:font md:text-xl lg:text-[1.4rem] px-2 uppercase">{piece.name}</h1>
                <p className="text-red-700 text-xl lg:text-3xl mt-2 font-black sm:mt-4 mb-1">{formatPrice(piece.price)}</p>
                <p className="text-md sm:text-lg">Medida: <span className="font-black">{piece.measure}</span></p>
                <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
            </div>
            <button
                className="px-5 py-4 w-full bg-black hover:bg-gray-900 uppercase font-black mt-5 text-sm text-white"
                onClick={() => navigate(`/piece/${piece._id}`)}
            >
                Ver Detalles
            </button>
        </div>
    )
}
