import React from 'react';
import RootRouter from './Router';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './stores';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>    
  );
}

export default App;