import { api, indexById } from '../../utils';
import { Layout } from '../../components/layouts';
import { Blocks } from '../../components/blocks';
import * as wFmt from '../../components/ui/the601w/format';
import * as wMrkp from '../../components/ui/the601w/markup';

const Case = (props) => {
  const { posts, single } = props;
  const { blocks } = single;
  const index = indexById(posts, single);
  return (
    <Layout { ...props }>
      <div className="ow-post-type ow-case">
        <Blocks { ...props } blocks={ blocks } />
        <wMrkp.PostsNav 
          blockSlug="the601w-case-hero" 
          index={ index }
          parent={{ 
            bg: 'white', 
            color: wFmt.color.portfolio_dark,
            name: 'philosophy' 
          }}
          style={{ color: 'white' }}
          posts={ posts }
          control="both"
          linkNext="post"
          linkPrev="parent"
          types="cases" 
        />
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await api.get('/wp/v2/cases');
  const cases = res.data;
  const paths = cases.map((single) => `/cases/${single.slug}`);
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const site  = await api.get();
  const acf   = await api.get('/acf/v3/options/options/');
  const cases = await api.get(`/wp/v2/cases?per_page=100`);
  const res   = await api.get(`/wp/v2/cases?slug=${params.slug}`);
  return { props: { posts: cases.data.reverse(), single: res.data[0], site: site.data, acf: acf.data.acf } }
}
export default Case;
