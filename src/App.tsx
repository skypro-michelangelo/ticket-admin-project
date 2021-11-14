import React from 'react';

import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './routes/PrivateRoutes';

import CreateEventPage from './pages/CreateEventPage';
import LoginPage from './pages/LoginPage';
import EventsPage from './pages/EventsPage';
import ArchivePage from './pages/ArchivePage';

import { store } from './store/store';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#434adc'
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <EventsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateEventPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <ArchivePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
