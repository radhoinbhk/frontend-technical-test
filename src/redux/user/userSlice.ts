import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "types/user";

export interface UserState {
  loggedUser: User;
}

const initialState: UserState = {
  loggedUser: {
    id: null,
    nickname: null,
    token: null,
  },
};

export const conversationSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoggedUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.loggedUser = action.payload;
    },
  },
});

export const { setLoggedUser } = conversationSlice.actions;

export const selectLoggedUser = (state: RootState) =>
  state.user.loggedUser;
export default conversationSlice.reducer;
