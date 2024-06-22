//~ react-native
import {Dimensions, Platform} from 'react-native';

//* ////////////////////////////////////////////////////////////////////////////

//^ Device dimensions
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const deviceWidth = viewportWidth;
export const deviceHeight = viewportHeight;

let sampleHeight = 926;
let sampleWidth = 428;

const scale = viewportWidth / 375;

//^ Device type check
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isTablet = viewportHeight / viewportWidth < 1.6;

//^ Responsive height and width function
export function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

//^ Get Width of Screen
export function getWidth(value: number) {
  return (value / sampleWidth) * deviceWidth;
}

//^ Get Height of Screen
export function getHeight(value: number) {
  return (value / sampleHeight) * deviceHeight;
}

//^ Responsive size function
export function moderateScale(size: number) {
  const newSize = size * scale;
  if (isTablet) {
    return Math.round(newSize) - wp(1);
  } else {
    return Math.round(newSize);
  }
}
