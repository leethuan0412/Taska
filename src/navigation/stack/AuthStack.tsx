import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {SCREEN_ROUTE} from '../../constants/Constant';
import {IntroduceScreen} from '@src/screen/Auth/IntroduceScreen';
import {LoginScreen} from '@src/screen/Auth/LoginScreen';
import {LoginEmailScreen} from '@src/screen/Auth/LoginEmailScreen';
import {ForgotpasswordScreen} from '@src/screen/Auth/ForgotpasswordScreen';
import {RegisterScreen} from '@src/screen/Auth/RegisterScreen';
import Screen from '../configs/screens';

const AuthStack = createStackNavigator();
const AuthStackComponent = memo(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_ROUTE.AUTH}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={Screen.INTRODUCE} component={IntroduceScreen} />
      <AuthStack.Screen name={Screen.LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={Screen.LOGIN_EMAIL}
        component={LoginEmailScreen}
      />
      <AuthStack.Screen
        name={Screen.FORGOT_PASSWORD}
        component={ForgotpasswordScreen}
      />
      <AuthStack.Screen name={Screen.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
});

export {AuthStackComponent};
