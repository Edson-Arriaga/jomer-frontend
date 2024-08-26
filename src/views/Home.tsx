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
            
            if(personalizationY <= 200){
                setIsPersonalizationTittleActive(true)
            }

            const ourPiecesTittle = ourPiecesTittleRef.current
            const {y : ourPiecesY} = ourPiecesTittle!.getBoundingClientRect()

            if(ourPiecesY <= 400){
                setIsOurPiecesTittleActive(true)
            }
            
            console.log(personalizationY)
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
            
            <section className='bg-cover bg-center pt-8 pb-20 relative'>
                <div ref={ourPiecesTittleRef} className={`${!isOurPiecesTittleActive ? 'opacity-0' : 'opacity-100'} ease transition-opacity`}>
                    {isOurPiecesTittleActive 
                        ? <LittleTittleEffect home="sm:text-6xl">Nuestras Piezas</LittleTittleEffect>
                        : <div className='h-32 mt-10'></div>
                    }
                </div>
                
                <div className='grid mb-8 mx-auto gap-10 px-5 grid-cols-2 xs:px-20 sm:px-10 sm:grid-cols-3 md:px-16 lg:px-8 md:grid-cols-3 lg:grid-cols-6 gap-y-30'>
                    <Link to={'catalogo/chain'}>
                    <CategoryCard
                        image='cadenas.webp'
                        category='Cadenas'
                        rotate='rotate-12'
                    />
                    </Link>
                    <Link to={'catalogo/cuffBracelet'}>
                    <CategoryCard
                        image='cuffBracelets.webp'
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
                        image='marriage.webp'
                        category='Matrimonio'
                        rotate='rotate-12'
                    />
                    </Link>
                
                    <Link to={'catalogo/pendant'}>
                    <CategoryCard
                        image='pendants.webp'
                        category='Dijes'
                        rotate='-rotate-3'
                    />
                    </Link>
                
                    <Link to={'catalogo/ring'}>
                    <CategoryCard
                        image='rings.webp'
                        category='Anillos'
                        rotate='rotate-6'
                    />
                    </Link>
                </div>
            </section>

            <div className='flex flex-col sm:flex-row overflow-hidden relative'>
                <div className="aboutUs-decoration-bottom bg-zinc-200 h-32 absolute w-full -top-10 z-10"></div>
                
                <div className='overflow-hidden cursor-pointer relative hover:scale-105 transition-transform'>
                    <p className='inset-0 absolute text-white z-10 flex justify-center items-center uppercase text-4xl top-24 sm:top-0 sm:text-5xl font-bold hover:scale-125 transition-transform'><>Section 1</></p>
                    <img className='brightness-50 ' src="/images/decor/decor-2.jpg" alt="Jomer Decor" loading='lazy' />
                </div>
                <div className='overflow-hidden cursor-pointer relative hover:scale-105 transition-transform'>
                    <p className='inset-0 absolute text-white z-10 flex justify-center items-center uppercase text-4xl -top-12 sm:top-0 sm:text-5xl font-bold hover:scale-125 transition-transform'><>section 2</></p>
                    <img className='hover:scale-105 transition-transform brightness-50 ' src="/images/decor/decor-3.jpg" alt="Jomer Decor" loading='lazy' />
                </div>

                <div className="aboutUs-decoration-top bg-zinc-200 h-32 absolute w-full -bottom-10"></div>
            </div>

            <section className='flex flex-col lg:flex-row relative mt-5 mx-2'>
                
                <p className='absolute text-center left-5 sm:left-32 top-10 mx-auto rotate-12 font-black text-3xl w-52 uppercase'>¿No te llamó la atención algo del <span className='text-blue-900 uppercase text-4xl'>catálogo</span>?</p>
                
                {/* <div className='absolute text-center left-32 top-86 mx-auto rotate-12'>
                    <img src="/images/icons/curvedArrow.png" alt="Curved Arrow" />
                </div> */}

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
