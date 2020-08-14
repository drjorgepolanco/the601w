import { VideoRaw, VideoVimeo, VideoYoutube } from './index';

export class VideoGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '100%'
    }
  }
  componentDidMount() {
    this.setVideoHeight();
    window.addEventListener('resize', this.setVideoHeight.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setVideoHeight.bind(this));
  }
  setVideoHeight = () => {
    if (typeof window !== 'undefined') {
      const { video_aspect } = this.props.attr;
      const isCinemascope = video_aspect === 'cinemascope';
      const isClassic     = video_aspect === 'classic';
      const isHd          = video_aspect === 'hd';
      const isStandard    = video_aspect === 'standard';

      let aspectRatio;
      if (isCinemascope) aspectRatio = 9 / 21;
      if (isClassic)     aspectRatio = 2 / 3;
      if (isHd)          aspectRatio = 9 / 16;
      if (isStandard)    aspectRatio = 3 / 4;

      const video = document.querySelector('.ow-video');
      var windowHeight = window.innerHeight;
      if (video.offsetHeight < windowHeight) {
        this.setState({ height: `${video.offsetWidth * aspectRatio}px` })
      }
    }
  }
  render() {
    const { attr } = this.props;
    const { video_aspect, video_type } = attr;

    const isRaw     = video_type === 'raw';
    const isVimeo   = video_type === 'vimeo';
    const isYoutube = video_type === 'youtube';

    return (
      <div className={ `ow-ctnr-video ${video_aspect}` } style={{ height: this.state.height, maxHeight: '100vh' }}>
        { isRaw     && <VideoRaw     attr={ attr } /> }
        { isVimeo   && <VideoVimeo   attr={ attr } /> }
        { isYoutube && <VideoYoutube attr={ attr } /> }
      </div>
    );
  }
}