/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Menu } from './components/Menu';
import LandingPage from './components/screens/LandingPage';
import StorageHelper from './data/StorageHelper';

var storageHelper = new StorageHelper();

export default class App extends Component<{}> {
  render() {
     if (! this.isLoggedIn()){
      return (<LandingPage />);
    }
    else{
      return(<Menu />);
    }
  }

  isLoggedIn(){
    return storageHelper.getAuthToken() != null;
  }
}
