import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  statusBarPadding: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingRight: 20, // todo should these 'global styles' be a separate class?
    paddingLeft: 20
  }
});

export default styles;
