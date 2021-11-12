import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { getEventsThunk } from '../../store/thunk';

import { EventsPage } from './styles';

import Sidebar from '../../components/Sidebar';
import ToolBar from '../../components/Toolbar';
import Main from '../../components/Main';

import { SearchField } from '../../components/SearchField';
import { EventCardContainer } from '../../components/EventCardContainer';

import { EventType } from '../../types/Event';
import ListItemEvents from '../../components/ListItemEvents';
import ListItemCreate from '../../components/ListItemCreate';
import ListItemArchive from '../../components/ListItemArchive';

import List from '@mui/material/List/List';

getEventsThunk();

const Page: FC = () => {
  const events = useSelector<RootState>((state) => state.events.data) as EventType[];

  let [shownEvents, setShownEvents] = useState([...events]);

  const onChangeHandle = useCallback(
    (e) => {
      const { target } = e;

      if (target.value === '') {
        setShownEvents((shownEvents) => [...events]);

        return;
      }

      const filteredValues = events.filter((event) => {
        return event.name.toLowerCase().indexOf(target.value.toLowerCase()) === 0;
      });

      setShownEvents((shownEvents) => [...filteredValues]);
    },
    [events]
  );

  return (
    <EventsPage>
      <Sidebar>
        <List>
          <ListItemEvents active={true}></ListItemEvents>
          <ListItemCreate active={false}></ListItemCreate>
          <ListItemArchive active={false}></ListItemArchive>
        </List>
      </Sidebar>
      <ToolBar>Список мероприятий</ToolBar>
      <Main>
        <SearchField onChange={onChangeHandle} />
        <EventCardContainer events={shownEvents}></EventCardContainer>
      </Main>
    </EventsPage>
  );
};

export default Page;
