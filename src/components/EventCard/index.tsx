import * as React from 'react';
import { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import Modal from '@mui/material/Modal';
import ListItem from '@mui/material/ListItem/ListItem';

import { EventType } from '../../types/Event';
import EventEditForm from '../EventEditForm';

import { archiveEventThunk } from '../../store/thunk';

type Props = {
  event: EventType;
};

const EventCard: FC<Props> = ({ event }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onArchiveHandle = () => {
    archiveEventThunk(event._id);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card sx={{ width: 280, height: 250, margin: '0px 20px 15px 0px' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={event.name}
        subheader={event.date_time}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <ListItem button sx={{ p: 2 }} onClick={handleOpenModal}>
          Редактировать
        </ListItem>
        <ListItem button sx={{ p: 2 }} onClick={onArchiveHandle}>
          Архивировать
        </ListItem>
      </Popover>
      <Modal open={openModal} onClose={handleCloseModal} sx={{ overflow: 'scroll' }}>
        <EventEditForm event={event}></EventEditForm>
      </Modal>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Количество билетов: {event.tickets_number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цена: {event.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Место проведения: {event.location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
