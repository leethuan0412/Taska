import {Dimensions, Platform, NativeModules} from 'react-native';
export const SCREEN_ROUTE = {
  MAIN: 'MAIN',
  AUTH: 'AUTH',
  SPLASH: 'SPLASH',
};
export const MAIN_TAB = {
  HOME: 'HOME',
  PROJECT: 'PROJECT',
  ADD_TASK: 'ADD_TASK',
  NOTIFICATION: 'NOTIFICATION',
  ACCOUNT: 'ACCOUNT',
};

const {width, height} = Dimensions.get('screen');
const {PlatformConstants} = NativeModules;

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  width,
  height,
  deviceType: PlatformConstants.interfaceIdiom,
  isSmallDevice: width < 375,
};
