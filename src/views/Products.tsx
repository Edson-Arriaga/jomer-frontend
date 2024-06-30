import rings from "../data/rings"

export default function Products() {
    return (
      <>
        <h1 className="text-center p-10 text-5xl uppercase f">Products</h1>
        <div className="max-w-screen-xl mx-auto w-full pl-6 pr-4 grid grid-cols-4 p-10 gap-10 bg-white shadow-inner">
          {rings.map(ring => (
            <div key={ring.id}>
                <div className="overflow-hidden">
                  <img 
                    className="hover:scale-105 ease duration-200 cursor-pointer"
                    src={`${ring.photos.photo1}`}
                    alt={`Photo 1 ${ring.name}`} />
                </div>

                <div>
                  <h1>{ring.name}</h1>
                  <p className="break-words">{ring.description}</p>
                </div>
            </div>
          ))}
        </div> 
      </>
    )
}
