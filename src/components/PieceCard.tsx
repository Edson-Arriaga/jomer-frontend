import { useNavigate } from "react-router-dom"
import { piece } from "../types"
import { formatPrice } from "../utils"

type PieceCardProps = {
    piece: piece
}

export default function PieceCard({piece} : PieceCardProps) {
  
    const navigate = useNavigate();
    return (
        <div 
            key={piece.id}
            className="rounded-lg overflow-hidden ease transition-transform hover:shadow-md h-full flex flex-col"
        >
            <div className="overflow-hidden">
                <img
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={`https://firebasestorage.googleapis.com/v0/b/jomer-ba42e.appspot.com/o/about-us-2.webp?alt=media&token=5fe56cfc-14cb-44ca-916d-35a05131e32b`}
                    alt={`Photo 1 ${piece.name}`}
                    onClick={() => navigate(`/piece/${piece.id}`)}
                />
            </div>

            <div className="text-center flex flex-col pt-5 flex-grow">
                <h1 className="font-bold text-[1.1rem] sm:text-xl sm:font md:text-xl lg:text-[1.4rem] px-2 uppercase">{piece.name}</h1>
                <p className="text-red-700 text-xl lg:text-3xl mt-2 font-black sm:mt-4 mb-1">{formatPrice(piece.price)}</p>
                <p className="text-md sm:text-lg">Medida: <span className="font-black">{piece.measure}</span></p>
                <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
            </div>
            <button
                className="px-5 py-4 w-full bg-gray-100 hover:bg-gray-200 uppercase font-black mt-5 text-sm"
                onClick={() => navigate(`/piece/${piece.id}`)}
            >
                Ver Detalles
            </button>
        </div>
    )
}
