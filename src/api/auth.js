import baseUrl from './';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export async function login(params) {
  console.log(params);
  let response = await axios.post(`${baseUrl}login`, params);
  if (response.data && response.data.token) {
    try {
      await AsyncStorage.setItem('token', response.data.token);
    } catch (e) {
      // Avoid error
    }
    return true;
  }
  return false;
}

export async function logout() {
  try {
    await AsyncStorage.removeItem('token');
    return true
  } catch (e) {
    // Avoid error
  }
  return false;
}
