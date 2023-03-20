import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '../../types/index';

export interface accountInterface {
  token: string;
  userProfile: any;
}

const initialState = {
  token: '',
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
      state.userProfile = action.payload;
    },
  },
});

export const {setAccountToken, setUserProfile} = accountSlice.actions;
export default accountSlice.reducer;
