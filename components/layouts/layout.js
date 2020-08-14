import Head from 'next/head';
import { Header, Footer } from './index';
import Router from 'next/router';
import NProgress from 'nprogress';
import classes from '../../styles/classes.module.scss';

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError    = () => NProgress.done();

export const Layout = (props) => {
  const { children, single } = props;

  // console.log(props);

  // const { seo_metadata } = single.acf;
  // const { desc, title }  = seo_metadata.meta_data;
  // const { og_type }      = seo_metadata;
  return (
    <React.Fragment>
      <Head>
        <title>Make this title dynamic</title>
        {/* <title>{ title }</title> */}
        {/* <link rel="canonical" href={ single.link } /> */}

        {/* <meta name="title"       content={ title } />
        <meta name="description" content={ desc } />
        <meta name="robots"      content="noindex, nofollow" />

        <meta property="og:site_name"   content="OffWhite Co." />
        <meta property="og:url"         content={ single.link } />
        <meta property="og:type"        content={ og_type } />
        <meta property="og:title"       content={ title } />
        <meta property="og:description" content={ desc } />
        <meta property="og:image"       content={ single.image } />

        <meta name="twitter:card"        content="summary" />
        <meta name="twitter:site"        content="@offwhitedesign" />
        <meta name="twitter:title"       content={ title } />
        <meta name="twitter:description" content={ desc } />
        <meta name="twitter:image"       content={ single.image } />
        <meta name="twitter:creator"     content="" /> */}
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