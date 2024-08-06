import { useNavigate } from "react-router-dom"
import { Piece } from "../types"
import { formatPrice } from "../utils/formatPrice"

type PieceCardProps = {
    piece: Piece
}

export default function PieceCard({piece} : PieceCardProps) {
  
    const navigate = useNavigate();
    
    return (
        <div 
            key={piece._id}
            className="rounded-lg overflow-hidden ease transition-transform hover:shadow-md h-full flex flex-col bg-white"
        >
            <div className="overflow-hidden">
                <img
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={piece.photos[0]}
                    alt={`Photo 1 ${piece.name}`}
                    onClick={() => navigate(`/piece/${piece._id}`)}
                />
            </div>

            <div className="text-center flex flex-col pt-5 flex-grow">
                <h1 className="font-bold text-[1.1rem] sm:text-xl sm:font md:text-xl lg:text-[1.4rem] px-2 uppercase">{piece.name}</h1>
                <p className="text-red-700 text-xl lg:text-3xl mt-2 font-black sm:mt-4 mb-1">{formatPrice(piece.price)}</p>
                <p className="text-md sm:text-lg">Medida: <span className="font-black">{piece.measure}</span></p>
                <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
            </div>
            <button
                className="px-5 py-4 w-full bg-gray-200 hover:bg-gray-200 uppercase font-black mt-5 text-sm"
                onClick={() => navigate(`/piece/${piece._id}`)}
            >
                Ver Detalles
            </button>
        </div>
    )
}
