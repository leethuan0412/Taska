import {HomeScreen} from '@src/screen/Main/HomeScreen';

export const ROUTE_APP = {
  HOME: 'HOME',
};
const {HOME} = ROUTE_APP;
const SCREEN_ROUTE_APP = {
  [HOME]: HomeScreen,
};
export default SCREEN_ROUTE_APP;
