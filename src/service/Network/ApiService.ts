import {store} from '@src/redux/store';
import {colors} from '@src/theme';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import {describeErrorResponse, describeSuccessResponse} from './logger';

const api = axios.create();

export const BASEURL = 'https://noteapi-3va1.onrender.com';

api.interceptors.request.use(
  async (config: any) => {
    config.baseURL = BASEURL;
    const state = store.getState();
    // @ts-ignore
    const token = state?.accountSlice?.token;
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...config.headers,
      };
    }
    if (config?.method?.toUpperCase() === 'GET') {
      config.params = {...config.params};
    }
    config.headers = {
      ...config.headers,
    };
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  function (response: any) {
    describeSuccessResponse(response);
    try {
      return response?.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  //error
  function (error) {
    const {errors} = error?.response?.data;
    if (error?.response?.status == 401 || error?.response?.data?.code === 401) {
      showMessage({
        message: errors ? errors?.toString() : 'Network Error',
        type: 'danger',
      });
      // store.dispatch(logOut());
    } else {
      showMessage({
        message: errors ? errors?.toString() : 'Network Error',
        type: 'default',
        backgroundColor: colors.error.light,
        color: '#FFFFFF',
      });
    }

    //Hàm log trả về error (Có thể bật và tắt trong file logger)
    describeErrorResponse(error);
    return Promise.reject(error);
  },
);

export default api;
