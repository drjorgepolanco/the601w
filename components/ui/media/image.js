
/* Directly from CMS Inputs */
/* ------------------------ */

export const MediaImage   = ({ attr, style = {} }) => (attr.media_image_url) && (<img className="ow-media-image"    style={{ width: '100%', display: 'block', ...style }} src={ attr.media_image_url } alt={ '' } />);
export const MediaBgImage = ({ attr, style = {} }) => (attr.media_image_url) && (<div className="ow-media-bg-image" style={{ backgroundImage: `url(${attr.media_image_url})`, ...style }} title={ '' }></div>);




/* Passing down Props */
/* ------------------ */

/* Html Image */
export const MediaImageProp = ({ alt = '', className = '', src, style = {} }) => (src) && (<img className={ `ow-media-image ${className}` } alt={ alt } src={ src } style={{ width: '100%', display: 'block', ...style }} />);

/* Background Image */
export const MediaBgImageProp = ({ backgroundPosition = 'center', backgroundSize = 'cover', className = '', src, style = {}, title = '' }) => {
  const styles = { 
    width: '100%', 
    height: '100%', 
    display: 'block', 
    backgroundImage: `url(${src})`, 
    backgroundSize, 
    backgroundPosition, 
    backgroundRepeat: 'no-repeat',
    ...style
  }
  return (src) && (<div className={ `ow-media-bg-image ${className}` } title={ title } style={ styles }></div>);
}