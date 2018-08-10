import { createStackNavigator } from 'react-navigation';
import TutorialScreen from '../screens/TutorialScreen';
import LoginScreen from '../screens/LoginScreen';

const LoginNavigator = createStackNavigator(
  {
    TutorialScreen: {
      screen: TutorialScreen,
      navigationOptions: () => ({ header: null })
    },
    LoginScreen: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'TutorialScreen'
  }
);

export default LoginNavigator;
