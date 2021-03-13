// import { useRouter } from 'next/router';
import { server } from '../../../config';

import Link from 'next/link';
import Meta from '../../../components/Meta';

const article = ({ post }) => {
  //   const router = useRouter();
  // This will contain any paramters in the route

  //   const { id } = router.query;

  // console.log(post);
  return (
    <>
      <Meta title={post.title} description={post.excerpt} />

      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <Link href='/'>Go Back</Link>
    </>
  );
};

// Fetches the data at the time of request rather than getStaticProps which will fetches the data at build time.

// getStaticPaths to dynamically generate all of the paths with all the data

// getServerSideProps and getStaticProps can get passed in a context which allow us to get the id of whatever in the url.

// ###########################
export const getStaticProps = async (context) => {
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  // );
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

// getStaticPaths is required for dynamic SSG pages

export const getStaticPaths = async (context) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const res = await fetch(`${server}/api/articles`);

  const posts = await res.json();

  const ids = posts.map((post) => post.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };

  //   fallback: false is used becuase if we redirect to article that deos not exist in the data, it will display a 404
};

// ###########################

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

export default article;
