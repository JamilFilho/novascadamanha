export default function AmazonBanner(){
    return(
        <section className="w-full min-h-40 py-12 bg-brand-background">
            <a href="/amazon" target="_blanck" className="w-full py-12 px-10 md:px-12 lg:px-32 flex flex-col justify-center md:flex-row md:justify-between md:items-center">
                <div className="mb-10 md:mb-0 flex flex-row">
                    <img className="w-auto h-12 object-cover mr-4" src="/assets/images/amazon-logo.svg" alt="Logo Amazon" />
                    <p className="text-xl font-bold text-gray-100 uppercase mr-4">+</p>
                    <p className="text-xl font-bold text-gray-100 uppercase">Novas de Cada Manhã</p>
                </div>
                <p className="py-4 px-8 rounded bg-blue-500 text-white">
                    Faça suas compras com nosso link
                </p>
            </a>
        </section>
    )
}