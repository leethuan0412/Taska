import {R} from '@src/assets/R';
import {MAIN_TAB} from '@src/constants';
import {HomeScreen} from '@src/screen/Main/HomeScreen';
import {colors} from '@src/theme';
import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import FastImage from 'react-native-fast-image';
import {isIphoneX} from 'react-native-iphone-x-helper';

const {HOME, NOTIFICATION, ACCOUNT, QR, E_VOUCHER} = MAIN_TAB;

const TabNavigator = () => {
  const {t} = useTranslation();
  const ref = useRef<any>(null);
  const [type, setType] = useState<'DOWN' | 'UP'>('DOWN');
  const TAB_BAR = {
    [HOME]: {
      name: HOME,
      icon: R.images.ic_home,
      route: HomeScreen,
      title: t('home'),
    },
    [E_VOUCHER]: {
      name: E_VOUCHER,
      icon: R.images.ic_home,
      route: HomeScreen,
      title: t('gift'),
    },
    [QR]: {
      name: QR,
      icon: R.images.ic_home,
      route: HomeScreen,
      title: 'QR Code',
    },
    [NOTIFICATION]: {
      name: NOTIFICATION,
      icon: R.images.ic_home,
      route: HomeScreen,
      title: t('notification'),
    },
    [ACCOUNT]: {
      name: ACCOUNT,
      icon: R.images.ic_home,
      route: HomeScreen,
      title: t('account'),
    },
  };
  const onClickButton = async () => {
    Alert.alert('helloo');
  };
  const _renderIcon = (routeName: string, selectedTab: string) => {
    return (
      <FastImage
        tintColor={routeName === selectedTab ? colors.primary : colors.focus}
        style={styles.img_icon}
        source={TAB_BAR[routeName].icon}
        resizeMode={'contain'}
      />
    );
  };
  const _renderTabBarLabel = (routeName: string, selectedTab: string) => {
    return (
      <Text
        numberOfLines={1}
        children={TAB_BAR[routeName].title}
        style={[
          styles.txtLabel,
          {color: routeName === selectedTab ? colors.primary : colors.focus},
        ]}
      />
    );
  };
  return (
    <View style={styles.container}>
      <CurvedBottomBar.Navigator
        screenOptions={{headerShown: false}}
        ref={ref}
        type={type}
        height={isIphoneX() ? 65 : 60}
        circleWidth={isIphoneX() ? 57 : 55}
        bgColor="white"
        borderTopLeftRight={Platform.OS === 'android' ? false : true}
        strokeWidth={Platform.OS === 'android' ? 1 : 0}
        style={styles.tabBar}
        strokeColor="#DDDDDD"
        initialRouteName="title1"
        renderCircle={() => (
          <TouchableOpacity
            style={[type === 'DOWN' ? styles.btnCircle : styles.btnCircleUp]}
            onPress={() => onClickButton()}>
            <FastImage
              style={styles.image}
              resizeMode="contain"
              source={R.images.ic_qr}
            />
          </TouchableOpacity>
        )}
        tabBar={({routeName, selectedTab, navigate}) => {
          return (
            <TouchableOpacity
              onPress={async () => {
                navigate(routeName);
              }}
              style={styles.item}>
              {_renderIcon(routeName, selectedTab)}
              {_renderTabBarLabel(routeName, selectedTab)}
            </TouchableOpacity>
          );
        }}>
        {Object.keys(TAB_BAR).map((item, index) => (
          <CurvedBottomBar.Screen
            position={index <= 1 ? 'LEFT' : index > 2 ? 'RIGHT' : 'CENTER'}
            key={index}
            name={TAB_BAR[item].name}
            component={TAB_BAR[item].route}
          />
        ))}
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLabel: {
    fontSize: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  tabBar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.99,
    elevation: 2,
  },
  img_icon: {
    width: 21,
    height: 21,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 4.2,
    shadowRadius: 5.41,
    elevation: 10,
    bottom: 28,
  },
  btnCircleUp: {
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    bottom: 18,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6',
  },
  img: {
    width: 30,
    height: 30,
  },
});

export {TabNavigator};
