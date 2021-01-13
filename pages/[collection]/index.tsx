import Link from 'next/link';
import Graphcms from '../../utils/contentAPI'

export async function getStaticProps({ params }) {
    const { posts } = await Graphcms.request(
      `
      query postPageQuery($collection: String!) {
        posts(where: { collection: $collection }) {
            id
            title
            slug
            collection
            excerpt
        }
      }
    `,
      {
        collection: params.collection
      }
    );
  
    return {
      props: {
        posts,
      },
    };
}

export async function getStaticPaths() {
    const { posts } = await Graphcms.request(`
      {
        posts {
            collection
        }
      }
    `);
  
    return {
      paths: posts.map(({ collection }) => ({
        params: { 
          collection
        },
      })),
      fallback: true,
    };
  }

const CollectionPage = (props) => {
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

export default CollectionPage