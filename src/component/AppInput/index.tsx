import {isEqual} from 'lodash';
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {R} from '../../assets/R';
import {colors} from '../../theme';
import {FontSize} from '../fontSize';
import {RNInputProps} from './RNInput.props';

const AppInput = (props: RNInputProps<any>) => {
  const {
    label,
    containerStyle,
    placeholder,
    leftIcon,
    secureTextEntry,
    errorMessage,
    onChangeText,
    onFocus,
    keyboardType,
    editable,
    onBlur,
    autoFocus,
    value,
    touched,
    inputStyle,
    returnKeyType,
    onSubmitEditing,
    maxLength,
    ref,
    inputContainerStyle,
    errorStyle,
    isRequire,
    isCheckline,
    multiline,
  } = props;

  const [isSecureText, setIsSecureText] = useState<boolean | undefined>(
    secureTextEntry,
  );

  return (
    <View style={[containerStyle]}>
      {!!label && (
        <Text style={styles.label}>
          {label} {!!isRequire && <Text style={{color: 'red'}}>*</Text>}
        </Text>
      )}

      <View style={[styles.v_container, inputContainerStyle]}>
        {!!leftIcon && (
          <FastImage
            source={leftIcon}
            style={styles.iconLeft}
            resizeMode="contain"
          />
        )}
        <TextInput
          autoFocus={autoFocus || false}
          ref={ref}
          onFocus={onFocus}
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          placeholderTextColor={'#8C8C8C'}
          style={[styles.textInput, inputStyle]}
          placeholder={placeholder}
          onBlur={onBlur}
          keyboardType={keyboardType}
          autoCapitalize={'none'}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={isSecureText}
          returnKeyType={returnKeyType}
          multiline={multiline}
        />

        {!!secureTextEntry && (
          <TouchableOpacity onPress={() => setIsSecureText(!isSecureText)}>
            <FastImage
              source={isSecureText ? R.images.ic_eye : R.images.ic_eye_hide}
              style={styles.iconRight}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      {isCheckline && <View style={styles.line} />}
      {!!errorMessage && touched && (
        <Text
          style={[styles.error_message, errorStyle]}
          children={errorMessage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  v_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 7,
    paddingLeft: 12,
  },
  line: {
    height: 1,
    backgroundColor: '#BFBFBF',
  },
  label: {
    fontSize: FontSize.Font14,
    color: colors.black,
  },
  iconRight: {
    width: 24,
    aspectRatio: 1,
    marginRight: 10,
  },
  iconLeft: {
    width: 24,
    aspectRatio: 1,
    marginRight: 10,
  },
  textPlaceholder: {
    color: '#8C8C8C',
    fontSize: 16,
  },
  textInput: {
    fontSize: FontSize.Font16,
    flex: 1,
    paddingVertical: 0,
    color: colors.black,
  },
  error_message: {
    fontSize: FontSize.Font12,
    textAlign: 'right',
    color: '#FFB7B7',
    marginTop: '2%',
  },
});

const RNTextInput = memo(AppInput, isEqual);

export default RNTextInput;
