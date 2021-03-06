import React from 'react';
import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEventThunk } from '../../store/thunk';

import InputText from '../../primitives/InputText';
import Input from '../../primitives/Input';
import Button from '../../primitives/Button';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import EventForm from './styles';

import { EventType } from '../../types/Event';

const EMPTY_FORM: EventType = {
  _id: '',
  name: '',
  date_time: '',
  description: '',
  location: '',
  picture: null,
  tickets_number: 0,
  type_event: '',
  price: '',
  in_archive: false
};

const ERRORS_DEFAULT_STATE = {
  name: false,
  date_time: false,
  description: false,
  location: false,
  picture: false,
  tickets_number: false,
  type_event: false,
  price: false
};

const Form: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setError] = useState(ERRORS_DEFAULT_STATE);

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm((prev) => ({
      ...prev,
      [target.name]: target.name === 'picture' ? target.files[0] : target.value
    }));
  }, []);

  const formSubmitHandle = useCallback(
    (e) => {
      setError(ERRORS_DEFAULT_STATE);
      console.log(form.picture);
      if (
        !form.name ||
        !form.date_time ||
        !form.description ||
        !form.location ||
        !form.picture ||
        !form.tickets_number ||
        !form.type_event ||
        !form.price
      ) {
        setError((prev) => ({
          ...prev,
          name: form.name === '' ? true : false,
          date_time: form.date_time === '' ? true : false,
          description: form.description === '' ? true : false,
          location: form.location === '' ? true : false,
          picture: form.picture === null ? true : false,
          tickets_number: form.tickets_number <= 0 ? true : false,
          type_event: form.type_event === '' ? true : false,
          price: form.price === '' ? true : false
        }));

        return;
      }

      let data = new FormData();

      data.append('name', form.name);
      data.append('date_time', form.date_time);
      data.append('description', form.description);
      data.append('location', form.location);
      data.append('tickets_number', form.tickets_number.toString());
      data.append('type_event', form.type_event);
      data.append('price', form.price);
      data.append('picture', form.picture);

      createEventThunk(navigate, data);
    },
    [navigate, form]
  );

  return (
    <EventForm encType="multipart/form-data">
      <InputText>????????????????</InputText>
      <Input name="name" onChange={inputChangeHandle} error={errors.name} />
      <InputText>???????? ?? ?????????? ????????????????????</InputText>
      <TextField
        error={errors.date_time}
        onChange={inputChangeHandle}
        name="date_time"
        id="datetime-local"
        type="datetime-local"
        defaultValue=""
        sx={{ width: '100%' }}
        InputProps={{ inputProps: { min: Date() } }}
      />
      <InputText>???????????????? ??????????????????????</InputText>
      <Input name="description" onChange={inputChangeHandle} error={errors.description} />
      <InputText>?????????? ????????????????????</InputText>
      <Input name="location" onChange={inputChangeHandle} error={errors.location} />
      <InputText>?????? ??????????????????????</InputText>
      <Select name="type_event" onChange={inputChangeHandle} sx={{ width: '100%' }} error={errors.type_event}>
        <MenuItem value={'concert'}>??????????????</MenuItem>
        <MenuItem value={'opera'}>??????????</MenuItem>
        <MenuItem value={'ballet'}>??????????</MenuItem>
        <MenuItem value={'cinema'}>????????</MenuItem>
        <MenuItem value={'exhibition'}>????????????????</MenuItem>
        <MenuItem value={'performance'}>??????????????????</MenuItem>
      </Select>
      <InputText>????????</InputText>
      <Input name="price" onChange={inputChangeHandle} error={errors.price} />
      <InputText>???????????????????? ??????????????</InputText>
      <Input name="tickets_number" type="number" onChange={inputChangeHandle} error={errors.tickets_number} />
      <InputText>?????????????????? ????????????</InputText>
      <Input type="file" name="picture" onChange={inputChangeHandle} error={errors.picture} />
      <Button variant="contained" onClick={formSubmitHandle}>
        ??????????????????
      </Button>
    </EventForm>
  );
};

export default Form;
