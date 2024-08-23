import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { Piece } from './types'

interface PiecesStore {
    favoritePieces: Piece[],
    addFavoritePiece: (piece : Piece) => void,
    removeFavoritePiece: (id: Piece['_id']) => void,
    clearfavoritePieces: () => void
}

export const usePiecesStore = create<PiecesStore>()(
    persist((set, get) => ({
        favoritePieces: [],
        addFavoritePiece: (piece) => {
            set((state) => ({
                favoritePieces: [...state.favoritePieces, piece]
            }))
            console.log(get().favoritePieces)
        },
        removeFavoritePiece: (id) => {
            set((state) => ({
                favoritePieces: state.favoritePieces.filter(favPz => favPz._id !== id)
            }))
        },
        clearfavoritePieces: () => {
            set(() => ({
                favoritePieces: []
            }))
        }
    }), {
        name: 'jomer-storage'
    }
))