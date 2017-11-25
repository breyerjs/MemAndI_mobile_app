import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  statusBarPadding: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  }
});

export default styles;
