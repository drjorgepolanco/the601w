import * as wFmt from '../../../format';

export const NavText = ({ style = {}, text }) => {
  return (
    <span className="text" style={ style }>
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <style jsx>{`
        .text {
          text-transform: uppercase;
          font-size: 16px;
          font-family: ${wFmt.font.frank_dmxcm};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          letter-spacing: 2px;
          font-size: 24px;
          display: none;
        }
        @media (min-width: 768px) {
          .text {
            display: inline-block;
          }
        }
      `}</style>
    </span>
  );
};