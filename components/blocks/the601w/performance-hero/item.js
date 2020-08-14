import * as wFmt from '../../../ui/the601w/format';
import { animated } from 'react-spring';
export const BlockItem = ({ item, curr, el }) => {
  return (
    // <animated.div className="wrap" style={{ transform: curr.xy.interpolate(el) }}>
    <animated.div className="wrap">
      { (item.text_title)    && <h2 className="title">{ item.text_title }</h2> }
      { (item.text_subtitle) && <h4 className="subtitle">{ item.text_subtitle }</h4> }

      <style jsx>{`
        .title, .subtitle {
          text-align: center;
          text-transform: uppercase;
        }
        .title {
          font-family: ${wFmt.font.frank_dmcm};
          font-size: 58px;
          color: white;
        }
        .subtitle {
          font-family: ${wFmt.font.frank_bkcm};
          font-size: 34px;
          margin: 0 auto;
          color: ${wFmt.color.portfolio_dark};
        }
        @media (min-width: 414px) {
          .title {
            font-size: 80px;
          }
          .subtitle {
            font-size: 48px;
            max-width: 348px;
          }
        }
        @media (min-width: 768px) {
          .title {
            font-size: 128px;
          }
          .subtitle {
            font-size: 64px;
            max-width: 440px;
          }
        }
        @media (min-width: 1024px) {
          .title {
            font-size: 160px;
          }
          .subtitle {
            font-size: 84px;
            max-width: 600px;
          }
        }
        @media (min-width: 1920px) {
          .title {
            font-size: 180px;
          }
          .subtitle {
            font-size: 88px;
            max-width: 700px;
          }
        }
      `}</style>
    </animated.div>
  )
}