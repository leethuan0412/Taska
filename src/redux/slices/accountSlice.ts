import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '../../types/index';

export interface accountInterface {
  token: string;
  userProfile: any;
  email: string
  name: string
}

const initialState = {
  token: '',
  email:'',
  name:'',
  userProfile: {},
} as accountInterface;

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setAccountToken(state, action) {
      state.token = action.payload;
    },
    setUserProfile(state, action) {
      state.email = action.payload.email
      state.name = action.payload.name
    },
  },
});

export const {setAccountToken, setUserProfile} = accountSlice.actions;
export const authSelector = (state: { auth: any; }) => state.auth;
export default accountSlice.reducer;
