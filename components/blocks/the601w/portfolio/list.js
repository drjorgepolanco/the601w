import { TypeBuilding } from './building';

const ListItem = (props) => {
  const { index } = props;

  return (
    <li className={ `building item-${index}` }>
      <TypeBuilding { ...props } />
      
      <style jsx>{`
        li {
          width: 100%;
          padding: 0;
          flex: 0 0 100%;
        }
        @media (min-width: 768px) {
          li {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          li {
            flex: 0 0 33%;
          }
        }
      `}</style>
    </li>
  );
}
export const PostList = (props) => {
  const { posts = [] } = props.block.attrs;
  
  return (posts && posts.length) && (
    <ul className="building clearfix">
      { posts.map((item, index) => <ListItem { ...props } key={ index } index={ index } item={ item } />) }
      <style jsx>{`
        ul {
          list-style: none;
          padding: 16px;
          padding-top: 64px;
          margin: 0 auto;
          max-width: 1280px;
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </ul>
  ) 
}