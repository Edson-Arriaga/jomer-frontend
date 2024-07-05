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
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          autoHeight={true}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className='bg-hero-1 bg-cover text-white text-center h-72 md:h-80 lg:h-26rem bg-center'>
            <TitleEffect>La perfección en cada detalle.</TitleEffect>
            <Link 
              to={'/catalogo'}
              className='border border-white p-3 hover:scale-105 ease transition-transform'>
              Ver Catálogo
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-hero-2 bg-cover text-white text-center h-72 md:h-80 lg:h-26rem bg-right'>
            <h1 className='ml-3 text-4xl font-black pb-10 px-4 pt-16 md:pt-24 lg:p-32 lg:pb-20 md:text-5xl lg:text-6xl'>Intentando lo imposible.</h1>
            <Link
              to={'/nosotros'} 
              className=' border border-white p-3 hover:scale-105 ease transition-transform'>
              Sobre Nosotros
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-hero-3 bg-cover text-white text-center h-72 md:h-80 lg:h-26rem bg-center'>
            <h1 className='ml-3 text-4xl font-black pb-10 px-4 pt-16 md:pt-24 lg:pb-20 lg:p-32 md:text-5xl lg:text-6xl'>Ponle tu brillo.</h1>
            <Link 
              to={'/contacto'} 
              className='border border-white p-3 hover:scale-105 ease transition-transform'>
              Contáctanos
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}
