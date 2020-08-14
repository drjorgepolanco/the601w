import { api }    from '../../utils';
import { Layout } from '../../components/layouts';
import { Blocks } from '../../components/blocks';

const Post = (props) => {
  const { single } = props;
  const { blocks } = single;
  return (
    <Layout single={ single }>
      <div className="ow-post-type ow-post">
        <Blocks { ...props } blocks={ blocks } />
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await api.get('/wp/v2/posts?per_page=100');
  const posts = res.data;
  const paths = posts.map((single) => `/posts/${single.slug}`);
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await api.get(`/wp/v2/posts?slug=${params.slug}`);
  const single = res.data[0];
  
  return { props: { single } }
}
export default Post;
