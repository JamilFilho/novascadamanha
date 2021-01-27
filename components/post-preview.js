import Link from 'next/link'

export default function PostPreview({ title, excerpt, slug }) {
  return (
    <article className="mb-20 lg:mb-0">
      <h3 className="font-serif text-3xl lg:text-2xl mb-3 font-bold">
        <Link as={`/${slug}`} href="/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg lg:text-base mb-4">{excerpt}</p>
    </article>
  )
}
