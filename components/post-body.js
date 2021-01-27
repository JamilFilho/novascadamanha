import Avatar from '../components/avatar'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ author, content }) {
  return (
    <>
    <div className="relative w-10/12 lg:max-w-3xl mx-auto px-4 py-8 rounded-t-2xl -mt-10 z-10 bg-white">
      <div className="mt-10">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="px-4 lg:px-12 mt-20">
        <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
    </>
  )
}