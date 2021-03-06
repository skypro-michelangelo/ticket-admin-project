import { NavigateFunction } from 'react-router-dom';
import { api } from '../api/api';
import {
  archiveEventError,
  archiveEventSuccess,
  createEventError,
  createEventSuccess,
  setEventsError,
  setEventsLoader,
  setEventsSuccess,
  updateEventError,
  updateEventSuccess
} from './actions/eventsActions';
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
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);

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

export function archiveEventThunk(id: string) {
  store.dispatch(setEventsLoader(true));

  api
    .archiveEvent(id)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error();
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);

      store.dispatch(archiveEventSuccess(data));
      store.dispatch(archiveEventError(''));
    })
    .catch((error) => {
      store.dispatch(setEventsError('Не удалось архивировать.'));
    })
    .finally(() => {
      store.dispatch(setEventsLoader(false));
    });
}

export function createEventThunk(navigate: NavigateFunction, data: FormData) {
  store.dispatch(setEventsLoader(true));

  api
    .createEvent(data)
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error();
      }

      return response.json();
    })
    .then((data) => {
      store.dispatch(createEventSuccess(data));
      store.dispatch(createEventError(''));

      navigate('/');
    })
    .catch((error) => {
      store.dispatch(createEventError('Не удалось создать мероприятие.'));
    })
    .finally(() => {
      store.dispatch(setEventsLoader(false));
    });
}

export function updateEventThunk(data: FormData, id: string) {
  store.dispatch(setEventsLoader(true));

  api
    .updateEvent(data, id)
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        throw new Error();
      }

      return response.json();
    })
    .then((data) => {
      store.dispatch(updateEventSuccess(data));
      store.dispatch(updateEventError(''));
    })
    .catch((error) => {
      store.dispatch(updateEventError('Не удалось обновить мероприятие.'));
    })
    .finally(() => {
      store.dispatch(setEventsLoader(false));
    });
}
