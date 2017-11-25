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

var UserCreation = t.struct({
  username: t.String,              // a required string
  password: t.String,               // a required string
  email: t.String,              // a required string
  firstName: t.String,              // a required string
  lastName: t.String,              // a required string
});

export default class LandingPage extends Component {
  render() {
    if (! this.isLoggedIn()){
      return (
        <View>
          {this.showSignUpScreen()}
        </View>
      );
    }
    else{
      return (
        <View>
          {this.showLoginScreen()}
        </View>
      );
    }
  }

  showLoginScreen(){
    return(
      <View style={styles.statusBarPadding}>
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

  showSignUpScreen(){
    return (
      <View style={styles.statusBarPadding}>
        <Form
          ref="form"
          type={UserCreation}
        />
        <TouchableHighlight onPress={this.makeLoginAttempt} underlayColor='#99d9f4'>
          <Text>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }

  makeLoginAttempt(){
    console.log("hai");
  }

  isLoggedIn(){
    return false;
  }
}
