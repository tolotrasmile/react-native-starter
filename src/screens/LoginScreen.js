/**
 * @flow
 */
import React from 'react';
import { Constants } from 'expo';
import { observer } from 'mobx-react';
import { Button, Container, Spinner, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import AuthStore from '../models/AuthStore';
import InputText from '../components/ui/InputText';

@observer
class LoginScreen extends React.Component<*> {

  static navigationOptions = {
    title: 'Login'
  };

  componentDidUpdate() {
    const { loggedIn } = AuthStore;
    if (loggedIn) {
      this.props.navigation.navigate('MainScreen');
    }
  }

  render() {

    const { login, password, loading } = AuthStore;
    const { onLogin, onChangeLogin, onChangePassword } = AuthStore;

    return (
      <Container style={styles.container}>
        <InputText
          value={login}
          placeholder="Login"
          onChangeText={onChangeLogin}
        />
        <InputText
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          placeholder="Password"
        />
        <Button full primary style={styles.button} onPress={onLogin} iconLeft>
          {loading ? <Spinner color="#ffffff" style={{ width: 20, height: 20 }}/> : null}
          <Text>Login</Text>
        </Button>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 40,
    backgroundColor: '#34464e'
  },
  input: {
    paddingStart: 15
  },
  inputItem: {
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    paddingBottom: 4,
    borderRadius: 5,
    height: 50
  }
});

export default LoginScreen;
