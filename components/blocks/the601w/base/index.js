import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody }   from './body';
import { BlockList }   from './list';

export const BlockBase = ({ block }) => (
  <FmtSctn block={ block }>
    <BlockHeader block={ block } />
    <BlockBody   block={ block } />
    <BlockList   block={ block } />
  </FmtSctn>
);
