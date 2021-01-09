import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBg: '#24292e',
    appBarTab: '#e3e3e3',
    mainBg: '#e1e4e8',
    cardBg: 'white',
    buttonText: 'white',
    errors: "#d73a4a"
  },
  spacings: {
    formLineHeight: 40,
    formMargin: 10
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  dimensions: {
    separatorHeight: 10
  },
  fonts: {

    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  rounding: {
    borderRadius: 3
  }
};

export default theme;