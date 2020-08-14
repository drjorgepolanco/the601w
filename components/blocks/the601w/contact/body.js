import { FmtBlock } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockBody = ({ block }) => {
  const { body } = block.attrs;
  const { text_title, text_body } = body;
  return (
    <FmtBlock attr={ body } attrName="body">
      <div className="block-contact">
        <div className="text group">
          { (text_title) && <h2 className={ classes.text_title }>{ text_title }</h2> }
          { (text_body)  && <p className={ classes.text_body } dangerouslySetInnerHTML={{ __html: text_body }} /> }
        </div>
      </div>

      <style jsx global>{`
        .block-contact .text p a {
          text-decoration: underline;
          color: white;
        }
      `}</style>
    </FmtBlock>
  );
}