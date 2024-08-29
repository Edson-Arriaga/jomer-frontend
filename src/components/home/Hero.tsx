import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import TittleHeroEffect from "../helpers/TittleHeroEffect";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                enabled: true,
                clickable: true
            }}
            loop={true}
            autoHeight={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
            <SwiperSlide>
                <div className="bg-hero-1 bg-cover text-white h-hero-lg lg:bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10">
                <h1 className='ml3 text-5xl text-white tracking-wider lg:text-6xl'>
                    <TittleHeroEffect>La Perfección En Cada Detalle.</TittleHeroEffect>
                </h1>
                <Link
                    to={"/catalogo/all"}
                    className="border border-white px-5 py-2 hover:scale-105 ease transition-transform rounded-lg text-2xl lg:text-3xl font-black animate-pulse uppercase"
                >
                    Ver Catálogo
                </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-hero-2 bg-cover text-white h-hero-lg bg-right lg:bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10">
                <h1 className="text-5xl text-white tracking-wider lg:text-6xl">
                    Intentando Lo Imposible.
                </h1>
                <Link
                    to={"/nosotros"}
                    className="border border-white px-5 py-2 hover:scale-105 ease transition-transform rounded-lg text-2xl lg:text-3xl font-black animate-pulse uppercase"
                >
                    Sobre Nosotros
                </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-hero-3 bg-cover text-white h-hero-lg bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10">
                <h1 className="text-5xl text-white tracking-wider lg:text-6xl">
                    Estilo Que Trasciende.
                </h1>
                <Link
                    to={"/contacto"}
                    className="border border-white px-5 py-2 hover:scale-105 ease transition-transform rounded-lg text-2xl lg:text-3xl font-black animate-pulse uppercase"
                >
                    Contáctanos
                </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
