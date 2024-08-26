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
            
            if(personalizationY <= 550){
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
                <div className='absolute w-full h-full inset-0 bg-slate-100'></div>
                <div ref={ourPiecesTittleRef} className={`${!isOurPiecesTittleActive ? 'opacity-0' : 'opacity-100'} ease transition-opacity`}>
                    {isOurPiecesTittleActive ? <LittleTittleEffect home="text-black sm:text-6xl">Nuestras Piezas</LittleTittleEffect>: <div className='h-32 mt-10'></div>}
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
                <div className="aboutUs-decoration-bottom bg-slate-100 h-32 absolute w-full -top-10 z-10"></div>
                <div className='overflow-hidden brightness-50 cursor-pointer'>
                    <img className='hover:scale-105 transition-transform' src="/images/decor/decor-2.jpg" alt="" loading='lazy' />
                </div>
                <div className='overflow-hidden brightness-50 cursor-pointer'>
                    <img className='hover:scale-105 transition-transform' src="/images/decor/decor-3.jpg" alt="" loading='lazy' />
                </div>
                <div className="aboutUs-decoration-top bg-zinc-200 h-32 absolute w-full -bottom-10"></div>
            </div>
            
            <div ref={personalizationTittleRef} className={`${!isPersonalizationTittleActive ? 'opacity-0' : 'opacity-100'} ease transition-opacity`}>
                {isPersonalizationTittleActive ? <BigTittleEffect>Crea tu propia pieza personalizada</BigTittleEffect> : <div className='h-56 xs:h-40 md:h-36 mt-10 sm:mb-5'></div>}
            </div>
            

            <section className='relative'>
                <CustomizationForm/>
            </section>
        </>
    );
}

export default Home;
