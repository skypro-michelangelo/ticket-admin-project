import { NavigateFunction } from 'react-router-dom';
import { api } from '../api/api';
import { setEventsError, setEventsLoader, setEventsSuccess } from './actions/eventsActions';
import { userLoginError, userLoginLoader, userLoginSuccess } from './actions/userActions';
import { store } from './store';

export function userLoginThunk(navigate: NavigateFunction, user: { email: string; password: string }) {
  store.dispatch(userLoginLoader(true));
  api
    .getUser(user)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }

      store.dispatch(userLoginSuccess(user));
      store.dispatch(userLoginError(''));

      navigate('/');
    })
    .catch((error) => {
      store.dispatch(userLoginError('Некорректный email или пароль'));
    })
    .finally(() => {
      store.dispatch(userLoginLoader(false));
    });
}

export function getEventsThunk() {
  store.dispatch(setEventsLoader(true));

  api
    .getEvents()
    // .then((response) => {
    //   if (response.status !== 200) {
    //     throw new Error();
    //   }

    //   return response.json();
    // })
    .then((data) => {
      store.dispatch(setEventsSuccess(data));
      store.dispatch(setEventsError(''));
    })
    .catch((error) => {
      store.dispatch(setEventsError('Мероприятий не найдено.'));
    })
    .finally(() => {
      store.dispatch(setEventsLoader(false));
    });
}
