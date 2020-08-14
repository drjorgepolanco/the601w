
/* Directly from CMS Inputs */
/* ------------------------ */

export const MediaIcon   = ({ attr }) => (attr.media_icon_url) && (<img className="ow-media-icon"    style={{ width: 'auto', display: 'block', margin: '0 auto' }} src={ attr.media_icon_url } alt={ '' } />);
export const MediaBgIcon = ({ attr }) => (attr.media_icon_url) && (<div className="ow-media-bg-icon" style={{ backgroundImage: `url(${attr.media_icon_url})` }} title={ '' }></div>);