const screenWidth = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px'
};

const device = {
  mobile: `(min-width: ${screenWidth.mobile})`,
  tablet: `(min-width: ${screenWidth.tablet})`,
  laptop: `(min-width: ${screenWidth.laptop})`
};

const theme = {
  font: 'Muli',
  primaryColor: '#1c1c1c',
  secondaryColor: '#ffcb64',
  accentColor: '#ffa999',
  lightGray: '#e4e4e4',
  warning: '#ffcb64',
  danger: '#ffcb64',
  info: '#F8DABB',
  light: '#f0f0f0',
  mid: '#4e4e4e',
  dark: '#282c34',
  device: device
};



export default theme;
