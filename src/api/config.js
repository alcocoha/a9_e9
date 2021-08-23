const APPLICATION = 'application/json';

const headers = {
  Accept: APPLICATION,
  'Content-Type': APPLICATION
};

export const GET = () => ({
  method: 'GET',
  headers,
  mode: 'cors'
});

export const POST = (body = {}) => ({
  method: 'POST',
  headers,
  mode: 'cors',
  body: JSON.stringify(body)
});

