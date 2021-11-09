import { NavigateFunction } from 'react-router-dom';
import { api } from '../api/api';
import { userLoginError, userLoginSuccess } from './actions';
import { store } from './store';

export function userLoginThunk(
  navigate: NavigateFunction,
  user: { email: string; password: string },
  showError: Function
) {
  setTimeout(() => {
    api
      .login(user)
      .then((response) => {
        if (response) {
          store.dispatch(userLoginSuccess(user));

          navigate('/');
          return;
        }

        store.dispatch(userLoginError("There's no such user"));
        showError();
      })
      .catch((error) => {
        store.dispatch(userLoginError('Something went wrong...'));
      });
  }, 3000);
}
