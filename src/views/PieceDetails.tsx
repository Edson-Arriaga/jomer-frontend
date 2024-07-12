import { useNavigate, useParams } from "react-router-dom"
import getPieces from "../data/pieces"
import { piece } from "../types"

export default function PieceDetails() {
  const navigate = useNavigate()

  const { id } = useParams()
  let selectedPiece = {} as piece

  if(id != undefined){
    selectedPiece = getPieces().filter(piece => piece.id === +id)[0]
  } else {
    navigate('/')
  }
  
  return (
    <div className="mt-10">
      <h1 className="text-center font-bold text-4xl">{selectedPiece.name}</h1>
      <div className="mx-auto max-w-48">
        <img src={selectedPiece.photos.photo1} alt="" />
      </div>
    </div>
  )
}
