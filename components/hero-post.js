import Link from 'next/link'

export default function HeroPost({ title, excerpt, slug }) {
  return (
    <section className="pt-40 pb-32 lg:pb-40 flex justify-center bg-gray-50">
      <div className="w-4/5 lg:w-3/5 mt-12">
        <div>
          <span className="rounded px-4 py-2 text-xs text-gray-100 font-bold uppercase bg-brand-background">Devocional de hoje</span>
          <h3 className="mt-4 mb-4 font-serif text-6xl font-black leading-tight">
            <Link as={`/${slug}`} href="/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-base lg:text-xl leading-tight">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
