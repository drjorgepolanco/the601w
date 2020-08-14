export const gradient = (dark, light) => (dark && light) ? { 
  backgroundImage: `linear-gradient(134deg, ${dark} 1%, ${light} 60%)` 
} : {};


export const color = {
  none: '',
  almost_white: '#f6f6f6',
  white: '#ffffff',
  highlights: '#7d94af',
  portfolio_dark: '#223655',
  portfolio_light: '#00528b',
  creativity_dark: '#a52f1c',
  creativity_light: '#e3691f',
  experience_dark: '#007b64',
  experience_light: '#40a38a',
  decisiveness_dark: '#7d2942',
  decisiveness_light: '#c25752',
  sophistication_dark: '#00759c', 
  sophistication_light: '#008cbd', 
  perseverance_dark: '#3a5b8d',
  perseverance_light: '#7d93ae',
  vision_dark: '#d36027',
  vision_light: '#e7a223'
}

export const font = {
  filo_all: 'FilosofiaAllSmallCapsOT',
  filo_ot: 'FilosofiaOT',
  filo_sm: 'FilosofiaSmallCapsOT',
  frank_bkcm: 'FranklinGothicLTPro-BkCm',
  frank_dmcm: 'FranklinGothicLTPro-DmCm',
  frank_dmxcm: 'FranklinGothicLTPro-DmXCm'
}

export const noImage = {
  square:    'https://via.placeholder.com/1024x1024.png?text=NO+IMAGE+SELECTED',
  portrait:  'https://via.placeholder.com/768x1024.png?text=NO+IMAGE+SELECTED',
  landscape: 'https://via.placeholder.com/1024x1024.png?text=NO+IMAGE+SELECTED'
}