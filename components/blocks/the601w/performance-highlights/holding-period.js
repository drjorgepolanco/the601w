import { FmtBlock, MediaImage } from '../../../ui';
import { AnimatedImage, AnimatedTitle, HighlightHeader } from './components';
import * as wFmt from '../../../ui/the601w/format';
import styles from './style.module.scss';

const FigureCtnt = ({ attr, n }) => {
  return (
    <div className={ `figure-ctnt ctnt-${n}` }>
      <div className="figure-title">
        <span style={{ fontFamily: wFmt.font.frank_dmcm }}>
          { attr[`stat_${n}_title`] }
        </span>
        <span>%</span>
      </div>

      { attr[`stat_${n}_subtitle`] && <h3>{ attr[`stat_${n}_subtitle`] }</h3> }
      { attr[`stat_${n}_body`]     && <p>{ attr[`stat_${n}_body`] }</p> }

      <style jsx>{`
        .figure-ctnt {
          position: absolute;
          z-index: 1;
        }
        .figure-title,
        h3,
        p {
          font-family: ${wFmt.font.frank_dmcm};
          color: ${wFmt.color.portfolio_dark};
          padding: 0;
          text-align: center;
        }
        .figure-title {
          font-size: 36px;
        }
        h3,
        p {
          font-size: 18px;
        }

        .ctnt-1 {
          top: 16px;
          left: 16px;
        }
        .ctnt-2 {
          top: 16px;
          right: 16px;
        }
        .ctnt-3 {
          transform: translateX(-50%);
          left: 50%;
          bottom: -8px;
        }
      `}</style>
    </div>
  )
}
export const FigureImg = ({ attr }) => (
  <div className="figure-img">
    {/* <AnimatedImage attr={ attr } /> */}
    <MediaImage attr={ attr } />

    <style jsx jsx>{`
      .figure-img {
        padding: 72px;
        margin: 0 auto;
        // max-width: 450px;
      }
    `}</style>
  </div>
)
export const BlockHoldingPeriod = (props) => {
  const hp = props.block.attrs.holding_period;
  return (
    <FmtBlock attr={ hp } attrName={ 'holding_period' }>
      <div className={ `block-holding-period ${styles.ctnr}` }>
        <HighlightHeader attr={ hp } />

        <div className={ `${styles.figure} clearfix` }>
          <FigureCtnt attr={ hp } n={ 1 } />
          <FigureCtnt attr={ hp } n={ 2 } />
          <FigureCtnt attr={ hp } n={ 3 } />

          <FigureImg attr={ hp } />
        </div>
      </div>
    </FmtBlock>
  );
}