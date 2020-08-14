export const Burger = ({ navIsOpen, toggleNav }) => (
  <div className="burger" onClick={ toggleNav }>
    <div className={ navIsOpen() }>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>

    <style jsx>{`
      .burger {
        position: relative;
        padding-top: 6px;
        cursor: pointer;
        display: block;
      }
      span {
        background: white;
        display: block;
        position: relative;
        width: 24px;
        height: 3px;
        margin-bottom: 6px;
        transition: all ease-in-out 0.2s;
      }
      .is-open span:nth-child(2) {
        opacity: 0;
      }
      .is-open span:nth-child(3) {
        top: -9px;
        -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
                transform: rotate(45deg);
      }
      .is-open span:nth-child(1) {
        top: 9px;
        -webkit-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
                transform: rotate(-45deg);
      }
    `}</style>
  </div>
)