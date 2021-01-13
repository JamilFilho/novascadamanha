import Link from 'next/link'
import Graphcms from '../utils/contentAPI'

export async function getStaticProps() {
  const { posts } = await Graphcms.request(
    `
    {
        posts {
          id,
          title,
          excerpt,
          slug,
          content{
            html
          },
          collection,
          author {
            id,
            name,
            biography,
            website,
            facebookProfile,
            twitterProfile
          }
        }
      }
    `
  )

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
        posts,
    }
  }
}

const HomePage = (props) =>{
  return(
    <ul>
        {props.posts.map(post => (
          <li key={post.id}>
            <Link href={`/${post.collection}/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default HomePage