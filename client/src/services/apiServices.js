import axios from 'axios';
import KEY from './env';
const services = {};

services.getBeautyImages = (data) => {
  return axios({
    method: 'GET',
    url: 'https://api.imgur.com/3/account/revenanteverest/album/KkV6fYJ',
    headers: {
      Authorization: `Client-ID ${KEY}`
    }
  })
};

export default services;
