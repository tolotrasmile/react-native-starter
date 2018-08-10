import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'native-base';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const items = [
  {
    text: 'Hello',
    color: '#34464e'
  },
  {
    text: 'World',
    color: '#34464e'
  },
  {
    text: 'Login',
    color: '#34464e'
  }
];

export default class TutorialScreen extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} activeDotColor="#fff">
        {items.map((item, key) => (
          <View style={[styles.slide, { backgroundColor: item.color }]} key={key}>
            {
              key > 1
                ? (
                  <TouchableOpacity onPress={this.goToLogin}>
                    <Text style={styles.text}>{item.text}</Text>
                  </TouchableOpacity>
                )
                : <Text style={styles.text}>{item.text}</Text>
            }
          </View>
        ))}
      </Swiper>
    );
  }

  goToLogin = () => {
    this.props.navigation.navigate('LoginScreen');
  };
}