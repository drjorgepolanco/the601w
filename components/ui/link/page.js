import Link from 'next/link';

export const LinkPage = ({ children, slug, style = {} }) => {
  const path = `/${slug}`;
  return (
    <Link href={ `/[slug]` } as={ path }>
      <a style={{ display: 'block', cursor: 'pointer', ...style }}>{ children }</a>
    </Link>
  );
}
