//~ react-native
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

//~ theme
import { global_styles } from '@/theme';

//~ constants
import { COLORS } from '@/constants';

//~ &
import CText from './CText';

//~ interfaces
interface CLabelProps {
  label: string,
  isRequired : boolean,
  labelStyle ?: StyleProp<ViewStyle>,
}

//* ////////////////////////////////////////////////////////////////////////////

export const CLabel = ({ label, isRequired = false, labelStyle } : CLabelProps) => {
  return (
    <View style={[localStyle.labelContainer, labelStyle]}>
      <View style={global_styles.flexRow}>
        <CText style={localStyle.labelText} type='B18'>
          {label}
        </CText>

        {isRequired && (
          <CText color={COLORS.error} type='B12'>{' *'}</CText>
        )}
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  labelText: {
    textAlign: 'left',
    opacity: 0.9,
  },
  labelContainer: {
    ...global_styles.mt10,
    ...global_styles.ml10,
    ...global_styles.mb2,
    ...global_styles.rowSpaceBetween,
  },
});

export default CLabel;
