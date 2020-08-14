import { fmtClassName } from '../../../ui';
import { BlockHeader } from './header';
import { BlockBody } from './body';
import { getBlockName } from '../../../../utils';

export const CaseHero = (props) => {
  const { blockName, attrs } = props.block;
  const { settings } = attrs;
  const { fmt_orientation } = settings;
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)}${fmtClassName(attrs)}` }>
      <div className="inner">
        <div className={ `ow-sctn-ctnt` }>
          <div className={ `orientation ${ fmt_orientation }` }>
            <BlockHeader { ...props } />
            <BlockBody   { ...props } />
          </div>
        </div>
      </div>
    </section>
  );
}