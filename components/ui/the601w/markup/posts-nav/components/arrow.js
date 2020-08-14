export const NavArrow = ({ direction = 'right', style = {} }) => {
  return (
    <span className="arrow" style={ style }>
      <i className={ `fa fa-long-arrow-${direction}` } aria-hidden="true"></i>

      <style jsx>{`
        .arrow {
          position: relative;
          top: -2px;
        }
      `}</style>
    </span>
  )
}