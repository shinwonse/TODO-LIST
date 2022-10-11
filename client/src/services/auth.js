import axios from 'axios';

export const fetchUser = async () => {
  const res = await axios(`${API_SERVER_HOST}/auth`);
};
