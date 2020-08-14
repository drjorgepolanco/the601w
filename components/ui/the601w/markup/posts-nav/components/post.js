import { LinkPostType } from '../../../../../ui';
import { NavItem } from './item';
import { accent } from './accent';

export const NavPost = (props) => {
  const { blockSlug, control = 'next', index, posts, style = {}, types = 'posts' } = props;
  const followingIndex = () => {
    let ctrl;
    if (control === 'next') {
      ctrl = index + 1
    }
    if (control === 'prev') {
      ctrl = index - 1;
    }
    return ctrl;
  }
  const follow = followingIndex();
  const obj    = posts[follow];
  const bg     = accent(obj, blockSlug, style.bg);
  const color  = obj ? style.color : '';
  const slug   = obj ? obj.slug : '';
  return obj && (
    <LinkPostType slug={ slug } types={ types }>
      <NavItem { ...props } bg={ bg } color={ color } text={ slug } control={ control } />
    </LinkPostType>
  )
}
