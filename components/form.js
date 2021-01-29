export default function SubscribeForm({bgColor, shadow, padding, textSize}) {
    return(
        <div className={`w-full flex flex-col items-center justify-center rounded-xl ${bgColor} ${shadow} ${padding}`}>
            <div className="mb-8 text-center">
                <div className={`mb-2 font-bold ${textSize} text-brand-background`}>
                    Devocional no WhatsApp
                </div>
                
                <div className="font-medium text-base text-brand-background">
                    Receba, gratuitamente, nossos devocionais em seu WhatsApp.
                </div>
            </div>

            <a href="https://api.whatsapp.com/send?phone=5516999861874&text=Desejo%20receber%20os%20devocionais%20pelo%20WhatsApp" target="_blanck" title="Cadastrar meu WhatsApp" className="px-4 py-2 rounded text-base text-white bg-green-700">
                Cadastrar meu WhatsApp
            </a>
        </div>
    )
}