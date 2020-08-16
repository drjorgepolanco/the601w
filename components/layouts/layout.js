import Head from 'next/head';
import { Header, Footer, Seo, GAnalytics, logPageView } from './index';
import Router from 'next/router';
import NProgress from 'nprogress';
import classes from '../../styles/classes.module.scss';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError    = () => NProgress.done();

export const Layout = (props) => {
  const { children, single, site } = props;
  const { name } = site;
  const meta = single.acf.seo_metadata !== null ? single.acf.seo_metadata : {};
  const title = meta.title ? meta.title : '';
  const show = meta.show ? meta.show : 0;
  const meta_title = ( show && title ) ? title : name;
  return (
    <React.Fragment>
      <Head>
        <title>{ meta_title }</title>
        <Seo { ...props } />
      </Head>

      <div className={ classes.wrap_app }>
        <Header />

        <main className="main">
          { children }
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
}