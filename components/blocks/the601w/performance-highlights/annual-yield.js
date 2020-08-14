import { FmtBlock, MediaImage } from '../../../ui';
import { AnimatedImage, AnimatedTitle, HighlightHeader } from './components';
import * as wFmt from '../../../ui/the601w/format';
import styles from './style.module.scss';



export const FigureTitle = ({ attr, n }) => {
  return attr[`stat_${n}_title`] && (
    <div className={ `figure-title title-${n}` }>
      <span style={{ fontFamily: wFmt.font.frank_dmcm }}>
        { attr[`stat_${n}_title`] }
      </span>
      <span>%</span>
      
      <style jsx>{`
        .figure-title {
          font-size: 36px;
          position: absolute;
          color: ${wFmt.color.portfolio_dark};
          font-family: ${wFmt.font.frank_dmcm};
        }
        .title-1 {
          left: 28px;
          top: 16px;
        }
        .title-2 {
          top: 40%;
          transform: translateX(-50%);
          left: 50%;
        }
        .title-3 {
          top: 39%;
          right: 28px;
        }
      `}</style>
    </div>
  );
}
const FigureCtnt = ({ attr, n }) => {
  return (
    <div className={ `figure-ctnt ctnt-${n}` }>
      { attr[`stat_${n}_subtitle`] && <h3>{ attr[`stat_${n}_subtitle`] }</h3> }
      { attr[`stat_${n}_body`]     && <p>{ attr[`stat_${n}_body`] }</p> }

      <style jsx>{`
        .figure-ctnt {
          padding: 16px 0;
          text-align: center;
          float: left;
          width: 33.3333%;
          color: ${wFmt.color.portfolio_dark};
          font-family: ${wFmt.font.frank_dmcm};
        }
        .figure-ctnt h3,
        .figure-ctnt p {
          padding: 0;
        }
        .figure-ctnt h3 {
          font-size: 26px;
        }
        .figure-ctnt p {
          font-size: 18px;
        }
        .title-1 {
          left: 13%;
          top: 16px;
        }
        .title-2 {
          bottom: 49%;
        }
        .title-3 {
          bottom: 50%;
          right: 13%;
        }
      `}</style>
    </div>
  )
}
export const FigureImg = ({ attr }) => {
  return (
    <div className="figure-img">
      {/* <AnimatedImage attr={ attr } /> */}
      <MediaImage attr={ attr } />

      <style jsx jsx>{`
        .figure-img {
          padding: 64px 0 0;
          margin: 16px auto 0;
          // max-width: 450px;
        }
      `}</style>
    </div>
  );
}
export const BlockAnnualYield = (props) => {
  const ay = props.block.attrs.annual_yield;
  return (
    <FmtBlock attr={ ay } attrName={ 'annual_yield' }>
      <div className={ `block-annual-yield ${styles.ctnr}` }>
        <HighlightHeader attr={ ay } />

        <div className={ `${styles.figure} clearfix` }>
          <FigureTitle attr={ ay } n={ 1 } />
          <FigureTitle attr={ ay } n={ 2 } />
          <FigureTitle attr={ ay } n={ 3 } />

          <FigureImg attr={ ay } />
        </div>
        <div className="clearfix">
          <FigureCtnt attr={ ay } n={ 1 } />
          <FigureCtnt attr={ ay } n={ 2 } />
          <FigureCtnt attr={ ay } n={ 3 } />
        </div>
      </div>
    </FmtBlock>
  );
}