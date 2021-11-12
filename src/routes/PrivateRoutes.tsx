import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from '../cookies/CookiesUtil';

export const PrivateRoute: FC = ({ children }) => {
  const isUserAuthorized = true; // getCookie('email') !== undefined ? true : false;

  //TODO: need fix
  return isUserAuthorized ? (children as React.ReactElement) : <Navigate to="/login" />;
};
