import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { DrawerItems } from 'react-navigation';
import { SafeAreaView } from 'react-native';

class Sidebar extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 40 }}>Hello</Text>
        </View>
        <DrawerItems {...this.props}/>
      </SafeAreaView>
    );
  }
}

export default Sidebar;