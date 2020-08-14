import * as wFmt from '../format';

export const Sold = ({ isSold, bgColor }) => {
  if (isSold) {
    return (
      <div className="sold" style={{ backgroundColor: bgColor }}>
        <span>SOLD</span>
        <style jsx>{`
          .sold {
            width: 96px;
            height: 24px;
            text-align: center;
            display: table;
            padding-top: 4px;
          }
          span {
            display: table-cell;
            vertical-align: middle;
            color: white;
            font-size: 14px;
            font-family: ${wFmt.font.frank_dmcm};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>        
      </div>
    )
  }
  return null;
}