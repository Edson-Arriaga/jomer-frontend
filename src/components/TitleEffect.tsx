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
                delay: (el, i) => 60 * (i+1)
            })
        }
    }, []);
    
    return (
    <div className='pb-10 px-4 pt-16 md:pt-24 lg:pb-20 lg:p-32'>
        <h1 className='text-4xl ml3 text-white lg:text-5xl'>
            {children}
        </h1>
    </div>
    );
}
