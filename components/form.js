export function SubscribeForm() {
    return(
        <div className="absolute -bottom-32 lg:-bottom-20 w-11/12 lg:w-8/12 py-8 px-4 flex flex-col items-center justify-center shadow-sm bg-white rounded-xl">
            <div className="mb-8 text-center">
                <div className="mb-2 font-bold text-xl text-brand-background">
                    Assine nossa newsletter diária
                </div>
                
                <div className="font-medium text-base text-brand-background">
                    Todas as manhãs um devocional em seu e-mail para edificar sua fé.
                </div>
            </div>
            
            <form className="mb-4 w-10/12 flex flex-col lg:flex-row" action="https://app.convertkit.com/forms/1993669/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="1993669" data-uid="da4738a4df" data-format="inline" data-version="5">
                <input type="email" placeholder="Seu e-mail" name="email_address" className="w-full rounded-md border-gray-300 focus:outline-brand-background" required/>

                <button data-element="submit" className="w-full lg:w-3/12 rounded-md p-2 mt-2 lg:mt-0 lg:ml-4 font-bold text-white bg-brand-text">Assinar</button>
            </form>
        </div>
    )
}