import { FmtBlock, LinkGroup, MediaGroup, TextGroup } from '../index';

export const ContentGroup = (props) => {
  const { attr, attrName } = props;
  return (
    <FmtBlock attr={ attr } attrName={ attrName }>
      <MediaGroup attr={ attr } />
      <TextGroup  attr={ attr } />
      <LinkGroup  attr={ attr } />
    </FmtBlock>
  );
}