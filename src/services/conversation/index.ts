import axios from "axios";

const getConversations = (userId: number) => {
  return axios.get(`http://localhost:3005/conversations/${userId}`);
};

export { getConversations };
