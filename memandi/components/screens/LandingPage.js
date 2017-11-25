import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import styles from '../../styles/styles.js';
var t = require('tcomb-form-native');
var Form = t.form.Form;

var UserLogin = t.struct({
  username: t.String,              // a required string
  password: t.String               // a required string
});

export default class LandingPage extends Component {
  render() {
    return (
      <View style={styles.statusBarPadding}>
        {this.showLoginScreen()}
      </View>
    );
  }

  showLoginScreen(){
    return(
      <View>
        <Form
          ref="form"
          type={UserLogin}
        />
        <TouchableHighlight onPress={this.makeLoginAttempt} underlayColor='#99d9f4'>
          <Text>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }

  makeLoginAttempt(){
    console.log("hai");
  }
}
