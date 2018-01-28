import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import StorageHelper from '../../data/StorageHelper';
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

var placeholdersOptions = {
  auto: 'placeholders'
}

var storageHelper = new StorageHelper();

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoggingIn: true
    }
  }

  render() {
    if (this.state.isLoggingIn){
      return (
        <View>
          {this.showLoginScreen()}
        </View>
      );
    }
    else{
      return (
        <View>
          {this.showSignUpScreen()}
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
          options={placeholdersOptions}
        />
        <TouchableHighlight onPress={this.makeLoginAttempt} underlayColor='#99d9f4'>
          <Text>Log in</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.toggleLoggingUp} underlayColor='#99d9f4'>
          <Text>Create an account</Text>
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
          options={placeholdersOptions}
        />
        <TouchableHighlight onPress={this.makeLoginAttempt} underlayColor='#99d9f4'>
          <Text>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.toggleLoggingUp} underlayColor='#99d9f4'>
          <Text>Already have an account?</Text>
        </TouchableHighlight>
      </View>
    );
  }

  makeLoginAttempt = () => {
    console.log("hai");
  }

  toggleLoggingUp = () => {
    this.setState({'isLoggingIn': ! this.state.isLoggingIn});
  }

}
