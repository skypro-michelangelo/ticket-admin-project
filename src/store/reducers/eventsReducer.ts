import { EventType } from '../../types/Event';
import {
  SET_EVENTS_SUCCESS_ACTION,
  SET_EVENTS_ERROR_ACTION,
  RootAction,
  SET_EVENTS_LOADER_ACTION,
  ARCHIVE_EVENT_SUCCESS_ACTION,
  CREATE_EVENT_SUCCESS_ACTION
} from '../actions/eventsActions';

type Events = {
  loading: boolean;
  data: EventType[];
  error: string;
};

const DEFAULT_EVENTS: Events = {
  loading: false,
  data: [],
  error: ''
};

export function eventsReducer(state = DEFAULT_EVENTS, action: RootAction) {
  switch (action.type) {
    case SET_EVENTS_SUCCESS_ACTION:
      return {
        ...state,
        data: [...action.payload]
      };
    case SET_EVENTS_ERROR_ACTION:
      return {
        ...state,
        error: action.payload
      };
    case SET_EVENTS_LOADER_ACTION:
      return {
        ...state,
        loading: action.payload
      };
    // case ARCHIVE_EVENT_SUCCESS_ACTION:
    //   return {
    //     ...state,
    //     data: action.payload
    //   };
    case CREATE_EVENT_SUCCESS_ACTION:
      console.log(action.payload);
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    default:
      return state;
  }
}
