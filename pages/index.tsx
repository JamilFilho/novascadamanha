import Link from 'next/link';
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
  );

  return {
    props: {
        posts,
    },
  };
}

export default ({ posts }) =>
    posts.map(({ slug, title, collection }) => (
    <ul>
        <li>
        <Link key={slug} href={`/${collection}/${slug}`}>
            <a>{title}</a>
        </Link>
        </li>
    </ul>
  ));