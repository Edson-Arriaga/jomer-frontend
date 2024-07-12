import Hero from '../components/Hero';
import PieceHome from '../components/PieceHome';

export function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-center p-10 text-5xl uppercase">Nuestras piezas</h1>
      <section className='grid mb-20 mx-auto gap-10 px-5 grid-cols-2 xs:px-20 sm:px-10 sm:grid-cols-3 md:px-16 lg:px-8 md:grid-cols-3 lg:grid-cols-6 gap-y-30'>
        <PieceHome
          image='aretes.webp'
          category='Cadenas'
          rotate='rotate-12'
        />
        <PieceHome
          image='aretes.webp'
          category='Esclavas'
          rotate='-rotate-6'
        />
        <PieceHome
          image='aretes.webp'
          category='Aretes'
          rotate='rotate-6'
        />
        <PieceHome
          image='aretes.webp'
          category='Anillos de compromiso'
          rotate='rotate-12'
        />
        <PieceHome
          image='aretes.webp'
          category='Dijes'
          rotate='-rotate-3'
        />
        <PieceHome
          image='aretes.webp'
          category='Anillos'
          rotate='rotate-6'
        />
      </section>
    </>
  );
}

export default Home;
