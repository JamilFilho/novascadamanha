import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="p-12 flex items-center justify-center bg-brand-background">
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
    </footer>
  )
}
