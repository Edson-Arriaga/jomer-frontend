import anime from "animejs";
import { useEffect } from "react"

export default function LittleTittleEffect({children} : {children: React.ReactNode}) {
    
    useEffect(()=>{
        var textWrapper = document.querySelector('.ml1 .letters');
        if(textWrapper){
            textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
        }

        anime.timeline({loop: false})
        .add({
            targets: '.ml1 .letter',
            scale: [0.3,1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (_el, i) => 70 * (i+1)
        }).add({
            targets: '.ml1 .line',
            scaleX: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            offset: '-=875',
            delay: (_el, i, l) => 80 * (l - i)
        })
    }, [])
    
    return (
        <h1 className="ml1 h-32 mt-10 text-center text-[2.4rem] sm:text-5xl uppercase pb-10 px-4">
            <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters">{children}</span>
                <span className="line line2"></span>
            </span>
        </h1>
    )
}
