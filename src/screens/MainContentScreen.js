import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

export default class MainContentScreen extends Component {
  static navigationOptions = {
    title: 'Main'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});