import { EventType } from '../../types/Event';
import {
  SET_EVENTS_SUCCESS_ACTION,
  SET_EVENTS_ERROR_ACTION,
  RootAction,
  SET_EVENTS_LOADER_ACTION,
  ARCHIVE_EVENT_SUCCESS_ACTION,
  CREATE_EVENT_SUCCESS_ACTION,
  ARCHIVE_EVENT_ERROR_ACTION,
  CREATE_EVENT_ERROR_ACTION,
  UPDATE_EVENT_ERROR_ACTION,
  UPDATE_EVENT_SUCCESS_ACTION
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
    case ARCHIVE_EVENT_SUCCESS_ACTION:
      return {
        ...state,
        data: state.data.map((event) => {
          if (event._id === action.payload._id) {
            event.in_archive = action.payload.in_archive;
          }
          return event;
        })
      };
    case ARCHIVE_EVENT_ERROR_ACTION:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_EVENT_SUCCESS_ACTION:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case CREATE_EVENT_ERROR_ACTION:
      return {
        ...state,
        error: action.payload
      };
    case UPDATE_EVENT_SUCCESS_ACTION:
      return {
        ...state,
        data: state.data.map((event) => {
          if (event._id === action.payload._id) {
            return action.payload;
          }
          return event;
        })
      };
    case UPDATE_EVENT_ERROR_ACTION:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
