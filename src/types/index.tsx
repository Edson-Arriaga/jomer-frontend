import { z } from 'zod'

export const pieceSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    measure: z.number(),
    measure2: z.number().optional(),
    weight: z.number(),
    caratage: z.string(),
    photos: z.array(z.string())
})
export const piecesSchema = z.array(pieceSchema)

export type Piece = z.infer<typeof pieceSchema>
export type PieceFormData = Pick<Piece, 'name' | 'description' | 'price' | 'category' | 'measure' | 'measure2' | 'weight' | 'caratage'>