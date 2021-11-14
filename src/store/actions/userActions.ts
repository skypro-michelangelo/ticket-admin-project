export const USER_LOGIN_ACTION = 'USER@LOGIN' as const;
export const USER_LOGIN_SUCCESS_ACTION = 'USER@LOGIN_SUCCESS' as const;
export const USER_LOGIN_ERROR_ACTION = 'USER@LOGIN_ERROR' as const;
export const USER_LOGIN_LOADER_ACTION = 'USER@LOGIN_LOADER' as const;

export function userLogin(data: { email: string; password: string }) {
  return {
    type: USER_LOGIN_ACTION,
    payload: data
  };
}

export function userLoginSuccess(data: { email: string; password: string }) {
  return {
    type: USER_LOGIN_SUCCESS_ACTION,
    payload: data
  };
}

export function userLoginError(error: string) {
  return {
    type: USER_LOGIN_ERROR_ACTION,
    payload: error
  };
}

export function userLoginLoader(loading: boolean) {
  return {
    type: USER_LOGIN_LOADER_ACTION,
    payload: loading
  };
}

export type UserLoginActionType = ReturnType<typeof userLogin>;
export type UserLoginSuccessActionType = ReturnType<typeof userLoginSuccess>;
export type UserLoginErrorActionType = ReturnType<typeof userLoginError>;
export type UserLoginLoaderActionType = ReturnType<typeof userLoginLoader>;

export type RootAction =
  | UserLoginActionType
  | UserLoginSuccessActionType
  | UserLoginErrorActionType
  | UserLoginLoaderActionType;
