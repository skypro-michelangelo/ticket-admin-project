import React from 'react';
import { FC, useCallback, useState } from 'react';

import InputText from '../../primitives/InputText';
import Input from '../../primitives/Input';
import Title from '../../primitives/Title';
import Button from '../../primitives/Button';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import StyledEventForm from './styles';

import { EventType } from '../../types/Event';

import placeholder from '../../placeholder.png';
import Img from '../../primitives/Img';
import { updateEventThunk } from '../../store/thunk';

type Props = {
  event: EventType;
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

const getPictureUrl = (picturePath: File) => {
  return `${process.env.REACT_APP_BACKEND_URL}/${picturePath}`;
};

const EventEditForm: FC<Props> = ({ event }) => {
  const INITIAL_FORM: EventType = {
    _id: event._id,
    name: event.name,
    date_time: event.date_time,
    description: event.description,
    location: event.location,
    picture: event.picture,
    tickets_number: event.tickets_number,
    type_event: event.type_event,
    price: event.price,
    in_archive: event.in_archive === undefined ? false : event.in_archive
  };

  const [form, setForm] = useState(INITIAL_FORM);
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
      console.log(form);
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
          name: !form.name || form.name === '' ? true : false,
          date_time: !form.date_time || form.date_time === '' ? true : false,
          description: !form.description || form.description === '' ? true : false,
          location: !form.location || form.location === '' ? true : false,
          picture: !form.picture || form.picture === null ? true : false,
          tickets_number: !form.tickets_number || form.tickets_number <= 0 ? true : false,
          type_event: !form.type_event || form.type_event === '' ? true : false,
          price: !form.price || form.price === '' ? true : false
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
      data.append('in_archive', form.in_archive.toString());

      updateEventThunk(data, form._id);
    },
    [form]
  );

  console.log(event.date_time);

  return (
    <StyledEventForm encType="multipart/form-data">
      <Title>Редактировать мероприятие</Title>
      <Img src={event.picture ? getPictureUrl(event.picture) : placeholder} />
      <InputText>Название</InputText>
      <Input name="name" onChange={inputChangeHandle} error={errors.name} defaultValue={event.name} />
      <InputText>Дата и время проведения</InputText>
      <TextField
        error={errors.date_time}
        onChange={inputChangeHandle}
        name="date_time"
        id="datetime-local"
        type="datetime-local"
        defaultValue={event.date_time}
        sx={{ width: '100%' }}
        InputProps={{ inputProps: { min: Date() } }}
      />
      <InputText>Описание мероприятия</InputText>
      <Input
        name="description"
        onChange={inputChangeHandle}
        error={errors.description}
        defaultValue={event.description}
      />
      <InputText>Место проведения</InputText>
      <Input name="location" onChange={inputChangeHandle} error={errors.location} defaultValue={event.location} />
      <InputText>Тип мероприятия</InputText>
      <Select
        name="type_event"
        onChange={inputChangeHandle}
        sx={{ width: '100%' }}
        error={errors.type_event}
        defaultValue={event.type_event}
      >
        <MenuItem value={'concert'}>Концерт</MenuItem>
        <MenuItem value={'opera'}>Опера</MenuItem>
        <MenuItem value={'ballet'}>Балет</MenuItem>
        <MenuItem value={'cinema'}>Кино</MenuItem>
        <MenuItem value={'exhibition'}>Выставка</MenuItem>
        <MenuItem value={'performance'}>Спектакль</MenuItem>
      </Select>
      <InputText>Цена</InputText>
      <Input name="price" onChange={inputChangeHandle} error={errors.price} defaultValue={event.price} />
      <InputText>Количество билетов</InputText>
      <Input
        name="tickets_number"
        type="number"
        onChange={inputChangeHandle}
        error={errors.tickets_number}
        defaultValue={event.tickets_number}
      />
      <InputText>Загрузите постер</InputText>
      <Input type="file" name="picture" onChange={inputChangeHandle} error={errors.picture} />
      <Button variant="contained" onClick={formSubmitHandle}>
        Сохранить
      </Button>
    </StyledEventForm>
  );
};

export default EventEditForm;
