const backendDomain = process.env.REACT_APP_BACKEND_URL;

export const api = {
  getUser: async function (user: { email: string; password: string }) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    };

    const response = await fetch(`${backendDomain}auth/signIn`, options);

    return response;
  },

  getEvents: async function () {
    const options = {
      method: 'GET'
    };

    const response = await fetch(`${backendDomain}events?count=0&offset=0`, options);

    return response;
  },

  archiveEvent: async function (id: string) {
    const options = {
      method: 'PUT'
    };

    const response = await fetch(`${backendDomain}events/${id}/archive`, options);

    return response;
  },

  createEvent: async function (data: FormData) {
    const options = {
      method: 'POST',
      enctype: 'multipart/form-data',
      body: data
    };

    const response = await fetch(`${backendDomain}events/create`, options);

    return response;
  },

  updateEvent: async function (data: FormData, id: string) {
    const options = {
      method: 'PUT',
      enctype: 'multipart/form-data',
      body: data
    };

    const response = await fetch(`${backendDomain}events/${id}/update`, options);

    return response;
  }
};
