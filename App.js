import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';

import { SafeArea } from './src/Utility/safe-area-component';
import { Header } from './src/Shared/Header';
import Main from './src/Navigators/Main';
import { store, persistor } from './src/Redux/store';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeArea>
          <Header />
          <PersistGate loading={null} persistor={persistor}>
            <Main />
          </PersistGate>
        </SafeArea>
        <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}
