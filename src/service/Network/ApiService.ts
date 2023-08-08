import apisauce from 'apisauce';
import Config from 'react-native-config';
import {RegisterPayload} from './model/ApiPayload';
import {Login} from './model/ApiResponse';

function create() {
  const api = apisauce.create({
    baseURL: Config.BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    timeout: 50000,
  });

  api.addResponseTransform(response => {
    if (response.ok && response.data) {
      response.ok = true;
    } else {
      response.ok = false;
    }
    api.setHeader('Authorization', `Bearer ${response?.data?.accessToken}`);
  });

  function login(body: {email: string; password: string}) {
    return api.post<Login>('auth/login', body);
  }
  function register(body: RegisterPayload) {
    return api.post('auth/register', body);
  }
  return {
    login,
    register,
  };
}

const Api = create();

export default Api;
