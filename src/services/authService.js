import axios from 'axios';
const endpoint = 'https://localhost:50001/api/users';

const googleSignIn = () => {
  const requestOptions = {
    method: 'GET',
    url: `${endpoint}/login-google`,
  };
  return axios(requestOptions);
};

export { googleSignIn };
