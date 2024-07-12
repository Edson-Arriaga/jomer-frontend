import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import TitleEffect from '../components/TitleEffect';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Swiper
          spaceBetween={30}
          effect={'fade'}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          loop={true}
          autoHeight={true}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className='bg-hero-1 bg-cover text-white h-heroHeigth lg:bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10'>
            <TitleEffect>La Perfección En Cada Detalle.</TitleEffect>
              <Link 
                to={'/catalogo'}
                className='border border-white px-3 py-2 hover:scale-105 ease transition-transform rounded-sm text-sm lg:text-xl font-black animate-pulse'>
                Ver Catálogo
              </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-hero-2 bg-cover text-white h-heroHeigth lg:bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10'>
            <h1 className='text-3xl text-white xs:text-4xl md:text-5xl tracking-wider font-black lg:font-base lg:text-6xl'>Intentando Lo Imposible.</h1>
            <Link
              to={'/nosotros'} 
              className=' border border-white px-3 py-2 hover:scale-105 ease transition-transform rounded-sm text-sm lg:text-xl font-black animate-pulse'>
              Sobre Nosotros
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-hero-3 bg-cover text-white h-heroHeigth lg:bg-center flex flex-col items-start justify-center gap-y-10 mx-auto px-5 lg:pl-10'>
            <h1 className='text-3xl text-white tracking-wider xs:text-4xl md:text-5xl font-black lg:font-base lg:text-6xl'>Ponle Tu Brillo.</h1>
            <Link 
              to={'/contacto'} 
              className='border border-white px-3 py-2 hover:scale-105 ease transition-transform rounded-sm text-sm lg:text-xl font-black animate-pulse'>
              Contáctanos
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}
