import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import useScript from '../components/useScript'

export default function PostShare({title, url}) {
    useScript('/assets/scripts/sharer.min.js')

    return(
        <section className="grid grid-cols-3 gap-4 lg:mt-10">

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