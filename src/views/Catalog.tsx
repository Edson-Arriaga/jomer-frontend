import { useState } from "react"
import pieces from "../data/pieces.ts"
import PieceCard from "../components/PieceCard"

export default function Products() {
    const [category, setCategory] = useState('')

    const piecesFiltered = () => {
      switch(category) {
        case 'chains' :
          return pieces.filter(piece => piece.category === 'chains')
    
        case 'cuffBracelets' :
          return pieces.filter(piece => piece.category === 'cuffBracelets')
          
        case 'earings' :
          return pieces.filter(piece => piece.category === 'earings')
          
        case 'engagementRings' :
          return pieces.filter(piece => piece.category === 'engagementRings')
          
        case 'pendants' :
          return pieces.filter(piece => piece.category === 'pendants')
          
        case 'rings' :
          return pieces.filter(piece => piece.category === 'rings')
        
        default:
          return pieces
      }
    }
  
    return (
      <>
        <h1 className="text-center pt-12 text-5xl capitalize pb-5">Catálogo</h1>
        <form className="mx-auto max-w-md">
          <select
              className="shadow-inner w-full p-3 rounded-md bg-gray-100"
              name="medida"
              onChange={(e) => setCategory(e.target.value)}
              required
          >
              <option value="" disabled selected className='opacity-55'>-- Filtrar Por --</option>
              <option value="chains">Cadenas</option>
              <option value="cuffBracelets">Esclavas</option>
              <option value="earings">Aretes</option>
              <option value="engagementRings">Anillos de matrimonio</option>
              <option value="pendants">Dijes</option>
              <option value="rings">Anillos</option>
              <option value="all">Todas las piezas</option>
              
          </select>
        </form>
        <div className="max-w-screen-xl mx-auto w-full grid p-5 pt-10 gap-x-2 gap-y-12 grid-cols-2 px-2 xs:px-30 md:px-20 xs:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {piecesFiltered().map(piece => (
            <PieceCard
              key={piece.id}
              piece={piece}
            />
          ))}
        </div> 
      </>
    )
}
