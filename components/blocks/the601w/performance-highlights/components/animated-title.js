import { animated, useSpring } from 'react-spring';
import VisibilitySensor from '../../../../../utils/animations/visibility-sensor';
import * as wFmt from '../../../../ui/the601w/format';

const baseFrom = { opacity: 0, fontSize: 4 };
const baseTo   = { opacity: 1, fontSize: 32 };

/* Animated Element */
const AnimatedEl = ({ children, spring }) => {
  return (
    <animated.span style={{ fontFamily: wFmt.font.frank_dmcm, ...spring }}>
      { children }
    </animated.span>
  );
}

/* Animations */
const NumberAnimation = ({ isVisible, value }) => {
  const styles = isVisible ? { val: parseInt(value), ...baseTo } : { val: 0, ...baseFrom };
  const spring = useSpring({ to: styles, config: { duration: 3000 } });
  return (
    <AnimatedEl spring={ spring }>
      { spring.val.interpolate(val => Math.floor(val)) }
    </AnimatedEl>
  )
}
const PercentageAnimation = ({ isVisible }) => {
  const defaultStyles = { position: 'relative' };
  const styles = isVisible ? {left: 0, ...baseTo } : { left: -16, ...baseFrom };
  const spring = useSpring({ 
    to: { ...defaultStyles, ...styles },
    config: { duration: 3000 }
  });
  return <AnimatedEl spring={ spring }>%</AnimatedEl>
}


/* Title */
export const AnimatedTitle = ({ attr, n }) => {
  return (
    <>
      <VisibilitySensor>
        { ({ isVisible }) => <NumberAnimation isVisible={ isVisible } value={ attr[`stat_${n}_title`] } /> }
      </VisibilitySensor>
    
      <VisibilitySensor>
        { ({ isVisible }) => <PercentageAnimation isVisible={ isVisible } /> }
      </VisibilitySensor>
    </>
  );
}