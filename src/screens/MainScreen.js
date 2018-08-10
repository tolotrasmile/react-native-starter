import React from 'react';
import { Text, View } from 'native-base';
import { SafeAreaView, StyleSheet } from 'react-native';
import Main from '../navigations/Main';

export default class MainScreen extends React.Component {
  static router = Main.router;

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        < View style={{ height: 200}}>
          <Text>Hello</Text>
        </View>
        <Main navigation={this.props.navigation}/>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});