import { z } from 'zod'

export const PieceSchema = z.object({
    _id: z.string(),
    name: z.string(),
    description: z.string(),
    availability: z.boolean().or(z.string()),
    category: z.string(),
    measure: z.number(),
    measure2: z.number().optional(),
    weight: z.number(),
    caratage: z.string(),
    photos: z.array(z.string())
})

export const PiecesShemaPagination = z.object({
    pieces: z.array(PieceSchema),
    nextPage: z.number().nullable()
})

export type Piece = z.infer<typeof PieceSchema>
export type PieceFormData = Pick<Piece, 'name' | 'description'| 'availability' | 'category' | 'measure' | 'measure2' | 'weight' | 'caratage'>
export type PieceFormDataWithFiles = PieceFormData & { photos: FileList }