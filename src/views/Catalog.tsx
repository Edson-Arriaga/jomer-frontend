import { useState } from "react"
import getPieces from "../data/pieces"
import PieceCard from "../components/PieceCard"

export default function Products() {
    const [pieces] = useState(getPieces())
    
    return (
      <>
        <h1 
          className="text-center pt-12 text-5xl uppercase">
        Catálogo</h1>
        <div className="max-w-screen-xl mx-auto w-full grid p-5 pt-10 gap-x-2 gap-y-12 grid-cols-2 px-2 xs:px-30 md:px-20 xs:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {pieces.map(piece => (
            <PieceCard
              key={piece.id}
              piece={piece}
            />
          ))}
        </div> 
      </>
    )
}
