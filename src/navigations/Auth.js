import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginNavigation from './Login';
import Content from './Main';

const AuthNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    LoginNavigation: LoginNavigation,
    MainScreen: Content
  },
  {
    initialRouteName: 'AuthLoading'
  }
);


export default AuthNavigator;