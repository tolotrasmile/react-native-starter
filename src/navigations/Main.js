import React from 'react';
import { createDrawerNavigator, createStackNavigator, DrawerActions, DrawerItems } from 'react-navigation';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon, Text, View } from 'native-base';
import MainContentScreen from '../screens/MainContentScreen';
import Sidebar from '../screens/Sidebar';
import { logout } from '../api/auth';

const onLogout = async (navigation) => {
  let result = await logout();
  if (result) {
    navigation.navigate('TutorialScreen');
  }
};

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 100, padding: 20 }}>
      <Text style={{ fontSize: 40 }}>Hello</Text>
    </View>
    <DrawerItems {...props}/>
  </SafeAreaView>
);

const MainAppNavigator = createDrawerNavigator(
  {
    MainContentScreen: MainContentScreen,
    Sidebar: Sidebar
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const StackNavigator = createStackNavigator(
  {
    MainAppNavigator: MainAppNavigator
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: (
        <SafeAreaView
          style={{ height: 64, backgroundColor: '#3e4253' }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <Icon name='ios-menu' style={{ marginTop: 6, marginLeft: 10, color: '#eee' }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onLogout(navigation)}>
              <Icon name="ios-power" style={{ marginTop: 8, marginRight: 14, color: '#eee', fontSize: 24 }}/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )
    })
  });

export default StackNavigator;
