export type piece = {
    id: number,
    name: string,
    description: string,
    price: number,
    photos: {
        photo1: string,
        photo2: string,
        photo3?: string,
        photo4?: string,
        photo5?: string
    },
    category: string,
    measure: string,
    weight: number
}