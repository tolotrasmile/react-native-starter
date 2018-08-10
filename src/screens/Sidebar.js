import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

class Sidebar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sidebar</Text>
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

export default Sidebar;