import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function PostShare({title, url}) {
    return(
        <section className="w-10/12 lg:max-w-3xl mx-auto grid grid-cols-3 gap-4 mb-10 lg:mt-10 lg:mb-20">

            <button data-sharer="facebook" data-title={`"Devocional: ${title} | Novas de Cada Manhã"`} data-url={`https://novasdecadamanha.com.br/${url}`} className="p-4 bg-gray-200 rounded-lg text-gray-700 flex items-center justify-center">
                <FaFacebook />
            </button>
            
            <button data-sharer="twitter" data-title={`"Devocional: ${title} | Novas de Cada Manhã"`} data-via="CadaManha" data-url={`https://novasdecadamanha.com.br/${url}`} className="p-4 bg-gray-200 rounded-lg text-gray-700 flex items-center justify-center">
                <FaTwitter />
            </button>
            
            <button data-sharer="whatsapp" data-title={`"Devocional: ${title} | Novas de Cada Manhã"`} data-url={`https://novasdecadamanha.com.br/${url}`} className="p-4 bg-gray-200 rounded-lg text-gray-700 flex items-center justify-center">
                <FaWhatsapp />
            </button>
        </section>
    )
}