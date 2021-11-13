import { FC } from 'react';

import Sidebar from '../../components/Sidebar';
import ToolBar from '../../components/Toolbar';
import Main from '../../components/Main';
import List from '@mui/material/List/List';

import { StyledCreateEventPage } from './styles';

import { EventType } from '../../types/Event';
import ListItemEvents from '../../components/ListItemEvents';
import ListItemCreate from '../../components/ListItemCreate';
import ListItemArchive from '../../components/ListItemArchive';
import EventForm from '../../components/EventForm';

const CreateEventPage: FC = () => {
  return (
    <StyledCreateEventPage>
      <Sidebar>
        <List>
          <ListItemEvents active={false}></ListItemEvents>
          <ListItemCreate active={true}></ListItemCreate>
          <ListItemArchive active={false}></ListItemArchive>
        </List>
      </Sidebar>
      <ToolBar>Создать мероприятие</ToolBar>
      <Main>
        <EventForm></EventForm>
      </Main>
    </StyledCreateEventPage>
  );
};

export default CreateEventPage;
