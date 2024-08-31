import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react"
import { Transition } from "@headlessui/react";
import "swiper/css/bundle";
import { Piece } from "../types"
import { usePiecesStore } from "../store";
import LoadingPhoto from "./helpers/LoadingPhoto"
import useScreenSize from "../hooks/useScreenSize";

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

    const [pieceInfoActive, setPieceInfoActive] = useState<string[]>([])
    const isPieceInfoActive = useMemo(() => pieceInfoActive.some(pz => pz === piece._id), [pieceInfoActive])

    const { width } = useScreenSize()
    
    return (
        <div className={`${isPieceInfoActive && 'hover:shadow-xl hover:scale-[1.015]'} rounded-lg overflow-hidden ease h-full flex flex-col transition-all`}>
            <div className="relative cursor-pointer">
                <Swiper
                    loop={piece.photos.length > 1}   
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        enabled: width >= 1024,
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
                                className={`hover:scale-110 ease duration-200 ${isLoading ? "opacity-0 absolute" : "opacity-100"}`}
                                src={imageURL}
                                alt={`Photo ${i} ${piece.name}`}
                                onClick={() => navigate(`/piece/${piece._id}`)}
                                onLoad={() => setIsLoading(false)}
                                loading="lazy"
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

            <div className="flex justify-center h-10">
                {isPieceInfoActive ? (
                    <button 
                        className="w-11 h-11 hover:scale-105 ease transition-transform animate-pulse"
                        onClick={() => setPieceInfoActive(state => state.filter(pz => pz !== piece._id))}
                    >
                        <img src={`/images/icons/upArrow.webp`} alt="Up Arrow" />
                    </button>
                ) : (
                    <button 
                        className="w-7 h-7 hover:scale-110 pt-2 ease transition-transform animate-pulse"
                        onClick={() => setPieceInfoActive(state => [...state, piece._id])}  
                    >
                        <img src={`/images/icons/downArrow.webp`} alt="Down Arrow" />
                    </button>
                )}
            </div>
            
            <Transition
                show={isPieceInfoActive}
                enter="ease-in duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    className={`${isPieceInfoActive && 'cursor-pointer'} flex flex-col pt-3 justify-center items-center px-3 pb-3`}
                    onClick={() => navigate(`/piece/${piece._id}`)}
                >
                    <h1 className="text-center font-bold text-[1.1rem] sm:text-[1.2rem] lg:text-[1.40rem] uppercase flex-grow leading-5 lg:leading-6">{piece.name}</h1>
                    {piece.category == 'weddingRing'
                        ? <p className="text-md sm:text-lg mt-4">Medidas: {''} 
                            <span className="font-black">{piece.measure} Y {piece.measure2}</span>
                        </p>
                        : <p className="text-md sm:text-lg mt-4">Medida: {''} 
                            <span className="font-black">{piece.measure === 0 ? 'Unitalla' : `${piece.measure} ${["chain", "cuffBracelet", "pendant"].includes(piece.category) ? ' cm.' : ''}`} </span>
                        </p>
                    }
                    <p className="text-md sm:text-lg">Kilataje: <span className="font-black">{piece.caratage} </span></p>
                    <p className="text-md sm:text-lg">Peso: <span className="font-black">{piece.weight} g.</span></p>
                    {piece.availability === true
                        ?  (
                            <>
                                {/* <p className="text-md sm:text-lg">Color: <span className="font-black">{piece.weight} g.</span></p> */}
                                <p className="text-green-700 border bg-green-50 border-green-700 px-3 py-1 rounded-xl text-sm mt-5 font-black">Disponible</p>
                            </>
                        )
                        :   <p className="text-red-700 border bg-red-50 border-red-700 px-5 py-1 rounded-xl text-sm mt-5 font-black">Agotado</p>
                    }
                </div>
            </Transition>
        </div>
    )
}
