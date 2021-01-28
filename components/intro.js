import {SubscribeForm} from '../components/form'

export default function Intro() {
  return (
    <section className="relative w-full h-header-mobile lg:h-header-desktop flex flex-col justify-center items-center px-4 lg:px-0 text-center bg-brand-background">
      <h1 className="-mt-10 font-sans text-4xl lg:text-6xl font-bold text-brand-text">
        Novas de Cada Manhã
      </h1>
      <h2 className="text-xl lg:text-2xl text-gray-400">
        Devocionais diários para iniciar sua manhã.
      </h2>

      <SubscribeForm />
    </section>
  )
}
