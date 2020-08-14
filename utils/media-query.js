import { useMediaQuery } from 'react-responsive'

export const DesktopOnly = ({ children }) => {
  const isDesktopOnly = useMediaQuery({ minWidth: 1024 });
  return isDesktopOnly ? children : null
}
export const MobileOnly = ({ children }) => {
  const isMobileOnly = useMediaQuery({ maxWidth: 1023 });
  return isMobileOnly ? children : null;
}

export const Phablet = ({ children }) => {
  const isPhablet = useMediaQuery({ minWidth: 414 });
  return isPhablet ? children : null;
}
export const TabletPortrait = ({ children }) => {
  const isTabletPortrait = useMediaQuery({ minWidth: 768 });
  return isTabletPortrait ? children : null;
}
export const TabletLandscape = ({ children }) => {
  const isTabletLandscape = useMediaQuery({ minWidth: 1024 });
  return isTabletLandscape ? children : null;
}
export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1280 });
  return isLaptop ? children : null;
}
export const LaptopWide = ({ children }) => {
  const isLaptopWide = useMediaQuery({ minWidth: 1366 });
  return isLaptopWide ? children : null;
}
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return isDesktop ? children : null;
}
export const DesktopWide = ({ children }) => {
  const isDesktopWide = useMediaQuery({ minWidth: 1680 });
  return isDesktopWide ? children : null;
}
export const HD = ({ children }) => {
  const isHD = useMediaQuery({ minWidth: 1920 });
  return isHD ? children : null;
}