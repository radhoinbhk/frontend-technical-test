import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import conversationReducer from "./conversation/conversationSlice";
import userReducer from "./user/userSlice";
import applicationReducer from "./application/applicationSlice";

export const store = configureStore({
  reducer: {
    conversation: conversationReducer,
    user: userReducer,
    application: applicationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;