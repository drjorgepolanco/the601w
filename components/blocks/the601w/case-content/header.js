import { FmtBlock, fmtColorAccent } from '../../../ui';
import * as wFmt  from '../../../ui/the601w/format';
import * as wMrkp from '../../../ui/the601w/markup';
import classes from '../../../../styles/classes.module.scss';

export const BlockHeader = (props) => {
  const { header, settings } = props.block.attrs;
  const pretitle = header.text_pretitle ? header.text_pretitle : '';
  const title    = header.text_title ? header.text_title : '';
  return (
    <FmtBlock attr={ header } attrName={ 'header' }>
      <div className="header-inner">
        <h6 className={ classes.font_sans_light }>{ pretitle }</h6>
        <h3 style={{ ...fmtColorAccent(settings) }} dangerouslySetInnerHTML={{ __html: title }} />
        <wMrkp.Sold isSold={ header.fmt_status } bgColor={ settings.fmt_color_accent } />
      </div>
      <style jsx>{`
        h6 {
          padding: 0;
        }
        h3 {
          padding: 8px 0 4px;
          font-family: ${wFmt.font.frank_dmxcm};
        }
      `}</style>
    </FmtBlock>
  );
}