import { useState, useEffect } from 'react';
import { fmtClassName, MediaBgImageProp } from '../../../ui';
import { getBlockName } from '../../../../utils';

import { Cases }      from './cases';
import { Highlights } from './highlights';

export const HomeHero = (props) => {
  const [currentCase, setCurrentCase] = useState('');

  const { blockName, attrs } = props.block;
  const { cases_list } = attrs;

  /* Change the current image in relation to the clicked case study */
  const selectCase = (img) => setCurrentCase(img);

  /* Assign the initial Image */
  const firstCaseImg   = cases_list[0].media_image_url;
  const setInitialCase = () => setCurrentCase(firstCaseImg);
  useEffect(() => setInitialCase(), []);

  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)}${fmtClassName(attrs)}` }>
      <div className="inner">
        <div className={ `ow-sctn-ctnt` }>
          <div className="wrap-img">
            <MediaBgImageProp src={ currentCase } />
          </div>

          <div className="wrap-text">
            <Cases { ...props } selectCase={ selectCase } />
            <Highlights { ...props } />
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrap-img {
          width: 100%;
          height: 120vw;
        }
        .wrap-text {
          width: 100%;
        }
        @media (min-width: 768px) {
          .wrap-img {
            width: 45%;
            float: right;
            position: absolute;
            height: 100%;
            right: 0;
          }
          .wrap-text {
            width: 55%;
            position: relative;
          }
        }
      `}</style>
    </section>
  );
}