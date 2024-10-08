import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomizationForm from '../components/home/CustomizationForm';
import Hero from '../components/home/Hero';
import CategoryCard from '../components/home/CategoryCard';
import useScreenSize from '../hooks/useScreenSize';
import BigTittleEffect from '../components/helpers/BigTittleEffect';
import LittleTittleEffect from '../components/helpers/LittleTittleEffect';

export function Home() {
    const {width} = useScreenSize()

    const personalizationTittleRef = useRef<HTMLDivElement | null>(null)
    const ourPiecesTittleRef = useRef<HTMLDivElement | null>(null)

    const [isPersonalizationTittleActive, setIsPersonalizationTittleActive] = useState(false)
    const [isOurPiecesTittleActive, setIsOurPiecesTittleActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const personalizationTittle = personalizationTittleRef.current
            const {y : personalizationY} = personalizationTittle!.getBoundingClientRect()
            
            if(personalizationY <= 350){
                setIsPersonalizationTittleActive(true)
            }

            const ourPiecesTittle = ourPiecesTittleRef.current
            const {y : ourPiecesY} = ourPiecesTittle!.getBoundingClientRect()

            if(ourPiecesY <= 500){
                setIsOurPiecesTittleActive(true)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
            
            <section className='bg-cover bg-center pt-8 lg:pb-10 relative'>
                <div ref={ourPiecesTittleRef} className={`${!isOurPiecesTittleActive ? 'opacity-0' : 'opacity-100'} ease transition-opacity`}>
                    {isOurPiecesTittleActive 
                        ? <LittleTittleEffect home="sm:text-6xl">Nuestras Piezas</LittleTittleEffect>
                        : <div className='h-32 mt-10'></div>
                    }
                </div>
                
                <div className='grid mb-8 mx-auto gap-10 px-5 grid-cols-2 xs:px-20 sm:px-10 sm:grid-cols-3 md:px-16 lg:px-8 md:grid-cols-3 lg:grid-cols-6 gap-y-30'>
                    <Link to={'catalog?category=chain'}>
                    <CategoryCard
                        image='cadenas.webp'
                        category='Cadenas'
                        rotate='rotate-12'
                    />
                    </Link>
                    <Link to={'catalog?category=cuffBracelet'}>
                    <CategoryCard
                        image='cuffBracelets.webp'
                        category='Esclavas'
                        rotate='-rotate-6'
                    />
                    </Link>
                
                    <Link to={'catalog?category=earings'}>
                    <CategoryCard
                        image='earings.webp'
                        category='Aretes'
                        rotate='rotate-6'
                    />
                    </Link>
                
                    <Link to={'catalog?category=marriage'}>
                    <CategoryCard
                        image='marriage.webp'
                        category='Matrimonio'
                        rotate='rotate-12'
                    />
                    </Link>
                
                    <Link to={'catalog?category=pendant'}>
                    <CategoryCard
                        image='pendants.webp'
                        category='Dijes'
                        rotate='-rotate-3'
                    />
                    </Link>
                
                    <Link to={'catalog?category=ring'}>
                    <CategoryCard
                        image='rings.webp'
                        category='Anillos'
                        rotate='rotate-6'
                    />
                    </Link>
                </div>
            </section>

            <div className='flex flex-col sm:flex-row overflow-hidden relative text-center'>
                <div className="absolute-decoration-bottom bg-zinc-200 h-32 absolute w-full -top-10 z-10"></div>
                
                <div className='overflow-hidden cursor-pointer relative hover:scale-105 transition-transform'>
                    <Link to={'/catalog'} className='inset-0 absolute text-white z-10 flex justify-center items-center uppercase text-4xl top-24 sm:top-0 sm:text-5xl font-bold hover:scale-110 transition-transform'><>Catálogo</></Link>
                    <img className='brightness-50 ' src="/images/decor/decor-2.jpg" alt="Jomer Decor" loading='lazy' />
                </div>
                <div className='overflow-hidden cursor-pointer relative hover:scale-105 transition-transform'>
                    <Link to={'/wish-list'} className='inset-0 absolute text-white z-10 flex justify-center items-center uppercase text-4xl -top-12 sm:top-0 sm:text-5xl font-bold hover:scale-110 transition-transform'><>Piezas Favoritas</></Link>
                    <img className='hover:scale-105 transition-transform brightness-50 ' src="/images/decor/decor-3.jpg" alt="Jomer Decor" loading='lazy' />
                </div>

                <div className="absolute-decoration-top bg-zinc-200 h-32 absolute w-full -bottom-10"></div>
            </div>

            <section className='flex flex-col lg:flex-row relative mt-5 mx-2 lg:mx-10'>
                
                <p className='absolute text-center left-5 xs:left-16 sm:left-32 lg:left-5 xl:left-32 top-10 mx-auto rotate-12 font-black text-3xl w-56 uppercase z-10'>¿No te llamó la atención algo del <Link to={`/catalogo/all`} className='text-blue-900 uppercase text-4xl hover:scale-105 animate-pulse'>catálogo</Link>?</p>
        
                <div className={`${isPersonalizationTittleActive && 'opacity-100'} transition-opacity opacity-0 absolute text-center left-40 xs:left-52 sm:left-64 lg:left-40 xl:left-64 top-36 mx-auto rotate-180 -scale-x-10 w-60`}>
                    <img src="/images/icons/straightArrow.svg" alt="Bent Arrow" />
                </div>

                <div ref={personalizationTittleRef} className={`${!isPersonalizationTittleActive ? 'opacity-0' : 'opacity-100'} ease transition-opacity lg:w-1/2`}>
                    {isPersonalizationTittleActive 
                        ? <BigTittleEffect>Crea tu propia pieza personalizada</BigTittleEffect> 
                        : <div className='h-56 xs:h-40 md:h-36 mt-96'></div>
                    }
                </div>
                
                <CustomizationForm/>
            </section>
        </>
    );
}

export default Home;
