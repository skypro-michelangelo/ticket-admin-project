import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { getEventsThunk } from '../../store/thunk';

import { StyledEventsPage } from './styles';

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

import CircularIndeterminate from '../../components/CircularIndeterminate';

const EventsPage: FC = () => {
  const loading = useSelector<RootState>((state) => state.events.loading);

  useEffect(() => {
    getEventsThunk();
  }, []);

  const events = useSelector<RootState>((state) => state.events.data) as EventType[];
  const nonArchivedEvents = events.filter((obj) => !obj.in_archive);

  const [shownEvents, setShownEvents] = useState([] as EventType[]);

  useEffect(() => {
    if (events.length > 0) {
      const initialState = nonArchivedEvents;

      setShownEvents(initialState);
    }
  }, [events]);

  const onChangeHandle = useCallback(
    (e) => {
      const { target } = e;

      if (target.value === '') {
        setShownEvents(nonArchivedEvents);

        return;
      }

      const filteredValues = nonArchivedEvents.filter((event) => {
        return event?.name?.toLowerCase().indexOf(target.value.toLowerCase()) === 0;
      });

      setShownEvents([...filteredValues]);
    },
    [shownEvents]
  );

  return (
    <StyledEventsPage>
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
        {loading ? <CircularIndeterminate /> : null}
        <EventCardContainer events={shownEvents}></EventCardContainer>
      </Main>
    </StyledEventsPage>
  );
};

export default EventsPage;
