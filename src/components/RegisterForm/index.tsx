import React from 'react';
import { FC, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { userLoginThunk } from '../../store/thunk';

import RegisterForm from './styles';

import InputText from '../../primitives/InputText';
import Input from '../../primitives/Input';
import Title from '../../primitives/Title';
import Button from '../../primitives/Button';
import HeaderText from '../../primitives/HeaderText';
import CircularIndeterminate from '../CircularIndeterminate';
import ErrorText from '../../primitives/ErrorText';

import Snackbar from '@mui/material/Snackbar/Snackbar';
import { Alert } from '../Alert';

const EMPTY_FORM = {
  email: '',
  password: ''
};

const ERRORS_DEFAULT_STATE = {
  mail: false,
  password: false,
  snackbar: false,
  footer: false,
  footerText: 'E-mail или пароль введены неверно.'
};

function emailValidation(email: string) {
  const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  return regex.test(email);
}

const Form: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setError] = useState(ERRORS_DEFAULT_STATE);

  const [loading, setLoadingOpen] = useState(false);

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  }, []);

  const formSubmitHandle = useCallback(
    (e) => {
      setError(ERRORS_DEFAULT_STATE);

      if (form.email === '' || form.password === '') {
        setError((prev) => ({
          ...prev,
          mail: form.email === '' ? true : false,
          password: form.password === '' ? true : false,
          snackbar: true
        }));

        return;
      }

      if (!emailValidation(form.email)) {
        setError((prev) => ({
          ...prev,
          mail: true,
          footer: true,
          footerText: 'Некорректная форма email'
        }));

        return;
      }

      setLoadingOpen(true);

      userLoginThunk(navigate, { email: form.email, password: form.password }, () => {
        setLoadingOpen(false);

        setError((prev) => ({
          ...prev,
          footer: true
        }));
      });
    },
    [navigate, form]
  );

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setError((prev) => ({
      ...prev,
      snackbar: false
    }));
  };

  return (
    <RegisterForm>
      {loading ? <CircularIndeterminate /> : null}
      <HeaderText>SkyTicket</HeaderText>
      <Title>Войти в SkyTicket</Title>
      <InputText>E-mail</InputText>
      <Input name="email" error={errors.mail} onChange={inputChangeHandle} />
      <InputText>Пароль</InputText>
      <Input name="password" error={errors.password} type="password" onChange={inputChangeHandle} />
      <Button variant="contained" onClick={formSubmitHandle}>
        Войти
      </Button>
      <Snackbar open={errors.snackbar} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Введите данные!
        </Alert>
      </Snackbar>
      {errors.footer ? <ErrorText>{errors.footerText}</ErrorText> : null}
    </RegisterForm>
  );
};

export default Form;
