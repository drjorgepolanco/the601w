import { fmtColorAccent, MediaBgImageProp } from '../../../../ui';
import * as wFmt from '../../format';

export const Item = (props) => {
  const { attr, index, settings } = props;
  if (attr && attr.show) {
    const { media_icon_url, text_title, text_body } = attr;
    return (
      <div className={ `case-stat clearfix stat-${index}` }>
        <div className="inner" style={{ borderBottom: '1px solid #7d94af' }}>
          <div className="ctnr icon">
            <div className="wrap-icon">
              <MediaBgImageProp src={ media_icon_url } backgroundSize="contain" />
            </div>
          </div>
  
          <div className="ctnr title">
            <div className="wrap-title" style={{ color: '#223655' }}>
              { text_title.toUpperCase() }
            </div>
          </div>
          
          <div className="ctnr body">
            <div className="wrap-body" style={{ ...fmtColorAccent(settings) }}>
              { text_body.toUpperCase() }
            </div>
          </div>
        </div>
        
        <style jsx>{`
          .case-stat {
            height: 80px;
            width: 100%;
          }
          .stat-0 .inner {
            border-top: 1px solid #7d94af;
          }
          .wrap-icon,
          .wrap-title,
          .wrap-body {
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            position: absolute;
            top: 50%;
          }
          .wrap-title,
          .wrap-body {
            padding-top: 8px;
            font-size: 20px;
            width: 100%;
            color: #00528b;
          }
          .wrap-title {
            font-family: ${wFmt.font.frank_bkcm};
          }
          .wrap-body {
            font-family: ${wFmt.font.frank_dmcm};
            text-align: right;
            width: 100%
          }
          .ctnr {
            position: relative;
          }
          .ctnr.icon {
            float: left;
            width: 64px;
            height: 100%;
          }
          .wrap-icon {
            height: 36px;
            width: 36px;
          }
          .ctnr.title {
            float: left;
            width: calc(100% - 128px);
            height: 100%;
          }
          .ctnr.body {
            float: right;
            width: 64px;
            height: 100%;
          }
          @media (min-width: 1024px) {
            .wrap-title,
            .wrap-body {
              font-size: 22px;
            }
            .ctnr.title {
              width: calc(100% - 180px);
            }
            .ctnr.body {
              width: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
  return null;
}