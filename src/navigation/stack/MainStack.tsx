import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_ROUTE} from '@src/constants';
import React, {memo} from 'react';
import {TabNavigator} from '../navigator/TabNavigator';
import SCREEN_ROUTE_APP from '../RouteApp';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_ROUTE.MAIN}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={SCREEN_ROUTE.MAIN} component={TabNavigator} />
      {Object.keys(SCREEN_ROUTE_APP).map((elem, index) => (
        <MainStack.Screen
          key={index}
          name={elem}
          component={SCREEN_ROUTE_APP[elem]}
        />
      ))}
    </MainStack.Navigator>
  );
});

export {MainStackComponent};
