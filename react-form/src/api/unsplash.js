import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
   headers:{
    Authorization:
    'Client-ID JbFsBbTZ1dtyrUjQ22f8zU-Z-SsVKD7VOamCADLWvFU'
  }
});

