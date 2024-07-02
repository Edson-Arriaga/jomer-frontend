import { useState } from "react"
import getPieces from "../data/pieces"
import PieceCard from "../components/PieceCard"

export default function Products() {
    const [products] = useState(getPieces())
    
    return (
      <>
        <h1 
          className="text-center pt-12 text-5xl uppercase">
        Piezas</h1>
        <div className="max-w-screen-xl mx-auto w-full grid p-5 pt-10 gap-x-4 gap-y-16 grid-cols-1 px-10 xs:px-30 md:px-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(piece => (
            <PieceCard 
              piece={piece}
            />
          ))}
        </div> 
      </>
    )
}
