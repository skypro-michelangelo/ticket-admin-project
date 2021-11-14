import React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type Props = {
  active?: boolean;
};

const ListItemCreate: FC<Props> = ({ active, children }) => {
  let styles = { ':hover': { backgroundColor: '#61647a' }, backgroundColor: active ? '#61647a' : '#252733' };

  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate('/create');
  };

  return (
    <ListItem button key={'Создать'} sx={styles} onClick={onClickHandle}>
      <ListItemIcon>
        <AddCircleOutlineIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText sx={{ color: '#fff' }} primary={'Создать'} />
    </ListItem>
  );
};

export default ListItemCreate;
