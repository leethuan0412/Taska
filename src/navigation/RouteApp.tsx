import {HomeScreen} from '@src/screen/Main/HomeScreen';
import {ProfileScreen} from '@src/screen/Main/user/ProfileScreen';

export const ROUTE_APP = {
  HOME: 'HOME',
  PROFILE: 'PROFILE',
};
const {HOME, PROFILE} = ROUTE_APP;
const SCREEN_ROUTE_APP = {
  [HOME]: HomeScreen,
  [PROFILE]: ProfileScreen,
};
export default SCREEN_ROUTE_APP;
