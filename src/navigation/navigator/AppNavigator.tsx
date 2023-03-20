import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackComponent} from '../stack/AuthStack';
import {MainStackComponent} from '../stack/MainStack';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
const NavigationApp = React.forwardRef((props, ref: any) => {
  const token = true;

  useEffect(()=>{
    SplashScreen.hide();
  },[])

  const renderStackApp = () => {
    if (token) {
      return <AuthStackComponent />;
    } else {
      return <MainStackComponent />;
    }
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export {NavigationApp};
