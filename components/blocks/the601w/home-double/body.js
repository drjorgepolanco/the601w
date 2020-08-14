import { FmtBlock } from '../../../ui';
import classes      from '../../../../styles/classes.module.scss';

export const BlockBody = (props) => {
  const { body = null } = props.block.attrs;
  const { text_body, text_subtitle, text_title } = body;

  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className={ `home-double__body clearfix ${classes.max_width_768} ${classes.padding}` }>
        <div className="header">
          <h2 className={ classes.home_double_title }>{ text_title }</h2>
          <h4 className={ classes.home_double_subtitle }>{ text_subtitle }</h4>
        </div>
        <div className="body">
          <p className={ classes.home_double_body }>{ text_body }</p>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .the601w-home-double .ow-sctn-ctnt {
            padding-bottom: 0;
          }
        }
      `}</style>
      
      <style jsx>{`
        .home-double__body {
          padding-left: 0;
          padding-right: 0;
        }
        @media (min-width: 768px) {

          .header {
            float: right;
            width: 50%;
          }
          .body {
            float: left;
            width: 50%;
          }
        }
      `}</style>
    </FmtBlock>
  );
}