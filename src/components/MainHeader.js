import React, { Component } from 'react';
import { logout } from '../api/auth';
import bind from 'autobind-decorator';
import { Icon, View } from 'native-base';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';

class MainHeader extends Component {

  @bind
  async onLogout() {
    let result = await logout();
    if (result) {
      this.props.navigation.navigate('TutorialScreen');
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{ height: 64, backgroundColor: '#253238' }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name='ios-menu' style={{ marginTop: 6, marginLeft: 10, color: '#eee' }}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onLogout}>
            <Icon name="ios-power" style={{ marginTop: 8, marginRight: 14, color: '#eee', fontSize: 24 }}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default MainHeader;