import { BlockItem } from './item';
import classes from '../../../../styles/classes.module.scss';
// import { useSpring } from 'react-spring';

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans = {
//   el_0: (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`,
//   el_1: (x, y) => `translate3d(${x / 8}px, ${y / 8}px, 0)`,
//   el_2: (x, y) => `translate3d(${x / 6}px, ${y / 6}px, 0)`,
//   el_3: (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`
// }
export const BlockList = ({ block }) => {
  const { list = [] } = block.attrs; 
  // const [curr, set] = useSpring(() => {
  //   return {
  //     xy: [0, 0],
  //     config: { mass: 10, tension: 550, friction: 140 }
  //   }
  // });

  return (list && list.length ? (
    <div className="block-list container">
      <div className="inner">
        {/* <div className={ `wrap ${classes.align_xy}`} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}> */}
        <div className={ `wrap ${classes.align_xy}`}>
          {/* { list.map((item, index) => <BlockItem key={ index } item={ item } curr={ curr } el={ trans[`el_${index}`] } />) } */}
          { list.map((item, index) => <BlockItem key={ index } item={ item } />) }
        </div>
      </div>

      <style jsx>{`
        .wrap {
          padding: 96px 32px;
          width: 100%;
        }
        .block-list {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      `}</style>
    </div>
  ) : null);
}
