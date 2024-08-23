import { useNavigate } from "react-router-dom"
import { Piece } from "../types"
import { useState } from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LoadingPhoto from "./helpers/LoadingPhoto"
import { usePiecesStore } from "../store";

type PieceCardProps = {
    piece: Piece
}

export default function PieceCard({piece} : PieceCardProps) {
    
    const favoritePieces = usePiecesStore(state => state.favoritePieces)
    const isFavorite = favoritePieces.some(pz => pz._id === piece._id)

    const addFavoritePiece = usePiecesStore(state => state.addFavoritePiece)
    const removeFavoritePiece = usePiecesStore(state => state.removeFavoritePiece)

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div 
            key={piece._id}
            className="rounded-lg overflow-hidden ease hover:bg-gray-100 h-full flex flex-col hover:shadow-md cursor-pointer hover:scale-[1.015] transition-all"
        >
            <div className="relative">
                <Swiper
                        loop={piece.photos.length > 1}   
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            enabled: true,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={{
                            delay: Math.random() > 0.5 ? 3000 : 3500
                        }}
                        className="mySwiper"
                >
                    {piece.photos.map((imageURL, i) => (
                        <SwiperSlide key={i} className="overflow-hidden">
                            {isLoading && <LoadingPhoto/>}
                            <img
                                className="hover:scale-105 ease duration-200"
                                src={imageURL}
                                alt={`Photo ${i} ${piece.name}`}
                                onClick={() => navigate(`/piece/${piece._id}`)}
                                onLoad={() => setIsLoading(false)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div 
                    className="absolute z-30 w-8 lg:w-10 opacity-80 right-0 bottom-0 p-1 hover:scale-110"
                    onClick={() => isFavorite ? removeFavoritePiece(piece._id) : addFavoritePiece(piece)}
                >
                    <img
                        src={`/images/icons/${isFavorite ? 'heart-white.svg' : 'heart-border-white.svg'}`} 
                        alt="Wish-List logo"
                    />
                </div>
            </div>

            <div
                className=" flex flex-col pt-6 justify-center items-center px-3 pb-4"
                onClick={() => navigate(`/piece/${piece._id}`)}
            >
                <h1 className="text-center font-bold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.40rem] uppercase flex-grow leading-5 lg:leading-6">{piece.name}</h1>
                {piece.category == 'weddingRing'
                    ? <p className="text-md sm:text-lg mt-5">Medidas: {''} 
                        <span className="font-black">{piece.measure} Y {piece.measure2}</span>
                      </p>
                    : <p className="text-md sm:text-lg mt-5">Medida: {''} 
                        <span className="font-black">{piece.measure === 0 ? 'Unitalla' : `${piece.measure} ${["chain", "cuffBracelet", "pendant"].includes(piece.category) ? ' cm.' : ''}`} </span>
                      </p>
                }
                <p className="text-md sm:text-lg">Kilataje  : <span className="font-black">{piece.caratage} </span></p>
                <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
                {piece.availability === true
                    ?   <p className="text-green-700 border bg-green-50 border-green-700 px-3 py-1 rounded-xl text-sm mt-5 font-black">Disponible</p>
                    :   <p className="text-red-700 border bg-red-50 border-red-700 px-5 py-1 rounded-xl text-sm mt-5 font-black">Agotado</p>
                }
            </div>
        </div>
    )
}
