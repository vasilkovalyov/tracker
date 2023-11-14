import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminType } from '../types/admin';

export const defaultAdminState: AdminType = {
  _id: '',
  login: '',
  avatar: 'https://i.postimg.cc/Wbx9y1yq/Frame-1.png',
  userName: 'Name Surname',
};

export type AdminAuthStateType = {
  user: AdminType;
  isAuth: boolean;
  loading: boolean;
  error?: string | null;
};

const initialState: AdminAuthStateType = {
  user: defaultAdminState,
  isAuth: false,
  loading: false,
  error: null,
};

export const adminAuthSlice = createSlice({
  name: 'adminAuthSlice',
  initialState,
  reducers: {
    saveUser: (state: AdminAuthStateType, action: PayloadAction<AdminType>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
      state.isAuth = true;
    },
    removeAdmin: (state: AdminAuthStateType) => {
      (state.user = defaultAdminState), (state.isAuth = false);
    },
  },
});

export const { saveUser, removeAdmin } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
