export default function PostHeader({ title, excerpt }) {
  return (
    <>
    <header className="relative w-full h-post-header flex flex-col justify-center items-center bg-brand-background">
      <div className="px-4 mt-12 lg:w-2/4 flex flex-col justify-center items-center text-center">
        <h1 className="font-sans text-4xl lg:text-6xl font-bold text-brand-text">{title}</h1>
        <p className="tex-xs lg:text-xl text-gray-50 leading-tight mt-10">{excerpt}</p>
      </div>
    </header>
    </>
  )
}
