import api from '@src/service/Network/ApiService';
import {LoginPayload} from '@src/service/Network/model/ApiPayload';

export default {
  login: (payload: LoginPayload) => api.post(`auth/login`, payload),
};
