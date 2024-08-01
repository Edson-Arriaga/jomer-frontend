import { z } from 'zod'

export const pieceSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    measure: z.number(),
    measure2: z.number(),
    weight: z.number(),
    caratage: z.string()
})

export type PieceForm = z.infer<typeof pieceSchema>