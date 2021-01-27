import Image from 'next/image'

export default function BannerAd() {
    return(
        <section className="relative w-full h-64 mb-40 flex flex-row justify-center items-center bg-pilgrim">
            <Image
                src="/assets/ads/pilgrim-image.png"
                alt="The Pilgrim"
                width={437.3}
                height={400}
                objectFit="fill"
            />
            <div className="w-1/2 p-10">
                <p className="text-3xl font-medium mb-2">Seja edificado em qualquer lugar.</p>
                <p className="text-xl text-white">Todo o conteúdo para crescer na fé em uma única assinatura. Teste gratuitamente por 14 dias.</p>
            </div>
        </section>
    )
}