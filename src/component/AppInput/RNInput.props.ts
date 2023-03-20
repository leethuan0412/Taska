import {LegacyRef} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputFocusEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Source} from 'react-native-fast-image';

export interface RNInputProps<T> {
  multiline?: boolean;
  isCheckline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  ref?: LegacyRef<T>;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: number | Source;
  rightIcon?: number | Source;
  label?: string;
  isRequire?: boolean;
  borderBottomColor?: any;
  rightText?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errorMessage?: string;
  autoFocus?: boolean;
  touched?: boolean;
  maxLength?: number;
  editable?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: ((text: string) => void) | undefined;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onRight?: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  placeholderColor?: any;
  errorStyle?: StyleProp<TextStyle>;
  isPlaceholderRequire?: boolean;
  isFocused?: any;
  colorValue?: any;
}
