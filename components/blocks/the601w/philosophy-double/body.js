import { FmtBlock, fmtColor, TextTitle, TextBody } from '../../../ui';

export const BlockBody = (props) => {
  const { body = null, settings } = props.block.attrs;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <div className="ow-text ow-group">
        <TextTitle attr={ body } style={{ ...fmtColor(settings) }}  />
        <TextBody  attr={ body } />
      </div>
    </FmtBlock>
  );
}