import Image from 'next/image'

export default function PodcastBanner() {
    return(
        <section className="w-full py-20 bg-brand-background">
            <div className="lg:mt-20 flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-12 md:mb-0 px-10 flex items-center justify-center">
                    <Image
                        className="rounded shadow-lg"
                        src="/assets/images/novas-de-cada-manha-devocional-audio.jpg"
                        alt="Devocionais em Áudio"
                        width={350}
                        height={350}
                    />
                </div>

                <div className="md:w-1/2 px-10 flex flex-col justify-center text-center md:text-left">
                <h5 className="text-3xl md:text-4xl text-white font-black mb-2">Devocionais em Áudio</h5>
                <p className="text-base md:text-xl text-gray-100">Ouça nossos devocionais diários em áudio.</p>

                <ul className="flex flex-row justify-center md:justify-start items-center mt-12">
                    <li>
                    <a className="py-2 px-4 rounded ring-2 flex flex-row ring-white text-white" href="https://open.spotify.com/show/7epPwHBgSlxcV91Ux39FGe" target="_blanck">
                        Ouvir no <img className="ml-2" src="/assets/images/spotify-logo.svg"/></a>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}