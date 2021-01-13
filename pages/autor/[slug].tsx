import Link from 'next/link';
import React from 'react';
import Graphcms from '../../utils/contentAPI'

export async function getStaticProps({ params }) {
  const { post } = await Graphcms.request(
    `
    query PostPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        collection
        content {
          markdown
        }
        author {
          id
          slug
          name
          biography
          website
          facebookProfile
          twitterProfile
        }
      }
    }
  `,
    {
      slug: params.slug
    }
  );

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await Graphcms.request(`
    {
      posts {
        slug
        collection
      }
    }
  `);

  return {
    paths: posts.map(({ slug, collection }) => ({
      params: { 
        collection, 
        slug 
      },
    })),
    fallback: true,
  };
}

export default ({ post }) => (
  <React.Fragment>
    <h1>{post.title}</h1>
    <p>{post.excerpt}</p>
    <p>{post.collection}</p>
    <br/>
    {post.content.markdown}
    <br/>
    <Link href={`/autor/${post.author.slug}`}>
      <a>
        {post.author.name}
      </a>
    </Link>
    {/* <p>{post.content}</p> */}
  </React.Fragment>
);