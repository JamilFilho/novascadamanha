import Avatar from '../components/avatar'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, author, excerpt }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <p>{excerpt}</p>
      
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}
