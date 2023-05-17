import axios from 'axios';
const endpoint = 'https://localhost:50001/api/checkout';

const checkout = () => {
  const requestOptions = {
    method: 'POST',
    url: endpoint,
  };
  return axios(requestOptions);
};

const redirect = (url) => {
  const requestOptions = {
    method: 'GET',
  };
  return fetch(url, requestOptions);
};

export { checkout, redirect };
