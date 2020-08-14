import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockList }   from './list';

export const BlockContentList = ({ block }) => (
  <FmtSctn block={ block }>
    <BlockHeader block={ block } />
    <BlockList   block={ block } />
  </FmtSctn>
);
