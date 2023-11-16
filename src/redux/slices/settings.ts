import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingsType } from '../types/settings'

export const defaultSettingsState: SettingsType = {
  currency: '$',
}

export type SettingsStateType = {
  settings: SettingsType
  loading: boolean
  error?: string | null
}

const initialState: SettingsStateType = {
  settings: defaultSettingsState,
  loading: false,
  error: null,
}

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    saveSettings: (state: SettingsStateType, action: PayloadAction<SettingsType>) => {
      state.settings = {
        ...state.settings,
        ...action.payload,
      }
    },
  },
})

export const { saveSettings } = settingsSlice.actions

export default settingsSlice.reducer
