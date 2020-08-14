import Link from 'next/link';

export const LinkPostType = ({ children, types = '', slug, style = {} }) => {
  const pt   = types ? `/${types}` : '';
  const path = `${pt}/${slug}`;
  return <Link href={ `${pt}/[slug]` } as={ path }><a style={{ display: 'block', cursor: 'pointer', ...style }}>{ children }</a></Link>;
}