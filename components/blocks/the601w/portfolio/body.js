import { FmtBlock } from '../../../ui';
import { PostList } from './list';

export const BlockBody = (props) => {
  const { body = {} } = props.block.attrs;
  return (
    <FmtBlock attr={ body } attrName={ 'body' }>
      <PostList { ...props } />
    </FmtBlock>
  );
}