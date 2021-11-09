import { USER_LOGIN_SUCCESS_ACTION, USER_LOGIN_ERROR_ACTION, RootAction } from './actions';

const DEFAULT_STATE = {
  data: {
    email: '',
    password: ''
  },
  error: {
    message: ''
  }
};

export function reducer(state = DEFAULT_STATE, action: RootAction) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        data: {
          ...action.payload
        }
      };
    case USER_LOGIN_ERROR_ACTION:
      return {
        ...state,
        error: {
          message: action.payload
        }
      };

    default:
      return state;
  }
}
