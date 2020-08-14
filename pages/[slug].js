import { api }    from '../utils';
import { Layout } from '../components/layouts';
import { Blocks } from '../components/blocks';

const Page = (props) => {
  const { single } = props;
  const { blocks } = single;
  
  return (
    <Layout single={ single }>
      <div className="ow-post-type ow-page">
        <Blocks blocks={ blocks } />
      </div>
    </Layout>
  )
}
export async function getStaticPaths() {
  const res = await api.get('/wp/v2/pages?per_page=25');
  const pages = res.data;
  const paths = pages.map((single) => `/${single.slug}`);
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await api.get(`/wp/v2/pages?slug=${params.slug}`);
  const single = res.data[0];
  return { props: { single } }
}
export default Page;
