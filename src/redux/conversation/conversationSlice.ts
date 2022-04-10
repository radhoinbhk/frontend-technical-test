import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ConversationType } from "types/conversation";

export interface ConversationState {
  selectedConversation: ConversationType;
  conversations: ConversationType[];
}

const initialState: ConversationState = {
  selectedConversation: {
    id: null,
    recipientId: null,
    recipientNickname: null,
    senderId: null,
    senderNickname: null,
    lastMessageTimestamp: null,
  },
  conversations: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSelectedConversation: (
      state,
      action: PayloadAction<ConversationType>
    ) => {
      state.selectedConversation = action.payload;
    },
    setConversations: (state, action: PayloadAction<ConversationType[]>) => {
      state.conversations = action.payload;
    },
    resetSelectedConversation: (state) => {
      state.selectedConversation = initialState.selectedConversation;
    },
  },
});

export const {
  setSelectedConversation,
  resetSelectedConversation,
  setConversations,
} = conversationSlice.actions;

export const selectedConversation = (state: RootState) =>
  state.conversation.selectedConversation;
export const getAllConversations = (state: RootState) =>
  state.conversation.conversations;
export default conversationSlice.reducer;
