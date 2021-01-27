import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="fixed w-full h-20 flex flex-row items-center justify-center bg-white shadow z-50">
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
    </nav>
  )
}
