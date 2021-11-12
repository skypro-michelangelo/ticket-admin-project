import {
  USER_LOGIN_SUCCESS_ACTION,
  USER_LOGIN_ERROR_ACTION,
  RootAction,
  USER_LOGIN_LOADER_ACTION
} from '../actions/userActions';

type User = {
  loading: boolean;
  data: {
    email: string;
    password: string;
  };
  error: string;
};

const DEFAULT_USER: User = {
  loading: false,
  data: {
    email: '',
    password: ''
  },
  error: ''
};

export function userReducer(state = DEFAULT_USER, action: RootAction) {
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
        error: action.payload
      };
    case USER_LOGIN_LOADER_ACTION:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
}
