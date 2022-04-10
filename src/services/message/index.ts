import axios from "axios";
import { newMessageDataType } from "types/message";

const getMessages = (ConversationId: number) => {
  return axios.get(`http://localhost:3005/messages/${ConversationId}`);
};

const creatNewMessage = (
  ConversationId: number,
  newMessageData: newMessageDataType
) => {
  return axios.post(
    `http://localhost:3005/messages/${ConversationId}`,
    newMessageData
  );
};

export { getMessages, creatNewMessage };
