import {Platform} from 'react-native';

const type = {
  base: Platform.select({
    ios: 'Poppins',
    android: 'Poppins',
  }),
  bold: Platform.select({
    ios: 'Poppins-Bold',
    android: 'Poppins-Bold',
  }),
  medium: Platform.select({
    ios: 'Poppins-Medium',
    android: 'Poppins-Medium',
  }),
};

const size = {
  xxxSmall: 10,
  xxsmall: 11,
  xxsmall: 13,
  xSmall: 14,
  small: 15,
  normal: 17,
  medium: 18,
  large: 20,
};
