import { FmtSctn }     from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody }   from './body';

import classes from '../../../../styles/classes.module.scss';

export const PhilosophyDouble = ({ block }) => {
  const { body, header, settings } = block.attrs;
  return (
    <FmtSctn block={ block }>
      <div className={ `wrap-header float ${header.fmt_float}` }>
        <BlockHeader block={ block } />
      </div>
      <div className={ `wrap-body float ${body.fmt_float} ${classes.padding}` }>
        <BlockBody block={ block } />
      </div>
    </FmtSctn>
  );
};
