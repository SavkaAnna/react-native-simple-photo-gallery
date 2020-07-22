import React from 'react';
import Screens from './src/components/Screens'
import { Provider } from 'react-redux';
import store from './src/redux/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
