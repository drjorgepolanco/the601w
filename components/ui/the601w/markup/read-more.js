import * as wFmt from '../format';
export const ReadMore = ({ color, text = 'Read More', font = wFmt.font.filo_all }) => (
  <div className="read-more">
    <span className="text" style={{ color }}>{ text }</span>
    <span className="arrow" style={{ color }}>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </span>

    <style jsx>{`
      .read-more {
        padding: 8px 0;
      }
      .text {
        text-transform: uppercase;
        font-size: 20px;
        font-family: ${font};
      }
      .arrow {
        color: white;
        position: relative;
        top: 2px;
        left: 12px;
      }
    `}</style>
  </div>
);