import jsonData from './test.json';

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

    const response = await fetch(`${backendDomain}/login`, options); //{ status: 200 };
    setTimeout(() => {}, 10000);

    return response;
  },

  getEvents: async function () {
    const options = {
      method: 'POST'
    };

    const response = jsonData; //await fetch(`${backendDomain}/events`, options); 

    setTimeout(() => {}, 10000);

    return response;
  }
};
