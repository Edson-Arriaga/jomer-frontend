import { piece } from "../types"
import { formatPrice } from "../utils"

type PieceCardProps = {
    piece: piece
}

export default function PieceCard({piece} : PieceCardProps) {
  return (
    <div 
        key={piece.id}
        className="rounded-lg overflow-hidden ease transition-transform h-auto hover:shadow-md"
    >
        <div className="overflow-hidden">
            <img
            className="hover:scale-105 ease duration-200 cursor-pointer"
            src={`${piece.photos.photo1}`}
            alt={`Photo 1 ${piece.name}`}
            />
        </div>

        <div className="mb-4 p-3 text-center">
            <div className="text-center w-full pt-5 max-h-20 xs:max-h-20 sm:max-h-7 lg:max-h-10">
            <h1 className="font-bold text-lg sm:text-xl sm:font-medium md:text-xl lg:text-2xl ">{piece.name}</h1>
            </div>
            <p className="text-red-700 text-xl sm:text-2xl lg:text-3xl mt-5 sm:mt-20 mb-1">{formatPrice(piece.price)}</p>
            <p className="text-md sm:text-lg">Medida: <span className="font-black">{piece.measure}</span></p>
            <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
        </div>
        <button
            className="px-5 py-4 w-full bg-gray-100 hover:bg-gray-200 uppercase font-black"
        >
            Ver Detalles
        </button>
    </div>
  )
}
