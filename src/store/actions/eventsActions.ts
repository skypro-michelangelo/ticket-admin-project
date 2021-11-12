export const SET_EVENTS_ACTION = 'EVENTS@SET' as const;
export const SET_EVENTS_SUCCESS_ACTION = 'EVENTS@SET_SUCCESS' as const;
export const SET_EVENTS_ERROR_ACTION = 'EVENTS@SET_ERROR' as const;
export const SET_EVENTS_LOADER_ACTION = 'EVENTS@SET_LOADER' as const;

export function setEvents(events: Object[]) {
  return {
    type: SET_EVENTS_ACTION,
    payload: events
  };
}

export function setEventsSuccess(events: Object[]) {
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

export type setEventsActionType = ReturnType<typeof setEvents>;
export type setEventsSuccessActionType = ReturnType<typeof setEventsSuccess>;
export type setEventsErrorActionType = ReturnType<typeof setEventsError>;
export type setEventsLoaderActionType = ReturnType<typeof setEventsLoader>;

export type RootAction =
  | setEventsActionType
  | setEventsSuccessActionType
  | setEventsErrorActionType
  | setEventsLoaderActionType;
