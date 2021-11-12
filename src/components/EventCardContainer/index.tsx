import React, { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import ButtonGroup from '@mui/material/ButtonGroup/ButtonGroup';

import EventCard from '../EventCard';

import { EventType } from '../../types/Event';

type Props = {
  events: EventType[];
};

const PAGE_SIZE = 10;

export const EventCardContainer: FC<Props> = ({ events, children }) => {
  const notArchivedEvents = events.filter((event) => !event.in_archive);

  const totalPages = Math.ceil(notArchivedEvents.length / PAGE_SIZE);

  const [currentPage, setCurrentPage] = useState(0);

  let chunked: Array<EventType[]> = [];
  Array.from({ length: PAGE_SIZE }, (val, i) => {
    chunked.push(notArchivedEvents.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE));
  });

  let filteredChunked = chunked.filter((array) => array && array.length !== 0);

  const generateNButtons = (pageNumber: number, onClick: React.Dispatch<React.SetStateAction<number>>) => {
    const array = Array.from(Array(pageNumber).keys());

    const buttons = array.map((i) => {
      return (
        <Button
          key={`Button_${i}`}
          value={i}
          onClick={(e) => setCurrentPage(i)}
          sx={{ backgroundColor: currentPage === i ? '#c7caef' : 'transparent' }}
        >
          {i + 1}
        </Button>
      );
    });

    return buttons;
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredChunked[currentPage] ? (
          filteredChunked[currentPage].map((event, index) => <EventCard event={event}></EventCard>)
        ) : (
          <></>
        )}
      </Box>
      <ButtonGroup defaultValue={0}>{generateNButtons(totalPages, setCurrentPage)}</ButtonGroup>
    </>
  );
};
