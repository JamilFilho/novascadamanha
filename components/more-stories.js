import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, feed }) {
  if(feed === "true") {
    return (
      <section className="pt-16 pb-10 px-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
          {posts.map((post) => (
            <PostPreview key={post.slug} title={post.title} author={post.author} slug={post.slug} excerpt={post.excerpt} /> ))}
        </div>
      </section>
    )  
  }
  return (
    <section className="pt-16 pb-10 px-12">
      <header className="mb-16 pb-2 border-b-2">
        <h4 className="font-serif font-black text-brand-background text-3xl">Leia também</h4>
      </header>
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} author={post.author} slug={post.slug} excerpt={post.excerpt} /> ))}
      </div>
    </section>
  )
}
