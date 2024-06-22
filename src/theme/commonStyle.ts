//~ react-native
import {StyleSheet} from 'react-native';

//~ config
import { getHeight, moderateScale } from '@/config/viewport';

//~
import flex from './flex';
import margin from './margin';
import { lightColors } from './colors';

//* ////////////////////////////////////////////////////////////////////////////

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: lightColors.background,
    ...flex.flex,
  },
  innerContainer: {
    paddingHorizontal: moderateScale(20),
    ...margin.mt20,
  },
  generalTitleText: {
    fontSize: moderateScale(24),
  },
  underLineText: {
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    height: getHeight(10),
    width: '100%',
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3,
    elevation: 5,
  },
  capitalizeTextStyle: {
    textTransform: 'capitalize',
  },
  actionSheetIndicator: {
    width: moderateScale(60),
    ...margin.mt10,
  },
});
