import { animated, useSpring } from 'react-spring';
import VisibilitySensor from '../../../../../utils/animations/visibility-sensor';
import { MediaImage } from '../../../../ui';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function ImageInteraction({ attr }) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}><MediaImage attr={ attr } /></animated.div>
  )
}
const ImageAnimation = ({ attr, isVisible }) => {
  const defaultStyles = { display: 'block', margin: '0 auto' };
  const styles = isVisible ? { opacity: 1, width: '100%' } : { opacity: 0, width: '5%' };
  const spring = useSpring({ to: styles, config: { duration: 2000 } });
  return (
    <animated.div style={{ ...defaultStyles, ...spring }}>
      <ImageInteraction attr={ attr } />
    </animated.div>
  )
}
export const AnimatedImage = ({ attr }) => (
  <VisibilitySensor once>
    { ({ isVisible }) => <ImageAnimation attr={ attr } isVisible={ isVisible } /> }
  </VisibilitySensor>
)


