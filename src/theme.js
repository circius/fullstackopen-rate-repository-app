import { Platform } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    accept: 'green',
    reject: 'red',
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
    separatorHeight: 10,
    reviewMargin: 10,
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

export const PaperTheme = {
  ...DefaultTheme,
  roundness: theme.rounding.borderRadius,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
  }
};

export default theme;