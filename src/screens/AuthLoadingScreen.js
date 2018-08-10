import React, { Component } from 'react';
import { Spinner, View } from 'native-base';
import { AsyncStorage } from 'react-native';

class AuthLoadingScreen extends Component {
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setTimeout(() => this.props.navigation.navigate('MainScreen'), 1000);
        return;
      }
    } catch (e) {
      // Avoid print error
    }
    this.props.navigation.navigate('LoginNavigation');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner color="red"/>
      </View>
    );
  }
}

export default AuthLoadingScreen;
