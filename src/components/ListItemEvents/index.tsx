import React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EventIcon from '@mui/icons-material/Event';

type Props = {
  active?: boolean;
};

const ListItemEvents: FC<Props> = ({ active, children }) => {
  let styles = { ':hover': { backgroundColor: '#61647a' }, backgroundColor: active ? '#61647a' : '#252733' };

  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate('/');
  };

  return (
    <ListItem button key={'Мероприятия'} sx={styles} onClick={onClickHandle}>
      <ListItemIcon>
        <EventIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText sx={{ color: '#fff' }} primary={'Мероприятия'} />
    </ListItem>
  );
};

export default ListItemEvents;
