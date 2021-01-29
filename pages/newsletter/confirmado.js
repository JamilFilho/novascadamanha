import Image from 'next/image'
import Link from 'next/link'

export default function Newsletter() {
    return(
        <div className="w-full h-screen bg-brand-background flex flex-col items-center justify-center px-8 text-center">
            <div className="absolute top-10 left-2/4 transform -translate-x-2/4">
                <Link href="/">
                    <a>
                        <Image 
                            src="/assets/images/site-logo.png"
                            alt="Novas de Cada Manhã"
                            width={300}
                            height={45.5}
                        />
                    </a>
                </Link>
            </div>
            <div className="mb-6 font-serif text-3xl text-gray-100">
                Sua inscrição foi confirmada
            </div>
            
            <div className="text-base text-gray-300">
                <Link href="/">
                    <a>Voltar para página inicial →</a>
                </Link>
            </div>
        </div>
    )
}