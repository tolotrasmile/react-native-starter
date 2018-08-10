import React from 'react';
import { Input, Item } from 'native-base';
import { StyleSheet } from 'react-native';

const InputText = ({ style, ...rest }) => (
  <Item regular style={styles.inputItem}>
    <Input {...rest} style={[style, styles.input]} keyboardAppearance="dark" autoCorrect={false}/>
  </Item>
);

const styles = StyleSheet.create({
  input: {
    paddingStart: 15,
    color: '#eeeeee'
  },
  inputItem: {
    marginBottom: 10,
    borderColor: '#878787',
    borderRadius: 8,
    borderWidth: 2
  }
});

export default InputText;