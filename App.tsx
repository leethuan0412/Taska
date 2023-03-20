import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationUtils} from './src/navigation/NavigationUtils';
import {NavigationApp} from './src/navigation/navigator/AppNavigator';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationApp
          ref={(navigatorRef: any) => {
            NavigationUtils.setTopLevelNavigator(navigatorRef);
          }}
        />
        <FlashMessage
          style={styleApp.messageNoti}
          position="top"
          floating={true}
          hideStatusBar={false}
        />
      </PersistGate>
    </Provider>
  );
};

const styleApp = StyleSheet.create({
  messageNoti: {
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : 0,
  },
});

export default App;
