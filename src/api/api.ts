const backendDomain = 'http://localhost:3001';

export const api = {
  login: async function (user: { email: string; password: string }) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    };

    const response = await fetch(`${backendDomain}/login`, options);

    return response.status === 200;
  }
};
