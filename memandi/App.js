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

export default class App extends Component<{}> {
  render() {
    // TODO: if not logged in, then go to landing screen; else <Menu />
    if (true){
      return (<LandingPage />);
    }
    else{
      return(<Menu />);
    }
  }
}
