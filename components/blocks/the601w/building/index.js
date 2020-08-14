import { fmtClassName } from '../../../ui';
import { BlockHeader }  from './header';
import { BlockBody }    from './body';
import { getBlockName } from '../../../../utils';

export const Building = (props) => {
  const { block } = props;
  const { blockName, attrs } = block;
  const { fmt_orientation } = attrs.settings;
  return (
    <section className={ `ow-sctn clearfix ${getBlockName(blockName)}${fmtClassName(attrs)}` }>
      <div className="inner">
        <div className="ow-sctn-ctnt">
          <div className={ `orientation ${ fmt_orientation }` }>
            <BlockHeader { ...props } block={ block } />
            <BlockBody   { ...props } block={ block } />
          </div>
        </div>
      </div>
    </section>
  );
}