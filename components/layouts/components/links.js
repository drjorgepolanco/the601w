import { useEffect, useState } from 'react';
import Link from 'next/link';
import classes from '../../../styles/classes.module.scss';



/* Fetch Links */
import { api } from '../../../utils';
const fetchLinks = async (location) => {
  const res = await api.get(`/menus/v1/menus/${location}`);
  const linksData = res.data;
  return linksData.items || [];
}



/* Link Item */
const LinkItem = ({ item, onClick }) => {
  const { slug, title } = item;
  let path = `/${slug}`;
  return (
    <li>
      <Link href={ `/[slug]` } as={ path }>
        <a className={ `${classes.font_size_p_md} ${classes.filo_ot}` } onClick={ onClick }>{ title }</a>
      </Link>

      <style jsx>{`
        li a {
          color: white;
        }
        @media (min-width: 1024px) {
          li {
            display: inline-block;
            margin: 0 24px;
          }
        }
      `}</style>
    </li>
  );
}



/* Link Items */
const LinkItems = ({ links, className, onClick }) => {
  const theLinks = (links && links.length) ? links.map((item) => <LinkItem key={ item.ID } item={ item } onClick={ onClick } />) : <li><Link href="/"><a>Home</a></Link></li>;
  return (
    <ul className={ `link-items ${className}` }>
      { theLinks }
    </ul>
  );
}



export const Links = (props) => {
  const [links, setLinks] = useState([]);
  const { element, className = '', onClick = () => {} } = props;

  const getLinks = async () => {
    try {
      const theLinks = await fetchLinks(element);
      setLinks(theLinks);
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    let isCancelled = false;
    getLinks();
    return () => {
      isCancelled = true;
    }
  }, []);

  return <LinkItems links={ links } className={ className } onClick={ onClick } />;
}


