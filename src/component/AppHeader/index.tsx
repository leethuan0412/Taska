import React from 'react';
import {
  Keyboard,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {R} from '../../assets/R';
import {DEVICE} from '../../constants/Constant';
import {goBack} from '../../navigation/NavigationUtils';
import {colors} from '../../theme';
import {Spacing} from '../appSpacing';
import {FontSize} from '../fontSize';

export interface IAppHeader {
  title?: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  goBack?: boolean;
  backIconColor?: string;
  IconLeft?: any;
  IconRight?: any;
  styleIconLeft?: StyleProp<ViewStyle>;
  iconLeftFillColor?: string;
  onPressBtnLeft?: () => void;
  onPressRight?: () => void;
  styleTextRight?: StyleProp<TextStyle>;
  styleBtnRight?: StyleProp<ViewStyle>;
  colorBackIcon?: string;
  titleRight?: string;
}

export const AppHeader = (props: IAppHeader) => {
  const {
    title,
    styleContainer,
    styleTitle,
    goBack: isBack,
    styleIconLeft,
    IconLeft,
    iconLeftFillColor,
    onPressBtnLeft,
    onPressRight,
    IconRight,
    styleTextRight,
    styleBtnRight,
    titleRight,
  } = props;

  const onGoBack = () => {
    goBack();
  };

  const renderLeft = () => {
    const onPressLeft = onPressBtnLeft || onGoBack;
    return (
      <View style={styles.left}>
        <TouchableOpacity
          onPress={(isBack || IconLeft) && onPressLeft}
          hitSlop={styles.hitbtn}
          style={styles.btnLeft}>
          {isBack && (
            <FastImage
              source={R.images.ic_back}
              style={styles.icon}
              tintColor={colors.black}
              resizeMode="contain"
            />
          )}
          {IconLeft && (
            <IconLeft style={styleIconLeft} iconFillColor={iconLeftFillColor} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.right}>
        {IconRight && (
          <>
            <TouchableOpacity
              style={[styles.btnRight, styleBtnRight]}
              onPress={onPressRight}
              hitSlop={styles.hitbtn}>
              <Text style={styleTextRight}>{titleRight}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };
  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPressIn={() => Keyboard.dismiss()}
      activeOpacity={1}>
      {renderLeft()}
      {title && <Text style={[styles.title, styleTitle]}>{title}</Text>}
      {renderRight()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: Spacing.width24,
    width: Spacing.width24,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    minHeight: Spacing.width35,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.width16,
    paddingVertical: Spacing.height20,
    ...ifIphoneX(
      {
        paddingTop: Spacing.width50,
      },
      {
        paddingTop: DEVICE.isIos ? Spacing.width35 : undefined,
      },
    ),
  },
  title: {
    fontSize: FontSize.Font18,
    alignItems: 'center',
    fontWeight: '500',
  },
  left: {
    width: Spacing.width20,
  },
  right: {
    width: Spacing.width20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
  },
  btnRight: {
    paddingLeft: Spacing.height10,
  },

  btnLeft: {
    paddingRight: Spacing.height10,
  },
  hitbtn: {top: 25, bottom: 25, left: 25, right: 25},
});
