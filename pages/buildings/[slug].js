import { api } from '../../utils';
import { Layout } from '../../components/layouts';
import { Blocks } from '../../components/blocks';
import * as wFmt from '../../components/ui/the601w/format';
import * as wMrkp from '../../components/ui/the601w/markup';

const Building = (props) => {
  const { posts, single } = props;
  const { blocks } = single;
  return (
    <Layout { ...props }>
      <div className="ow-post-type ow-building">
        <Blocks { ...props } blocks={ blocks } />
      </div>
      <wMrkp.PostsNav 
          blockSlug="the601w-building"
          parent={{ 
            bg: 'white', 
            color: wFmt.color.portfolio_dark,
            name: 'portfolio' 
          }}
          style={{ color: 'white' }}
          posts={ posts }
          control="prev"
          linkNext="post"
          linkPrev="parent"
          types="buildings" 
        />
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = await api.get('/wp/v2/buildings?per_page=100');
  const buildings = res.data;
  const paths = buildings.map((single) => `/buildings/${single.slug}`);
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const site      = await api.get();
  const acf       = await api.get('/acf/v3/options/options/');
  const buildings = await api.get(`/wp/v2/buildings?per_page=100`);
  const res       = await api.get(`/wp/v2/buildings?slug=${params.slug}`);
  return { props: { posts: buildings.data.reverse(), single: res.data[0], site: site.data, acf: acf.data.acf } };
}
export default Building;



