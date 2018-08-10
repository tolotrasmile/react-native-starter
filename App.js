import React from 'react';
import { View } from 'native-base';
import AuthNavigator from './src/navigations/Auth';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AuthNavigator/>
      </View>
    );
  }
}
