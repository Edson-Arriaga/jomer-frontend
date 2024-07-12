type PieceHomeProps = {
    image: string,
    category: string,
    rotate: string
  }
  
  export default function PieceHome({ image, category, rotate }: PieceHomeProps) {
    const isEngagementRings = () => category === "Anillos de compromiso";
  
    return (
      <>
        <div className={`${rotate} relative hover:scale-110 transition-transform ease-in-out cursor-pointer`}>
            <img src={`/images/homeImages/${image}`} alt={`${image}`} className="rounded-lg"/>
            <div className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 ease-linear transition-opacity lg:hover:backdrop-blur-sm'>
                <h1 className={isEngagementRings() ? "font-bold uppercase text-white text-xl text-center hidden lg:block" : "font-bold uppercase text-white text-2xl hidden lg:block"}>
                    {category}
                </h1>
            </div>
            <p className="text-center uppercase lg:hidden font-black text-2xl mt-2">{category}</p>
        </div>
      </>
    );
  }
  