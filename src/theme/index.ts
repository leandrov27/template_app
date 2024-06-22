//~ react-native
import { StyleSheet } from 'react-native';

//~
import flex from './flex';
import margin from './margin';
import padding from './padding';
import commonStyle from './commonStyle';

export * from './colors';

//* ////////////////////////////////////////////////////////////////////////////

export const global_styles = StyleSheet.create({
  ...flex,
  ...margin,
  ...padding,
  ...commonStyle,
});
