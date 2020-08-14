import * as wFmt from '../format';

export const BuildingsHeader = (props) => {
  const { children } = props;
  return (
    <>
      <div className="wrap-text" style={{ backgroundColor: wFmt.color.portfolio_dark }}>
        { children }
      </div>
      
      <style jsx>{`
        .wrap-text {
          width: 100%;
          padding-top: 128px;
          text-align: center;
          padding-bottom: 32px;
        }
      `}</style>
    </>
  );
}