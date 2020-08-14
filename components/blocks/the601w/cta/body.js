
import { FmtBlock, LinkGroup, TextTitle } from '../../../ui';
import classes from '../../../../styles/classes.module.scss';

export const BlockBody = ({ block }) => {
  const { body = {} } = block.attrs;
  const { fmt_color, fmt_color_accent } = body;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className="body" style={{ textAlign: 'center' }}>
        <div className="ow-text ow-group">
          <TextTitle attr={ body } style={{ textTransform: 'none' }}  />
          { (body.text_body)  && <div className={ classes.text_body } dangerouslySetInnerHTML={{ __html: body.text_body }} /> }
        </div>

        <div className={ classes.cta } style={{ background: fmt_color }}>
          <LinkGroup attr={ body } style={{ color: fmt_color_accent, lineHeight: '40px', fontSize: '16px' }} />
        </div>
      </div>
    </FmtBlock>
  );
}