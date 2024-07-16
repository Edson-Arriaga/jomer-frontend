import ScrollToTop from "../components/ScrollToTop";
import useScreenSize from "../hooks/useScreenSize";

export default function AboutUs() {
  
  const { width } = useScreenSize()

  return (
    <>
      <ScrollToTop/>
        <h1 className="text-center p-10 text-5xl">Nosotros</h1>
        <section className="grid grid-cols-1 lg:grid-cols-2 bg-stone-300">
          <div className="flex flex-col justify-center items-center p-10 py-16 sm:p-20 text-xl text-center gap-10">
            <h2 className="text-5xl after:w-32 after:bg-black font-black after:h-[0.1rem] after:block after: after:mx-auto">JOMER</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta neque sequi vero eos quidem similique facere cumque saepe aliquam, quasi adipisci ab enim earum eveniet sunt asperiores, velit, voluptatem ipsa?</p>
          </div>
          {width > 1024 ? (
            <>
              <div className="flex justify-center">
                <div className="w-full h-hero-lg bg-about-us-1 bg-fixed bg-cover"/>
              </div>
              <div className="flex justify-center">
                <div className="w-full h-hero-lg bg-about-us-2 bg-fixed bg-contain"/>
              </div>
            </>
          ) : (
            <div className="w-full h-screen-50 bg-about-us-phone bg-fixed bg-cover bg-center"></div>
          )}
          <div className="flex flex-col justify-center items-center p-10 py-16 sm:p-20 text-xl text-center gap-10">
            <h2 className="text-5xl after:w-32 after:bg-black font-black after:h-[0.1rem] after:block after: after:mx-auto">JOMER</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta neque sequi vero eos quidem similique facere cumque saepe aliquam, quasi adipisci ab enim earum eveniet sunt asperiores, velit, voluptatem ipsa?</p>
          </div>
        </section>
    </>
  )
}
