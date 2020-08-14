import { FmtBlock, TextTitle } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockBody = (props) => {
  const { body = null } = props.block.attrs;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className={ `page-double clearfix ${classes.padding}` }>
        <div className="header">
          <TextTitle attr={ body } className={ classes.title_thin } />
        </div>
        <div className="body">
        { (body.text_body) && <div className={ classes.text_body } dangerouslySetInnerHTML={{ __html: body.text_body }} /> }
        </div>
      </div>
      
      <style jsx>{`
        .page-double {
          padding-left: 0;
          padding-right: 0;
        }
        @media (min-width: 1024px) {
          .header {
            width: 45%;
            float: left;
          }
          .body {
            width: 55%;
            float: right;
          }
        }
      `}</style>
    </FmtBlock>
  );
}