import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ApplicationState {
  darkMode: boolean;
  mobileMode: boolean;
}

const initialState: ApplicationState = {
  darkMode: false,
  mobileMode: false,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setMobileMode: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.mobileMode = action.payload;
    },
  },
});

export const { setMobileMode } = applicationSlice.actions;

export const mobileMode = (state: RootState) =>
  state.application.mobileMode;
export default applicationSlice.reducer;
