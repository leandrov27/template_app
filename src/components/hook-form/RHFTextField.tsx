//~ react
import { ReactNode, useState } from 'react';

//~ react-native
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';

//~ config
import { getHeight, moderateScale } from '@/config/viewport';

//~ theme
import { useTheme } from '@/theme/ThemeProvider';
import typography from '@/theme/typography';
import { global_styles } from '@/theme';

//~ components
import { CText } from '@/components/common';

//~ constants
import { COLORS } from '@/constants';

//~ interfaces
interface RHFTextFieldProps {
  _value : string,
  label ?: string,
  inputContainerStyle ?: StyleProp<ViewStyle>,
  inputBoxStyle ?: StyleProp<ViewStyle>,
  onTextChange : (value: string) => void,
  placeholder ?: string,
  keyBoardType ?: KeyboardTypeOptions,
  _errorText ?: string,
  _autoFocus ?: boolean,
  _isSecure ?: boolean,
  _maxLength ?: number, 
  _editable ?: boolean,
  autoCapitalize ?: 'none' | 'sentences' | 'words' | 'characters',
  required ?: boolean,
  labelStyle ?: StyleProp<ViewStyle>,
  multiline ?: boolean,
  errorStyle ?: any,
  fieldRef ?: any,
  insideLeftIcon ?: () => ReactNode,
  showError ?: boolean,
  rightAccessory ?: () => ReactNode, 
}

//* ////////////////////////////////////////////////////////////////////////////

export default function RHFTextField({
  _value,
  label,
  inputContainerStyle,
  inputBoxStyle,
  onTextChange,
  placeholder,
  keyBoardType = 'default',
  _errorText = '',
  _autoFocus,
  _isSecure = false,
  _maxLength,
  _editable = true,
  autoCapitalize = 'none',
  required = false,
  labelStyle,
  multiline = false,
  errorStyle,
  fieldRef,
  insideLeftIcon,
  showError = true,
  rightAccessory,
} : RHFTextFieldProps) {
  //^ use hooks
  const { dark, colors } = useTheme();

  //^ use states
  const [isFocused, setIsFocused] = useState(false);

  //& methods 
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={global_styles.mv10}>
      {/**LABEL & REQUIRED */}
      {label && (
        <View style={[localStyle.labelContainer, labelStyle]}>
          <View style={global_styles.flexRow}>
            <CText style={localStyle.labelText} type='B18'>
              {label}
            </CText>
            {required && (
              <CText color={COLORS.error} type='B12'>{' *'}</CText>
            )}
          </View>
        </View>
      )}

      {/**THE INPUT */}
      <View
        style={[
          localStyle.inputContainer,
          {
            borderColor: _errorText ? COLORS.error : isFocused ? COLORS.primary : dark ? COLORS.greyscale600 : COLORS.greyscale300,
            backgroundColor: _errorText ? COLORS.transparentRed: isFocused ? COLORS.tansparentPrimary : dark ? COLORS.dark3 : COLORS.greyscale500,
            height: multiline ? moderateScale(75) : moderateScale(50),
          },
          inputContainerStyle,
        ]}
      >
        {insideLeftIcon ? (
          <View style={[global_styles.pl10, {marginTop: 2.5}]}>{insideLeftIcon()}</View>
        ) : null}

        <TextInput 
          ref={fieldRef}
          secureTextEntry={_isSecure}
          value={_value}
          maxLength={_maxLength}
          defaultValue={_value}
          autoFocus={_autoFocus}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          onChangeText={onTextChange}
          keyboardType={keyBoardType}
          placeholderTextColor={dark ? COLORS.transparentWhite : COLORS.grayTie}
          multiline={multiline}
          editable={_editable}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={[
            localStyle.inputBox,
            {color: colors.text},
            {height: multiline ? getHeight(75) : getHeight(50)},
            inputBoxStyle,
            _editable == false && {color: COLORS.disabled},
          ]}
        />

        {/* Right Icon And Content Inside TextInput */}
        <View style={[global_styles.mr15]}>
          {rightAccessory ? rightAccessory() : null}
        </View>
      </View>

      {/**ERROR & TEXT MESSAGE OF INPUT */}
      {_errorText && _errorText != '' ? (
        <CText
          type='R12'
          style={{
            ...localStyle.errorText,
            ...errorStyle,
            color: COLORS.error,
          }}>
          {_errorText}
        </CText>
      ) : null}

      {_maxLength && showError && _value?.length > _maxLength ? (
        <CText type='R12' style={{...localStyle.errorText, ...errorStyle}}>
          Se permite un máximo de {_maxLength} caracteres.
        </CText>
      ) : null} 
    </View>
  );
}

const localStyle = StyleSheet.create({
  labelText: {
    textAlign: 'left',
    opacity: 0.9,
  },
  inputBox: {
    ...typography.fontSizes.f16,
    ...typography.fontWeights.Regular,
    ...global_styles.ph10,
    ...global_styles.flex,
  },
  inputContainer: {
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(20),
    ...global_styles.rowSpaceBetween,
    ...global_styles.mt5,
    width: '100%',
  },
  labelContainer: {
    ...global_styles.mt10,
    ...global_styles.ml10,
    ...global_styles.mb2,
    ...global_styles.rowSpaceBetween,
  },
  errorText: {
    textAlign: 'left',
    ...global_styles.mt5,
    ...global_styles.ml15,
  },
});