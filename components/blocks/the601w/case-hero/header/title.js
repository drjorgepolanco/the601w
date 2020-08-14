import { TextTitle } from '../../../../ui';
import classes from '../../../../../styles/classes.module.scss';

export const HeaderTitle = (props) => {
  const { body, settings } = props.block.attrs;
  const { fmt_color_accent } = settings;
  return (
    <div className={ `subsctn case-header-title ${classes.padding}` }>
      <div className="inner" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', textAlign: 'left' }}>
          { (body.text_title) && <h2 className={ classes.title_thin } style={{ color: fmt_color_accent }} dangerouslySetInnerHTML={{ __html: body.text_title }} /> }
        </div>
      </div>
    </div>
  );
}