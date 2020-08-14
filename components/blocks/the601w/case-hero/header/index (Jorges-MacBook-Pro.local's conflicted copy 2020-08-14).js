import { FmtBlock, MediaBgImageProp } from '../../../../ui';
import { HeaderIntro } from './intro';
import { HeaderTitle } from './title';

export const BlockHeader = (props) => {
  const { header, settings } = props.block.attrs;
  const { media_image_url } = header;
  const { fmt_orientation } = settings;
  // const isPortrait  = fmt_orientation === 'portrait';
  // const isLandscape = fmt_orientation === 'landscape';
  return (
    <FmtBlock attr={ header } attrName={ 'header' }>
      <div className={ `case-hero__header clearfix ${fmt_orientation}` }>
        <div className="wrap-img">
          <MediaBgImageProp src={ media_image_url } />
        </div>

        <div className="wrap-text">
          <HeaderIntro { ...props } />
        </div>
      </div>
      <style jsx>{`
        .wrap-img {
          width: 100%;
          height: 100vh;
        }
        .wrap-text {
          width: 100%;
        }
        .landscape .wrap-img {
          height: 75vw;
        }
        @media (min-width: 768px) {
          .wrap-img {
            width: 50%;
            float: right;
            position: absolute;
            height: 100%;
            right: 0;
          }
          .wrap-text {
            width: 50%;
            position: relative;
          }
        }
        @media (min-width: 1024px) {
          .landscape .wrap-img {
            width: calc(100% - 400px);
            float: right;
            position: absolute;
            height: 100%;
            right: 0;
          }
          .landscape .wrap-text {
            width: 400px;
            position: relative;
          }
          .portrait .wrap-img {
            width: 35%;
            float: right;
            position: absolute;
            height: 100%;
            right: 0;
          }
          .portrait .wrap-text {
            width: 65%;
            position: relative;
          }
        }
      `}</style>
    </FmtBlock>
  );
}