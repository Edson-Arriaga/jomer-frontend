import { useState } from "react"
import getProducts from "../data/products"
import { formatPrice } from "../utils"

export default function Products() {
    const [products] = useState(getProducts())
    
    return (
      <>
        <h1 
          className="text-center pt-12 text-5xl uppercase">
        Piezas</h1>
        <div className="max-w-screen-xl mx-auto w-full grid p-5 pt-10 gap-x-4 gap-y-16 grid-cols-1 px-10 xs:px-30 md:px-20 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <div 
              key={product.id}
              className="rounded-lg overflow-hidden ease transition-transform h-auto hover:shadow-md"
            >
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={`${product.photos.photo1}`}
                    alt={`Photo 1 ${product.name}`}
                  />
                </div>

                <div className="mb-4 p-3 text-center">
                  <div className="text-center w-full pt-5 max-h-20 xs:max-h-20 sm:max-h-7 lg:max-h-10">
                    <h1 className="font-bold text-lg sm:text-xl sm:font-medium md:text-xl lg:text-2xl ">{product.name}</h1>
                  </div>
                  <p className="text-red-700 text-xl sm:text-2xl lg:text-3xl mt-5 sm:mt-20 mb-1">{formatPrice(product.price)}</p>
                  <p className="text-md sm:text-lg">Medida: <span className="font-black">{product.measure}</span></p>
                  <p className="text-md sm:text-lg">Peso: <span className="font-black">{product.weight} g.</span></p>
                </div>
                <button
                  className="px-5 py-4 w-full bg-gray-100 hover:bg-gray-200 uppercase font-black"
                >
                  Ver Detalles
                </button>
            </div>
          ))}
        </div> 
      </>
    )
}
