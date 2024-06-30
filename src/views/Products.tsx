import { useState } from "react"
import getProducts from "../data/products"

export default function Products() {
    const [products] = useState(getProducts())

    return (
      <>
        <h1 className="text-center p-10 text-5xl uppercase f">Products</h1>
        <div className="max-w-screen-xl mx-auto w-full pl-6 pr-4 grid grid-cols-4 p-10 gap-10 bg-white shadow-inner">
          {products.map(product => (
            <div key={product.id}>
                <div className="overflow-hidden">
                  <img 
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={`${product.photos.photo1}`}
                    alt={`Photo 1 ${product.name}`} />
                </div>

                <div>
                  <h1>{product.name}</h1>
                  <p className="break-words">{product.description}</p>
                </div>
            </div>
          ))}
        </div> 
      </>
    )
}
