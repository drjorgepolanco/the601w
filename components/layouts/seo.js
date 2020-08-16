export const Seo = (props) => {
  const { single, site, acf } = props;
  const { description, name, url } = site;

  if (!single.acf.seo_metadata) {
    return null;
  }
  else {
    const { image, meta_data, og_type, robots, twitter, show } = single.acf.seo_metadata;
    const { title, desc } = meta_data;
  
    const meta_title = ( show && title ) ? title : name;
    const meta_desc  = ( show && desc )  ? desc : description;
  
    const { meta_index, meta_follow } = robots;
  
    const index  = (show && meta_index)  ? 'index'  : 'noindex';
    const follow = (show && meta_follow) ? 'follow' : 'nofollow';
  
    const showTwitter = show && twitter.show;
  
    return (
      <>
        <link rel="canonical" href={ url } />
  
        <meta name="title"       content={ meta_title } />
        <meta name="description" content={ meta_desc } />
        
        { show && <meta property="og:site_name"       content={ name } /> }
        { show && <meta property="og:url"             content={ url } /> }
        { show && <meta name="robots"                 content={ `${index}, ${follow}` } /> }
        { show && <meta property="og:title"           content={ meta_title } /> }
        { show && <meta property="og:description"     content={ meta_desc } /> }
        { show && <meta property="og:type"            content={ og_type } /> }
        { show && <meta property="og:image"           content={ image } /> }
        
        { showTwitter && <meta name="twitter:card"        content={ twitter.card } /> }
        { showTwitter && <meta name="twitter:site"        content={ acf.opts_seo.twitter } /> }
        { showTwitter && <meta name="twitter:title"       content={ meta_title } /> }
        { showTwitter && <meta name="twitter:description" content={ meta_desc } />}
        { showTwitter && <meta name="twitter:image"       content={ image } /> }
      </>
    );
  }
} 