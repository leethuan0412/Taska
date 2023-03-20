  import i18next from 'i18next';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse, CancelTokenSource} from 'axios';
import _ from 'lodash';

export const ApiConfigs = {
  baseURL: 'https://app.caretaskr.com/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 30000,
  },
  timeout: 30000,
};


class AxiosClass {
  static instance: AxiosClass;

  static default() {
    if (!AxiosClass.instance) {
      AxiosClass.instance = new AxiosClass();
    }
    return AxiosClass.instance;
  }

  api: any;
  incrementRequestId = 0;
  token = '';
  storeKey = '';

  constructor() {
    this.api = axios.create(ApiConfigs);
    this.api.interceptors.response.use(this.interceptorResponses, (err: any) =>
      Promise.reject(err),
    );
    this.api.interceptors.request.use(this.interceptorRequests);
  }

  interceptorRequests = async (config: any): Promise<any> => {
    const token = await AsyncStorage.getItem('APP_TOKEN');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  };

  interceptorResponses = (response: AxiosResponse): Promise<any> => {
    const {data} = response;
    return Promise.resolve(data.data);
  };

  setToken = async (token: string) => {
    this.token = token;
    this.api.defaults.headers.common.Authorization = token;
  };

  setTokenWithoutSaveLocal = async (token: string) => {
    this.token = token;
    this.api.defaults.headers.common.Authorization = token;
  };

  clear = () => {
    this.token = '';
    this.api.defaults.headers.common.Authorization = null;
  };
  getToken = () => this.token;
  setStoreKey = (key: string) => {
    this.storeKey = key;
  };

  get<T>(
    url: string,
    headers?:
      | any
      | {
          cancelToken: CancelTokenSource;
        },
    params?: any,
  ): Promise<T> {
    let headerCheck = headers ? headers : {};
    const newHeader: any = {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
        ...headerCheck,
      },
    };
    if (params) {
      newHeader.params = {
        ...params,
        lang: i18next.language,
      };
    } else {
      newHeader.params = {lang: i18next.language};
    }
    if (headers?.cancelToken) {
      newHeader.cancelToken = headers.cancelToken;
    }

    return this.api.get(url, {
      ...newHeader,
    });
  }

  del<T>(url: string): Promise<T> {
    return this.api.delete(url, {
      headers: {
        _id: this.incrementRequestId,
        ...this.api.defaults.headers,
      },
    });
  }

  postNormal<T>(url: string, body: any, header: any = {}): Promise<T> {
    let newBody = body ? {...body} : {};
    newBody.lang = i18next.language;
    return this.api.post(url, newBody, {
      headers: {
        _id: this.incrementRequestId,
        ...header,
      },
    });
  }

  put<T>(url: string, body: any): Promise<T> {
    return this.api.put(url, body, {
      headers: {
        _id: this.incrementRequestId,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  delete<T>(url: string, body: any): Promise<T> {
    return this.api.delete(url, {
      data: body,
      headers: {
        _id: this.incrementRequestId,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }

  postForm<T>(url: string, body: FormData): Promise<T> {
    let newBody = body ? _.clone(body) : new FormData();
    if (newBody) {
      newBody.append('lang', i18next.language);
    }

    return this.api.post(url, newBody, {
      headers: {
        _id: this.incrementRequestId,
        Accept: Platform.OS === 'ios' ? 'application/json' : 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export const api = AxiosClass.default();
