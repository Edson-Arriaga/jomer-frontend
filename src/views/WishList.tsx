import LittleTittleEffect from "../components/helpers/LittleTittleEffect";
import PieceCard from "../components/PieceCard";
import { usePiecesStore } from "../store";

export default function WishList() {
    
    const favoritePieces = usePiecesStore(state => state.favoritePieces)
    const clearfavoritePieces = usePiecesStore(state => state.clearfavoritePieces)
    
    return (
        <>
            <LittleTittleEffect>Piezas favoritas</LittleTittleEffect>
            {favoritePieces.length ? (
                <>
                    <div className="w-full max-w-5xl mx-auto px-3 xs:px-6 grid gap-x-2 gap-y-12 grid-cols-2 xs:px-30 md:px-20 xs:grid-cols-3 lg:grid-cols-4 pb-10">
                        {favoritePieces.map(piece => (
                            <PieceCard
                                key={piece._id}
                                piece={piece}
                            />
                        ))}
                    </div>
                    
                    <div className="text-center mb-10">
                        <button 
                            type="submit"
                            className="shadow hover:shadow-inner hover:bg-gray-800 ease transition-colors py-2 px-4 rounded-xl bg-black text-balck uppercase text-white"
                            onClick={() => clearfavoritePieces()}
                        >Eliminar Todas las piezas favoritas</button>
                    </div>
                </>
            ) : <p className="text-center mb-40 pt-5 px-10 font-black text-xl">Agrega piezas a favoritos para verlos aquí.</p>}
        </>
    );
}
