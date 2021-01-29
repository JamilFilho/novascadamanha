import SubscribeForm from '../components/form'

export default function Intro({form}) {
  if(form === "true") {
    return (
      <section className="relative w-full h-header-mobile lg:h-header-desktop flex flex-col justify-center items-center px-4 lg:px-0 text-center bg-brand-background">
        <h1 className="-mt-10 font-sans text-4xl lg:text-6xl font-bold text-brand-text">
          Novas de Cada Manhã
        </h1>
        <h2 className="text-xl lg:text-2xl text-gray-400">
          Devocionais diários para iniciar sua manhã.
        </h2>

        <div className="w-11/12 lg:w-6/12 absolute -bottom-32 lg:-bottom-24">
          <SubscribeForm bgColor="bg-white" shadow="shadow-sm" padding="py-8 px-6" textSize="text-2xl"/>
        </div>
      </section>
    )
  }
  return(
    <section className="relative w-full pt-32 h-header-mobile lg:h-header-desktop px-20 flex flex-col justify-center items-start bg-brand-background">
        <h1 className="-mt-10 font-sans text-4xl lg:text-6xl font-bold text-brand-text">
          Novas de Cada Manhã
        </h1>
        <h2 className="text-xl lg:text-2xl text-gray-400">
          Devocionais diários para iniciar sua manhã.
        </h2>
    </section>
  )
}
