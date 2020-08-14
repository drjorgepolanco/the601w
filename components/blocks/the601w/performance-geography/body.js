// import { useState, useEffect } from 'react';
import USAMap from 'react-usa-map';
import { FmtBlock } from '../../../ui';
// import { AnimatedTitle } from './components';
import * as wFmt from '../../../ui/the601w/format';
import classes from '../../../../styles/classes.module.scss';
// import { useCurrentWidth } from '../../../../utils/hooks/current-width';

const colors = {
  north_east: wFmt.color.creativity_light,
  mid_west: wFmt.color.vision_light,
  eastern: wFmt.color.sophistication_light,
  south: wFmt.color.decisiveness_light,
  west_coast: wFmt.color.experience_light
}


const Header = ({ attr }) => {
  return (
    <div className="header clearfix">
      { attr.text_title    && <h2 className="title">{ attr.text_title }</h2> }
      { attr.text_subtitle && <h4 className="subtitle">{ attr.text_subtitle }</h4> }
      { attr.text_body     && <p className={ `body ${classes.text_body}` }>{ attr.text_body }</p> }

      <style jsx>{`
        .header {
          padding-bottom: 16px;
        }
        .title,
        .subtitle,
        .body {
          color: ${wFmt.color.portfolio_dark};
        }
        .title,
        .subtitle {
          font-family: ${wFmt.font.frank_dmcm};
        }
        .title {
          font-size: 32px;
        }
        .subtitle {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

const FigureCtnt = ({ attr, n, color = wFmt.color.portfolio_dark }) => {
  return (
    <div className={ `figure-ctnt ctnt-${n}` }>
      { attr[`stat_${n}_title`]    && (
        <div className="wrap-title figure-title" style={{ color }}>
          <span style={{ fontFamily: wFmt.font.frank_dmcm }}>
            { attr[`stat_${n}_title`] }
          </span>
          <span>%</span>
        </div>
      ) }
      { attr[`stat_${n}_subtitle`] && (
        <h3>{ attr[`stat_${n}_subtitle`] }</h3>
      ) }

      <style jsx>{`
        .figure-ctnt {
          padding: 8px 16px;
          float: left;
          width: 33.3333%;
        }
        .wrap-title {
          text-align: center;
        }
        .figure-title,
        .figure-ctnt h3,
        .figure-ctnt p {
          font-family: ${wFmt.font.frank_dmcm};
          color: ${wFmt.color.portfolio_dark};
          padding: 0;
          text-align: center;
        }
        .figure-title {
          font-size: 32px;
        }
        .figure-ctnt h3 {
          font-size: 20px;
          text-align: center;
        }
        @media (min-width: 768px) {

          .figure-ctnt {
            width: 100%;
            float: none;
          }
        }
      `}</style>
    </div>
  )
}

export const FigureImg = ({ attr }) => {
  return (
    <div className="figure-img">
      <img src={ attr.media_image_url } alt=""/>

      <style jsx>{`
        img {
          display: block;
          width: 100%;
          margin: 0 auto;
          max-width: 1024px;
        }
      `}</style>
    </div>
  )
}
export const FigureMap = () => {
  // const [height, setHeight] = useState(null);
  
  // const width = useCurrentWidth();

  // useEffect(() => {
  //   setHeight(() => width > 1280 ? 600 : width * 0.7);
  // }, [height]);

  const mapHandler = (e) => alert(e.target.dataset.name);
  
  const statesCustomConfig = () => {
    return {
      'AL': {
        fill: colors.south,
        clickHandler: (e) => alert('Coming Soon for Alabama', e.target.dataset)
      },
      'CA': {
        fill: colors.west_coast,
        clickHandler: (e) => alert('Coming Soon for California', e.target.dataset)
      },
      'KY': {
        fill: colors.south,
        clickHandler: (e) => alert('Coming Soon for Kentucky', e.target.dataset)
      },
      'IL': {
        fill: colors.mid_west,
        clickHandler: (e) => alert('Coming Soon for Illinois', e.target.dataset)
      },
      'MN': {
        fill: colors.mid_west,
        clickHandler: (e) => alert('Coming Soon for Minnesota', e.target.dataset)
      },
      'NY': {
        fill: colors.north_east,
        clickHandler: (e) => alert('Coming Soon for New York', e.target.dataset)
      },
      'NC': {
        fill: colors.eastern,
        clickHandler: (e) => alert('Coming Soon for North Carolina', e.target.dataset)
      },
      'PA': {
        fill: colors.north_east,
        clickHandler: (e) => alert('Coming Soon for Pennsylvania', e.target.dataset)
      }
    }
  }
  return (
    <div className="figure-img">
      <USAMap onClick={ mapHandler } customize={ statesCustomConfig() } />

      <style jsx global>{`
        .figure-img .us-state-map {
          margin: 0 auto;
          display: block;
          width: 100%;
          height: 60vw;
          margin-bottom: 32px;
        }
        @media (min-width: 1280px) {
          .figure-img .us-state-map {
            height: 600px;
          }
        }
      `}</style>
    </div>
  )
}
export const BlockBody = (props) => {
  const { body } = props.block.attrs;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className={ `block-holding-period clearfix` }>
        <div className="wrap-header clearfix">
          <Header attr={ body } />
        </div>
        <div className="wrap body clearfix">
          <div className="map">
            <FigureImg attr={ body } />
          </div>
          <div className="stats clearfix">
            <FigureCtnt attr={ body } n={ 1 } color={ colors.north_east } />
            <FigureCtnt attr={ body } n={ 2 } color={ colors.mid_west } />
            <FigureCtnt attr={ body } n={ 3 } color={ colors.eastern } />
            <FigureCtnt attr={ body } n={ 4 } color={ colors.south } />
            <FigureCtnt attr={ body } n={ 5 } color={ colors.west_coast } />
          </div>
        </div>
      </div>

      <style jsx>{`
        .body {
          padding: 32px 0;
        }
        .wrap-header {
          margin: 0;
          width: 100%;
          max-width: 360px;
        }
        .stats {
          padding-top: 32px;
        }
        @media (min-width: 768px) {

          .map {
            float: left;
            width: calc(100% - 100px)
          }
          .stats {
            float: right;
            width: 100px;
            height: 100%;
            clear: none;
          }
        }
      `}</style>
    </FmtBlock>
  );
}

/* 

AL
- Regions-Harbert Plaza

CA
- Bank of America Center

IL
- One & Two Prudential Plaza
- AON Center
- Old Post Office
- 550 West Jackson Blvd
- 600 West Chicago Ave
- 180 North LaSalle St

KY
- Aegon Center

MO
- Metropolitan Square

NC
- Wachovia Center

NY
- 1185 Ave of the Americas
- Starret-Lehigh Building
- Mobil Building
- 275 Madison Ave

PA
- U.S. Steel Tower

*/