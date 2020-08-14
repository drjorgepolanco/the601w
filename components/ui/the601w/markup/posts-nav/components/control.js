import { NavParent } from './parent';
import { NavPost } from './post';

export const NavCtrl = (props) => {
  const { control = 'next', index, linkType, parent, posts, style = {} } = props;
  const followingIndex = () => control === 'next' ? index + 1 : index - 1;
  const follow = followingIndex();
  const obj    = posts[follow];

  if (linkType === 'post') {
    return obj ? <NavPost { ...props } style={ style } /> : null;
  }
  if (linkType === 'parent') {
    return <NavParent { ...props } parent={ parent } />;
  }
  return obj ? <NavPost { ...props } style={ style } /> : <NavParent { ...props } parent={ parent } />;
}
