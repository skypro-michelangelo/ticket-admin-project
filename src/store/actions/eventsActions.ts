import { EventType } from '../../types/Event';

export const SET_EVENTS_ACTION = 'EVENTS@SET' as const;
export const SET_EVENTS_SUCCESS_ACTION = 'EVENTS@SET_SUCCESS' as const;
export const SET_EVENTS_ERROR_ACTION = 'EVENTS@SET_ERROR' as const;
export const SET_EVENTS_LOADER_ACTION = 'EVENTS@SET_LOADER' as const;

export const ARCHIVE_EVENT_SUCCESS_ACTION = 'EVENTS@ARCHIVE_SUCCESS' as const;
export const ARCHIVE_EVENT_ERROR_ACTION = 'EVENTS@ARCHIVE_ERROR' as const;

export const CREATE_EVENT_SUCCESS_ACTION = 'EVENTS@CREATE_SUCCESS' as const;
export const CREATE_EVENT_ERROR_ACTION = 'EVENTS@CREATE_ERROR' as const;

export function setEvents(events: EventType[]) {
  return {
    type: SET_EVENTS_ACTION,
    payload: events
  };
}

export function setEventsSuccess(events: EventType[]) {
  return {
    type: SET_EVENTS_SUCCESS_ACTION,
    payload: events
  };
}

export function setEventsError(error: string) {
  return {
    type: SET_EVENTS_ERROR_ACTION,
    payload: error
  };
}

export function setEventsLoader(loading: boolean) {
  return {
    type: SET_EVENTS_LOADER_ACTION,
    payload: loading
  };
}

export function archiveEventSuccess(event: EventType) {
  return {
    type: ARCHIVE_EVENT_SUCCESS_ACTION,
    payload: event
  };
}

export function createEventSuccess(event: EventType) {
  return {
    type: CREATE_EVENT_SUCCESS_ACTION,
    payload: event
  };
}

export function createEventError(error: string) {
  return {
    type: CREATE_EVENT_ERROR_ACTION,
    payload: error
  };
}

export type setEventsActionType = ReturnType<typeof setEvents>;
export type setEventsSuccessActionType = ReturnType<typeof setEventsSuccess>;
export type setEventsErrorActionType = ReturnType<typeof setEventsError>;
export type setEventsLoaderActionType = ReturnType<typeof setEventsLoader>;

export type archiveEventSuccessActionType = ReturnType<typeof archiveEventSuccess>;

export type createEventSuccessActionType = ReturnType<typeof createEventSuccess>;
export type createEventErrorActionType = ReturnType<typeof createEventError>;

export type RootAction =
  | setEventsActionType
  | setEventsSuccessActionType
  | setEventsErrorActionType
  | setEventsLoaderActionType
  | archiveEventSuccessActionType
  | createEventSuccessActionType
  | createEventErrorActionType;
