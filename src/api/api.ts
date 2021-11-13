import { EventType } from '../types/Event';

const backendDomain = 'http://localhost:5000';

export const api = {
  getUser: async function (user: { email: string; password: string }) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    };

    const response = await fetch(`${backendDomain}/login`, options);
    setTimeout(() => {}, 10000);

    return response;
  },

  getEvents: async function () {
    const options = {
      method: 'GET'
    };

    const response = await fetch(`${backendDomain}/events?count=0&offset=0`, options);

    setTimeout(() => {}, 10000);

    return response;
  },

  archiveEvent: async function (id: string) {
    const options = {
      method: 'PUT'
    };

    const response = await fetch(`${backendDomain}/events/${id}/archive`, options);

    setTimeout(() => {}, 10000);
    console.log(response);
    return response;
  },

  createEvent: async function (data: FormData) {
    console.log(data);
    const options = {
      method: 'POST',
      enctype: 'multipart/form-data',
      body: data
    };

    const response = await fetch(`${backendDomain}/events/create`, options);

    console.log(response);

    setTimeout(() => {}, 10000);
    return response;
  },

  updateEvent: async function (event: EventType) {
    console.log(event);
    const options = {
      method: 'POST',
      enctype: 'multipart/form-data',
      body: JSON.stringify(event)
    };

    const response = await fetch(`${backendDomain}/events/create`, options);

    console.log(response);

    setTimeout(() => {}, 10000);
    return response;
  }
};
