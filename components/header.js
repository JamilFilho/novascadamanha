import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="fixed w-full h-20 flex flex-row items-center justify-between px-12 bg-white shadow z-50">
      <div className="md:w-1/4">
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
      <ul className="hidden md:flex md:w-3/4">
        <li className="mx-4">
          <Link href="/devocionais">
            <a className="font-medium">Todos os Devocionais</a>
          </Link>
        </li>
        
        <li className="mx-4">
          <Link href="/devocional/whatsapp">
            <a className="font-medium">Devocional no WhatsApp</a>
          </Link>
        </li>

        <li className="mx-4">
          <Link href="/devocional/telegram">
            <a className="font-medium">Devocional no Telegram</a>
          </Link>
        </li>

        <li>
          <Link href="/editorial/sobre">
            <a className="font-medium">Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
