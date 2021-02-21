import Image from 'next/image'
import {SiSpotify, SiDeezer, SiGooglepodcasts, SiYoutube} from "react-icons/si"

export default function PodcastBanner() {
    return(
        <section className="w-full py-20 bg-brand-background">
            <div className="lg:mt-12 flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-12 md:mb-0 px-10 flex items-center justify-center">
                    <Image
                        className="rounded shadow-lg"
                        src="/assets/images/novas-de-cada-manha-devocional-audio.jpg"
                        alt="Devocionais em Áudio"
                        width={350}
                        height={350}
                    />
                </div>

                <div className="md:w-3/4 px-10 flex flex-col justify-center text-center md:text-left">
                    <h5 className="text-3xl md:text-4xl text-white font-black mb-2">Devocionais em Áudio</h5>
                    <p className="text-base md:pr-4 md:text-xl text-gray-100">Todos nossos devocionais diários estão sendo disponibilizados também em áudio. Escolha seu aplicativo favorito e ouça nossa reflexões.</p>

                    <ul className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-12">
                        <li className="w-full md:w-auto">
                            <a className="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 mr-2 rounded ring-2 flex flex-row items-center justify-center ring-white text-white" href="https://open.spotify.com/show/7epPwHBgSlxcV91Ux39FGe" target="_blanck">
                            Ouvir no <SiSpotify className="mx-2"/><strong>Spotify</strong></a>
                        </li>
                        <li className="w-full md:w-auto">
                            <a className="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 mr-2 rounded ring-2 flex flex-row items-center justify-center ring-white text-white" href="https://www.deezer.com/pt/show/2328632" target="_blanck">
                            Ouvir no <SiDeezer className="mx-2"/><strong>Deezer</strong></a>
                        </li>
                        <li className="w-full md:w-auto">
                            <a className="w-full md:w-auto mb-4 md:mb-0 py-2 px-4 mr-2 rounded ring-2 flex flex-row items-center justify-center ring-white text-white" href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80ZDI4NmRlMC9wb2RjYXN0L3Jzcw==" target="_blanck">
                            Ouvir no <SiGooglepodcasts className="mx-2"/><strong>Google Podcasts</strong></a>
                        </li>
                        <li className="w-full md:w-auto">
                            <a className="w-full md:w-auto py-2 px-4 mr-2 rounded ring-2 flex flex-row items-center justify-center ring-white text-white" href="https://www.youtube.com/channel/UCnrPsugwSz_q6YAbuAx1ZhA" target="_blanck">
                            Assistir no <SiYoutube className="mx-2"/><strong>YouTube</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}