import React from 'react'
import Body from './components/Body'
import store from '../src/utils/appStore';
import { Provider } from 'react-redux';
const App = () => {
  return (
      <Provider store={store}>
        <Body />
      </Provider>
  );
}

export default App