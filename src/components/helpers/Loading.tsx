export default function Loading({img, contHeight, mt} : {img: string, contHeight?: string, mt?: string}) {
    return (
        <div className={`w-full h-${contHeight} flex justify-center items-center mt-${mt}`}>
            <img className={`w-${img} p- animate-ping`} src="/images/logos/black-logo.webp" alt="black logo loading" />
        </div>
    )
}
 