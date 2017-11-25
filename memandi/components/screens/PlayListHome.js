import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from '../../styles/styles.js';

export default class PlayListHome extends Component<{}> {
  render() {
    return (
      <View style={styles.statusBarPadding}>
        <Text>
          This is the play list home
        </Text>
      </View>
    );
  }
}
