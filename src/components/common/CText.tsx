//~ react
import type { ReactNode } from 'react';
import { memo } from 'react';

//~ react-native
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text} from 'react-native';

//~ theme
import { useTheme } from '@/theme/ThemeProvider';
import typography from '@/theme/typography';

//~ interfaces
type FontWeight = 'B' | 'EL' | 'L' | 'R' | 'T';
type FontSize =
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '26'
  | '28'
  | '30'
  | '32'
  | '34'
  | '35'
  | '36'
  | '40'
  | '46'
  | '66';
type FontType = `${FontWeight}${FontSize}`;

//~ interface props
interface CTextProps {
  type: FontType;
  style?: StyleProp<ViewStyle>;
  align?: TextStyle['textAlign'];
  color?: string;
  children: ReactNode;
  [key: string]: any;
}

//* ////////////////////////////////////////////////////////////////////////////

const CText = ({type, style, align, color, children, ...props}: CTextProps) => {
  //^ use hooks
  const { colors } = useTheme();

  const fontWeights = () => {
    switch (type.charAt(0)) {
      case 'B':
        return typography.fontWeights.Bold;
      case 'EL':
        return typography.fontWeights.ExtraLight;
      case 'L':
        return typography.fontWeights.Light;  
      case 'R':
        return typography.fontWeights.Regular;
      case 'T':
        return typography.fontWeights.Thin;
      default:
        return typography.fontWeights.Regular;
    }
  };

  const fontSize = () => {
    switch (type.slice(1)) {
      case '12':
        return typography.fontSizes.f12;
      case '14':
        return typography.fontSizes.f14;
      case '16':
        return typography.fontSizes.f16;
      case '18':
        return typography.fontSizes.f18;
      case '20':
        return typography.fontSizes.f20;
      case '22':
        return typography.fontSizes.f22;
      case '24':
        return typography.fontSizes.f24;
      case '26':
        return typography.fontSizes.f26;
      case '28':
        return typography.fontSizes.f28;
      case '30':
        return typography.fontSizes.f30;
      case '32':
        return typography.fontSizes.f32;
      case '34':
        return typography.fontSizes.f34;
      case '35':
        return typography.fontSizes.f35;
      case '36':
        return typography.fontSizes.f36;
      case '40':
        return typography.fontSizes.f40;
      case '46':
        return typography.fontSizes.f46;
      case '66':
        return typography.fontSizes.f66;
      default:
        return typography.fontSizes.f14;
    }
  };

  return (
    <Text
      style={[
        type && {...fontWeights(), ...fontSize()},
        {color: color ? color : colors.text},
        align && {textAlign: align},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default memo(CText);
