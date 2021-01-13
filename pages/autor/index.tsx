import Link from 'next/link';
import Graphcms from '../../utils/contentAPI'

export async function getStaticProps() {
  const { authors } = await Graphcms.request(
    `
    {
      authors {
        name
        slug
      }
    }
    `
  );

  return {
    props: {
      authors,
    },
  };
}

const AuthorPage = (props) => {
  return(
    <ul>
        {props.authors.map(author => (
          <li key={author.id}>
            <Link href={`/autor/${author.slug}`}>
              {author.name}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default AuthorPage