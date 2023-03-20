import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {SCREEN_ROUTE} from '../../constants/Constant';
import SCREEN_ROUTE_AUTH from '../RouteAuth';

const AuthStack = createStackNavigator();
const AuthStackComponent = memo(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_ROUTE.AUTH}
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(SCREEN_ROUTE_AUTH).map((elem, index) => (
        <AuthStack.Screen
          key={index}
          name={elem}
          component={SCREEN_ROUTE_AUTH[elem]}
        />
      ))}
    </AuthStack.Navigator>
  );
});

export {AuthStackComponent};
