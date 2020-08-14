import { FmtSctn }   from '../../../ui';
import { BlockBody } from './body';

export const BlockContentSingle = ({ block }) => (
  <FmtSctn block={ block }>
    <BlockBody block={ block } />
  </FmtSctn>
);
