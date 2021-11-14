import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from './reducers/userReducer';
import { eventsReducer } from './reducers/eventsReducer';

const allReducers = combineReducers({
  user: userReducer,
  events: eventsReducer
});

export const store = createStore(allReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof allReducers>;
