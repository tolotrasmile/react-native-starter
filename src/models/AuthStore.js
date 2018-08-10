import { flow, types } from 'mobx-state-tree';
import { login } from '../api/auth';

const AuthStore = types
  .model('auth', {
    login: 'peter@klaven',
    password: 'cityslicka',
    loading: false,
    loggedIn: false,
    errorMessage: ''
  })
  .actions(self => ({
    onChangeLogin: login => {
      self.login = login;
    },
    onChangePassword: password => {
      self.password = password;
    },
    onLogin: flow(function* () {
      if (self.login && self.password) {
        self.loading = true;
        self.loggedIn = yield login({ email: self.login, password: self.password });
        self.loading = false;
      }
    })
  }));

export default AuthStore.create({});
