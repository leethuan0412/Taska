import { IntroduceScreen } from '@src/screen/Auth/IntroduceScreen';
import { LoginEmailScreen } from '@src/screen/Auth/LoginEmailScreen';
import {LoginScreen} from '@src/screen/Auth/LoginScreen';
import { RegisterScreen } from '@src/screen/Auth/RegisterScreen';

export const ROUTE_AUTH = {
  LOGIN: 'LOGIN',
  INTRODUCE : 'INTRODUCE',
  REGISTER :'REGISTER',
  LOGIN_EMAIL: 'LOGIN_EMAIL'
};
const {LOGIN, INTRODUCE ,REGISTER, LOGIN_EMAIL} = ROUTE_AUTH;
const SCREEN_ROUTE_AUTH = {
  [INTRODUCE]:IntroduceScreen,
  [LOGIN]: LoginScreen,
  [REGISTER]:RegisterScreen,
  [LOGIN_EMAIL]:LoginEmailScreen
};
export default SCREEN_ROUTE_AUTH;
