export default function Loading({img, contHeight} : {img: string, contHeight: string}) {
    return (
        <div className={`w-full h-${contHeight} flex justify-center items-center`}>
            <img className={`w-${img} h-${img} animate-ping`} src="/images/logos/black-logo.png" alt="black logo loading" />
        </div>
    )
}
 