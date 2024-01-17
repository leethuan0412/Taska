import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_ROUTE} from '@src/constants';
import React, {memo} from 'react';
import {TabNavigator} from '../navigator/TabNavigator';
import {HomeScreen} from '@src/screen/Main/HomeScreen';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_ROUTE.MAIN}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={SCREEN_ROUTE.MAIN} component={TabNavigator} />
      <MainStack.Screen name={Screen.HOME} component={HomeScreen} />
    </MainStack.Navigator>
  );
});

export {MainStackComponent};
