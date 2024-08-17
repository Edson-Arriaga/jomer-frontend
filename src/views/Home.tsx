import { Link } from 'react-router-dom';
import CustomizationForm from '../components/home/CustomizationForm';
import Hero from '../components/home/Hero';
import CategoryCard from '../components/home/CategoryCard';
import useScreenSize from '../hooks/useScreenSize';

export function Home() {
    const {width} = useScreenSize() 

    return (
        <>
            <section className='relative'>
                {width > 1024 ? (
                <img 
                    src="/images/logos/vertical-white-logo.webp"
                    alt="Jomer Logo"
                    className='absolute w-96 z-10 -right-20 bottom-14' 
                />
                ) : (
                <img 
                    src="/images/logos/complete-white-logo.webp"
                    alt="Jomer Logo"
                    className='absolute w-24 z-10 right-6 bottom-6' 
                />
                )}
                <Hero />
            </section>

            <h1 className="text-center p-10 text-5xl mb-5 uppercase mt-14">Nuestras Piezas</h1>
            <section className='grid mb-20 mx-auto gap-10 px-5 grid-cols-2 xs:px-20 sm:px-10 sm:grid-cols-3 md:px-16 lg:px-8 md:grid-cols-3 lg:grid-cols-6 gap-y-30'>
                <Link to={'catalogo/chain'}>
                <CategoryCard
                    image='earings.webp'
                    category='Cadenas'
                    rotate='rotate-12'
                />
                </Link>
                <Link to={'catalogo/cuffBracelet'}>
                <CategoryCard
                    image='earings.webp'
                    category='Esclavas'
                    rotate='-rotate-6'
                />
                </Link>
                
                <Link to={'catalogo/earings'}>
                <CategoryCard
                    image='earings.webp'
                    category='Aretes'
                    rotate='rotate-6'
                />
                </Link>
                
                <Link to={'catalogo/marriage'}>
                <CategoryCard
                    image='earings.webp'
                    category='Matrimonio'
                    rotate='rotate-12'
                />
                </Link>
                
                <Link to={'catalogo/pendant'}>
                <CategoryCard
                    image='earings.webp'
                    category='Dijes'
                    rotate='-rotate-3'
                />
                </Link>
                
                <Link to={'catalogo/ring'}>
                <CategoryCard
                    image='earings.webp'
                    category='Anillos'
                    rotate='rotate-6'
                />
                </Link>
            </section>

            <h1 className="text-center pb-5 px-6 pt-0 text-4xl sm:p-10 sm:text-5xl uppercase">Crea tu propia pieza personalizada</h1>
            <section>
                <CustomizationForm/>
            </section>
        </>
    );
}

export default Home;
