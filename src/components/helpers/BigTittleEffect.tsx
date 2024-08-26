import anime from "animejs";
import { useEffect } from "react"

export default function BigTittleEffect({children} : {children : React.ReactNode}) {
    
    useEffect(() => {
        anime.timeline({loop: false})
        .add({
            targets: '.ml15 .word',
            scale: [2,1],
            opacity: [0,1],
            easing: "easeOutCirc",
            duration: 1000,
            delay: (_el, i) => 500 * i
        })
    }, [])
    const wordsArray = children?.toString().split(' ')

    return (
        <h1 className="ml15 text-center mt-96 mb-5 text-[2.5rem] h-56 xs:h-40 md:h-36 sm:text-5xl uppercase px-4 space-x-3 after:bg-black after:block after:w-8/12 after:h-[2px] after:mx-auto after:mt-3 before:bg-black before:block before:w-8/12 before:h-[2px] before:mx-auto before:mb-4 mx-auto">
            {wordsArray?.map(word => (
                <span key={word} className="word">{word}</span>
            ))}
        </h1>
    )
}
