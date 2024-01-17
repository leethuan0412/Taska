import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '../../types/index';

const initialState = {
  token: '',
  email: '',
  name: '',
  userProfile: {},
};

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setAccountToken: (state, action) => {
      state.token = action.payload.token;
    },
    setUserProfile: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});
export const userSelector = (state: {account: any}) => state.account;
export const {setAccountToken, setUserProfile} = accountSlice.actions;
export const authSelector = (state: {auth: any}) => state.auth;
export default accountSlice.reducer;
