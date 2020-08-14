import { NavArrow } from './arrow';
import { NavText } from './text';

export const NavItem = (props) => {
  const { bg, color, control, text = 'change me', style = {} } = props;
  const ctnt = control === 'next' ? (
    <div className="item-inner" style={{ textAlign: 'right', paddingTop: '8px' }}>
      <NavText style={{ color }} text={ text } />
      <NavArrow color={ color } direction="right" style={{ color, left: '8px' }} />
    </div>
  ) : (
    <div className="item-inner" style={{ textAlign: 'left', paddingTop: '8px' }}>
      <NavArrow color={ color } direction="left" style={{ color, right: '8px' }} />
      <NavText style={{ color }} text={ text } />
    </div>
  )
  return (
    <div className={ `post-nav-item ${control}` } style={ style }>
      { ctnt }
      <style jsx>{`
        .post-nav-item {
          background: ${bg};
          padding: 16px 32px;
        }
      `}</style>
    </div>
  )
};
