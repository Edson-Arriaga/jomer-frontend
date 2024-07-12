import { ReactNode, useEffect } from 'react'
import anime from 'animejs';

export default function TitleEffect({children} : {children: ReactNode}) {
    
    useEffect(() => {
        const textWrapper = document.querySelector('.ml3');
        if (textWrapper) {
          textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
          
          anime.timeline({loop: false})
            .add({
                targets: '.ml3 .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (_el, i) => 75 * (i+1)
            })
        }
    }, []);
    
    return (
        <h1 className='ml3 text-3xl text-white xs:text-4xl md:text-5xl font-black tracking-wider lg:text-6xl'>
            {children}
        </h1>
    );
}
