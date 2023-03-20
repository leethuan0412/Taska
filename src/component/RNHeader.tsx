import * as theme from '../theme/index';
import React, {Component} from 'react';
import {Platform, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Header} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';
import {scale, StyleSheet} from 'react-native-size-scaling';
import {NavigationUtils} from '../navigation/NavigationUtils';
import {R} from '../assets/R';

interface Props {
  color?: string;
  backgroundHeader?: string;
  borderBottomHeader?: string;
  back?: boolean;
  isLeft?: boolean;
  /**
   * View nút phải
   */
  rightComponent?: React.ReactNode;
  /**
   * View nút trái
   */
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;

  /**
   * Title thanh header
   */
  titleHeader: string;
  numberLine?: number;
  onPress?: () => void;
}
interface BackProps {
  style?: ViewStyle;
  isWhiteBackground?: boolean;
  onPress?: () => void;
}
export class BackButton extends Component<BackProps> {
  render() {
    const {style, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[style || styles.leftComp]}
        onPress={onPress ? onPress : NavigationUtils.goBack}>
        <FastImage
          source={R.images.ic_back}
          style={styles.icon}
          tintColor={theme.colors.black}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

export default class RNHeader extends Component<Props> {
  render() {
    const {
      color,
      numberLine,
      back,
      titleHeader,
      rightComponent,
      leftComponent,
      borderBottomHeader,
      backgroundHeader,
      onPress,
    } = this.props;
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: backgroundHeader || theme.colors.primary,
          borderBottomColor: borderBottomHeader || theme.colors.primary,
          height:
            Platform.OS !== 'ios'
              ? undefined
              : numberLine === 2
              ? getStatusBarHeight() + (!isIphoneX() ? scale(65) : scale(85))
              : getStatusBarHeight() + (!isIphoneX() ? scale(55) : scale(65)),
        }}
        leftComponent={
          <>
            {back ? (
              <BackButton onPress={onPress} />
            ) : leftComponent ? (
              leftComponent
            ) : null}
          </>
        }
        centerComponent={
          <Text style={[styles.text, {color: color || 'white'}]}>
            {titleHeader}
          </Text>
        }
        rightComponent={rightComponent}
        statusBarProps={{
          barStyle: 'dark-content',
          translucent: true,
          backgroundColor: 'transparent',
          // barStyle: 'light-content',
          // translucent: true,
          // // backgroundColor: 'blue',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftComp: {
    marginTop: Platform.OS !== 'ios' ? -4 : -1,
  },
  rightComp: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
