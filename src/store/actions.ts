export const USER_LOGIN_ACTION = 'USER@LOGIN' as const;
export const USER_LOGIN_SUCCESS_ACTION = 'USER@LOGIN_SUCCESS' as const;
export const USER_LOGIN_ERROR_ACTION = 'USER@LOGIN_ERROR' as const;

export function userLogin(user: { email: string; password: string }) {
  return {
    type: USER_LOGIN_ACTION,
    payload: user
  };
}

export function userLoginSuccess(user: { email: string; password: string }) {
  return {
    type: USER_LOGIN_SUCCESS_ACTION,
    payload: user
  };
}

export function userLoginError(message: string) {
  return {
    type: USER_LOGIN_ERROR_ACTION,
    payload: message
  };
}

export type UserLoginActionType = ReturnType<typeof userLogin>;
export type UserLoginSuccessActionType = ReturnType<typeof userLoginSuccess>;
export type UserLoginErrorActionType = ReturnType<typeof userLoginError>;

export type RootAction = UserLoginActionType | UserLoginSuccessActionType | UserLoginErrorActionType;
