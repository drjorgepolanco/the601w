import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody }   from './body';

export const BlockContentDouble = ({ block }) => (
  <FmtSctn block={ block }>
    <BlockHeader block={ block } />
    <BlockBody   block={ block } />
  </FmtSctn>
);