import React, { Component } from 'react';
import Routes from './src/Components/Routes';
import ReduxThunk from 'redux-thunk';
import {initializeApp} from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import WelcomeScreen from './src/Components/WelcomeScreen';
export default class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}