import { Link } from 'react-router-dom';
import CustomizationForm from '../components/CustomizationForm';
import Hero from '../components/Hero';
import PieceHome from '../components/PieceHome';

export function Home() {
  return (
    <>
      <section className='relative'>
        <img 
          src="/images/logos/jomer-logo.webp"
          alt="Jomer Logo"
          className='absolute w-20 z-10 right-6 bottom-6' 
          loading='eager'
        />
        <Hero />
      </section>
      
      <h1 className="text-center p-10 text-5xl mb-5">Nuestras Piezas</h1>
      <section className='grid mb-20 mx-auto gap-10 px-5 grid-cols-2 xs:px-20 sm:px-10 sm:grid-cols-3 md:px-16 lg:px-8 md:grid-cols-3 lg:grid-cols-6 gap-y-30'>
        <Link to={'catalogo/chains'}>
          <PieceHome
            image='aretes.webp'
            category='Cadenas'
            rotate='rotate-12'
          />
        </Link>
        <Link to={'catalogo/cuffBracelets'}>
          <PieceHome
            image='aretes.webp'
            category='Esclavas'
            rotate='-rotate-6'
          />
        </Link>
        
        <Link to={'catalogo/earings'}>
          <PieceHome
            image='aretes.webp'
            category='Aretes'
            rotate='rotate-6'
          />
        </Link>
        
        <Link to={'catalogo/engagementRings'}>
          <PieceHome
            image='aretes.webp'
            category='Anillos de compromiso'
            rotate='rotate-12'
          />
        </Link>
        
        <Link to={'catalogo/pendants'}>
          <PieceHome
            image='aretes.webp'
            category='Dijes'
            rotate='-rotate-3'
          />
        </Link>
        
        <Link to={'catalogo/rings'}>
          <PieceHome
            image='aretes.webp'
            category='Anillos'
            rotate='rotate-6'
          />
        </Link>
      </section>

      <h1 className="text-center pb-5 px-6 pt-0 text-4xl sm:p-10 sm:text-5xl capitalize">Crea tu propia pieza personalizada</h1>
      <section>
        <CustomizationForm/>
      </section>
    </>
  );
}

export default Home;
