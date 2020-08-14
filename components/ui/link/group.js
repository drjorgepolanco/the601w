import Link from 'next/link';
import { splitWord } from '../../../utils';
import { backendUrl } from '../../../config';


export const LinkGroup = (props) => {
  const { attr, style = {} } = props;
  const slug = attr.link_url && splitWord(attr.link_url, backendUrl).split('/').join('');
  let path   = `/${slug}`;

  if (attr.link_target) {
    return <a href={ attr.link_url } target="_blank">{ attr.link_text }</a>
  }
  return (attr.link_url && <Link href={ `/[slug]` } as={ path }><a style={ style }><span>{ attr.link_text }</span></a></Link>);
}