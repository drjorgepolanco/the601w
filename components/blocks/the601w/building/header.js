import { FmtBlock } from '../../../ui';
import classes      from '../../../../styles/classes.module.scss';
import * as wData   from '../../../ui/the601w/data';
import * as wMrkp   from '../../../ui/the601w/markup';

export const BlockHeader = (props) => {
  const { block, single } = props
  const { settings } = block.attrs;
  return (
    <FmtBlock attr={ settings } attrName={ 'settings' }>
      <wMrkp.BuildingsHeader>
        <h2 className={ classes.building_header_title } dangerouslySetInnerHTML={{ __html: single.title.rendered }} />
        <p className={ classes.building_header_subtitle }>
          { wData.location[settings.w_city] }
        </p>
      </wMrkp.BuildingsHeader>
    </FmtBlock>
  );
}