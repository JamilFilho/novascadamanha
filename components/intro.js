export default function Intro() {
  return (
    <section className="relative w-full h-header-mobile lg:h-header-desktop flex flex-col justify-center items-center px-4 lg:px-0 text-center bg-brand-background">
      <h1 className="font-sans text-4xl lg:text-6xl font-bold text-brand-text">
        Novas de Cada Manhã
      </h1>
      <h2 className="text-xl lg:text-2xl text-gray-400">
        Devocionais diários para iniciar sua manhã.
      </h2>

      <div className="absolute -bottom-32 lg:-bottom-20 w-11/12 lg:w-8/12 pt-8 pb-10 px-4 flex flex-col items-center justify-center shadow-sm bg-white rounded-xl text-center">
        <div className="mb-8 font-bold text-xl text-brand-background">Receba nossos devocionais diários em seu e-email.</div>
        <form className="w-10/12 flex flex-col lg:flex-row" action="https://app.convertkit.com/forms/1993669/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="1993669" data-uid="da4738a4df" data-format="inline" data-version="5">
          <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div className="w-full lg:w-9/12 lg:grid lg:grid-cols-2 lg:gap-2">
            <input aria-label="Nome" name="fields[first_name]" className="w-full mb-2 lg:mb-0 rounded-md border-gray-300 focus:outline-brand-background" placeholder="Nome" type="text" required/>

            <input type="email" placeholder="Seu e-mail" name="email_address" className="w-full rounded-md border-gray-300 focus:outline-brand-background" required/>
          </div>
          <button data-element="submit" className="w-full lg:w-3/12 rounded-md p-2 mt-2 lg:mt-0 lg:ml-4 font-bold text-white bg-brand-text">Assinar</button>
        </form>
      </div>
    </section>
  )
}
