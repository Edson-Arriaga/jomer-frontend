import LittleTittleEffect from "../components/helpers/LittleTittleEffect";
import useScreenSize from "../hooks/useScreenSize";

export default function AboutUs() {
  
    const { width } = useScreenSize()

    return (
        <>
            <LittleTittleEffect>Nosotros</LittleTittleEffect>
            <section className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-300 mt-5 lg:mt-0">
                <div className="flex flex-col justify-center items-center p-10 py-16 sm:p-20 text-xl text-center gap-10 relative">
                    <h2 className="text-5xl after:w-32 after:bg-black font-black after:h-[0.1rem] after:block after: after:mx-auto">PIEZAS</h2>
                    <p className="text-lg">Cada pieza está elaborada artesanalmente con oro auténtico, disponible en tonos amarillo, rosa, blanco o tricolor, y en versiones de hasta 18k. La calidad de nuestro oro asegura una durabilidad premium, preservando la elegancia y el valor de cada joya a lo largo del tiempo.</p>
                    <div className="aboutUs-decoration-top bg-zinc-300 h-32 absolute w-full -top-16 lg:-top-20"></div>
                </div>
                {width > 1024 ? (
                    <>
                    <div className="flex justify-center">
                        <div className="w-full h-hero-lg bg-about-us-1 bg-fixed bg-cover"/>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full h-hero-lg bg-about-us-2 bg-fixed bg-contain"/>
                    </div>
                    </>
                ) : (
                    <div className="w-full h-screen-50 bg-about-us-phone bg-fixed bg-cover bg-center"></div>
                )}
                <div className="flex flex-col justify-center items-center p-10 py-16 sm:p-20 text-xl text-center gap-10 relative">
                    <h2 className="text-5xl after:w-32 after:bg-black font-black after:h-[0.1rem] after:block after: after:mx-auto">JOMER</h2>
                    <p className="text-lg">En 2020, una chispa dio vida a este proyecto con el deseo de romper límites y enfrentar el mundo con una visión de éxito. Cada persona brilla a su manera, lo que nos llevó a enfocarnos y a diseñar piezas que irradien libertad, autenticidad y abundancia.</p>
                    <div className="aboutUs-decoration-bottom bg-zinc-300 h-32 absolute w-full -bottom-10"></div>
                </div>
            </section>
        </>
    )
}
