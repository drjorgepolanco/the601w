import { LinkPage } from '../../../../../ui';
import { NavItem } from './item';

export const NavParent = (props) => {
  const { control = 'prev', parent, style = {} } = props;
  const { bg, color, name } = parent;
  const backTo = `Back to ${name}`;
  return (
    <LinkPage slug={ name.toLowerCase() }>
      <NavItem { ...props } bg={ bg } color={ color } text={ backTo } control={ control } style={ style } />
    </LinkPage>
  )
}