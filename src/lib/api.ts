import axios from 'axios'
import appsettings from '../../appsettings.json'

const controller = new AbortController()

const instance = axios.create({
    baseURL: appsettings.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use((config) => {
    config.signal = controller.signal;
    return config;
  }, (error) => {
    throw new Error(error);
  });

export default instance;