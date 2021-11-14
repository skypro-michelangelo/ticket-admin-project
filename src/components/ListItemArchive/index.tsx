import React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ArchiveIcon from '@mui/icons-material/Archive';

type Props = {
  active?: boolean;
};

const ListItemArchive: FC<Props> = ({ active, children }) => {
  let styles = { ':hover': { backgroundColor: '#61647a' }, backgroundColor: active ? '#61647a' : '#252733' };

  const navigate = useNavigate();

  const onClickHandle = () => {
    navigate('/archive');
  };

  return (
    <ListItem button key={'Архив'} sx={styles} onClick={onClickHandle}>
      <ListItemIcon>
        <ArchiveIcon sx={{ color: '#fff' }} />
      </ListItemIcon>
      <ListItemText sx={{ color: '#fff' }} primary={'Архив'} />
    </ListItem>
  );
};

export default ListItemArchive;
