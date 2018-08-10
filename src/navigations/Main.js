import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';

const CustomDrawerComponent = (props) => <Sidebar {...props}/>;

const MainAppNavigator = createDrawerNavigator(
  {
    MainContentScreen: MainScreen,
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
      header: <MainHeader navigation={navigation}/>
    })
  });

export default StackNavigator;
