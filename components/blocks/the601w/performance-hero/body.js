import { FmtBlock, MediaImage } from '../../../ui';
// import classes from '../../../../styles/classes.module.scss';
import * as wFmt from '../../../ui/the601w/format';

export const BlockBody = (props) => {
  const { body = null } = props.block.attrs;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className="block-body">
        { body.text_body && <div className="body">{ body.text_body }</div> }
        <MediaImage attr={ body } style={{ position: 'absolute', bottom: '0px', display: 'block' }} />
      </div>

      <style jsx>{`
        .block-body {
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          height: 100vh;
          z-index: 2;
          pointer-events: none;
        }
        .body {
          font-family: ${wFmt.font.frank_bkcm};
          font-size: 16px;
          text-align: center;
          position: fixed;
          bottom: 15%;
          right: 100px;
          width: 100%;
          max-width: 200px;
          transform: translateX(-50%);
          left: 50%;
        }
        @media (min-width: 768px) {
          
          .body {
            left: 80%;
            text-align: left;
          }
        }
        @media (min-width: 1024px) {
          
          .body {
            left: 88%;
            bottom: 20%
          }
        }
      `}</style>
    </FmtBlock>
  );
}