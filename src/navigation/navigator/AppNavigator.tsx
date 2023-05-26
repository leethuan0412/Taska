import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackComponent} from '../stack/AuthStack';
import {MainStackComponent} from '../stack/MainStack';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import accountSlice, { authSelector, setAccountToken } from '@src/redux/slices/accountSlice';
const NavigationApp = React.forwardRef((props, ref: any) => {
  const accountSlice = useSelector(authSelector)
  console.log(accountSlice,'aloooo');
  const token =true

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
