import { Piece } from "../types";

export const filterPieces = (data : Piece[] | undefined, category : string | undefined, caratage : string, availability: string) : Piece[] => {
    let pieces : Piece[] = []
    if(!data) return []
    
    if(category === 'marriage'){
        pieces = data.filter(piece => piece.category === "engagementRing" || piece.category === "weddingRing")
    } else if (category !== 'all'){
        pieces = data.filter(piece => piece.category === category)
    } else {
        pieces = data
    }

    if(caratage){
        pieces = pieces.filter(piece => piece.caratage === caratage) 
    }

    if(availability){
        pieces = pieces.filter(piece => piece.availability.toString() === availability)
    }
    
    return pieces
}