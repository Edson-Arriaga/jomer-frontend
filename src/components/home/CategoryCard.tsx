type PieceHomeProps = {
    image: string,
    category: string,
    rotate: string
}
  
export default function CategoryCard({ image, category, rotate }: PieceHomeProps) {
    return (
        <>
            <div className={`${rotate} relative cursor-pointer lg:hover:rotate-0 lg:hover:scale-110 transition-transform duration-500 ease-in-out`}>
                <img src={`/images/homeImages/${image}`} alt={`${image}`} className="rounded-lg"/>
                <div className='flex justify-center items-center absolute inset-0 opacity-0 hover:opacity-100 ease-linear transition-opacity lg:hover:backdrop-blur-sm rounded-lg'>
                    <h1 className={"font-bold uppercase text-white text-2xl hidden lg:block"}>
                        {category}
                    </h1>
                </div>
                <p className="text-center uppercase lg:hidden font-black text-lg mt-2">{category}</p>
            </div>
        </>
    );
}
  