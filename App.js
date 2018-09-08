/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import {Header}  from './src/components/common/Header';
import LibraryList from './src/components/LibraryList';

const store = createStore(reducers);
console.log(store.getState())
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
      <Header headerText='Tech Stack'/>
      <LibraryList/>
      </View>
      </Provider>
    );
  }
}


