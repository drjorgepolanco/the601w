import { MediaImageProp } from '../../../../ui';
import * as wFmt from '../../../../ui/the601w/format';
import classes from '../../../../../styles/classes.module.scss';


export const HeaderIntro = (props) => {
  const { header, settings } = props.block.attrs;
  const { media_icon_url, text_name } = header;
  const { fmt_color, fmt_color_accent } = settings;
  return (
    <div className={ `subsctn case-intro ${classes.padding} ${classes.color_white} ${classes.full_screen_height}` } style={{ ...wFmt.gradient(fmt_color, fmt_color_accent), textAlign: 'center', color: 'white' }}>
      <div className="inner">
        <div className="intro-center">
          <MediaImageProp src={ media_icon_url } className={ classes.case_header_icon } />
          <h1 className={ classes.case_header_name }>{ text_name.toUpperCase() }</h1>
        </div>
        
        <div className="intro-bottom" style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}>
          <h6 className={ classes.case_header_pretitle }><span>CASE STUDY</span></h6>
          <h3 className={ classes.case_header_title } dangerouslySetInnerHTML={{ __html: header.text_title }} />
          <div dangerouslySetInnerHTML={{ __html: header.text_body }} className={ classes.case_header_subtitle } />
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 54px;
          letter-spacing: 2px;
        }
        h3 {
          width: 100%;
          max-width: 280px;
          margin: 16px auto 0;
        }
        .intro-center {
          margin-bottom: 64px;
        }
        .intro-bottom {
          width: 100%;
          max-width: 320px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .intro-center {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
          }
          .intro-bottom {
            position: absolute;
            width: 100%;
            left: 50%;
            bottom: 0;
            -webkit-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                    transform: translateX(-50%);
          }
        }
        
      `}</style>
    </div>
  );
}