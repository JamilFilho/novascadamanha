import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full relative p-12 bg-brand-background">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/4 flex items-center justify-center">
          <Link href="/">
            <a>
              <Image 
                src="/assets/images/site-logo.png"
                alt="Novas de Cada Manhã"
                width={250}
                height={37.9}
              />
            </a>
          </Link>
        </div>

        <ul className="w-full md:w-3/4 text-center flex flex-col mb-10 md:mb-0 md:flex-row justify-end">
          <li className="mb-8 md:mb-0">
            <Link href="/editorial/fale-conosco">
              <a className="text-white md:mr-6">Fale Conosco</a>
            </Link>
          </li>

          <li className="mb-8 md:mb-0">
            <Link href="/editorial/termos-de-uso">
              <a className="text-white md:mr-6">Termos de Uso</a>
            </Link>
          </li>

          <li className="mb-8 md:mb-0">
            <Link href="/editorial/politica-de-privacidade">
              <a className="text-white">Política de Privacidade</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
