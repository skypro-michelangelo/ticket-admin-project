import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { getEventsThunk } from '../../store/thunk';

import Sidebar from '../../components/Sidebar';
import ToolBar from '../../components/Toolbar';
import Main from '../../components/Main';
import List from '@mui/material/List/List';

import { EventType } from '../../types/Event';
import ListItemEvents from '../../components/ListItemEvents';
import ListItemCreate from '../../components/ListItemCreate';
import ListItemArchive from '../../components/ListItemArchive';

import { SearchField } from '../../components/SearchField';
import { EventCardContainer } from '../../components/EventCardContainer';

import { StyledArchivePage } from './styles';

const ArchivePage: FC = () => {
  useEffect(() => {
    getEventsThunk();
  }, []);

  const events = useSelector<RootState>((state) => state.events.data) as EventType[];
  const archivedEvents = events.filter((obj) => obj.in_archive);

  const [shownEvents, setShownEvents] = useState([] as EventType[]);

  useEffect(() => {
    if (shownEvents.length === 0) {
      const initialState = archivedEvents;

      setShownEvents(initialState);
    }
  }, [shownEvents.length, archivedEvents]);

  const onChangeHandle = useCallback(
    (e) => {
      const { target } = e;

      if (target.value === '') {
        setShownEvents(archivedEvents);

        return;
      }

      const filteredValues = archivedEvents.filter((event) => {
        return event?.name?.toLowerCase().indexOf(target.value.toLowerCase()) === 0;
      });

      setShownEvents([...filteredValues]);
    },
    [archivedEvents]
  );

  return (
    <StyledArchivePage>
      <Sidebar>
        <List>
          <ListItemEvents active={false}></ListItemEvents>
          <ListItemCreate active={false}></ListItemCreate>
          <ListItemArchive active={true}></ListItemArchive>
        </List>
      </Sidebar>
      <ToolBar>Архив мероприятий</ToolBar>
      <Main>
        <SearchField onChange={onChangeHandle} />
        <EventCardContainer events={shownEvents}></EventCardContainer>
      </Main>
    </StyledArchivePage>
  );
};

export default ArchivePage;
