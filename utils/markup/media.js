export const MrkpImage = (props) => {
  const { alt = '', src, customStyle } = props;
  return <img className="ow-image" src={ src } alt={ alt } style={ customStyle } />;
}
export const MrkpVideo = (props) => {
  const { src, customStyle } = props;
  return (
    <video className="ow-video" autoPlay loop muted style={ customStyle }>
      <source type="video/mp4" src={ src } />
    </video>
  );
}