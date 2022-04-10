import axios from "axios";
import { User } from "types/user";

const signIn = (userName: string) => {
  let user: User;
  getAllUser()
    .then((response) => {
      const userData = response.data;
      if (userData.length > 0) {
        const found = userData.find(
          (user) =>
            user?.nickname?.toUpperCase().trim() ===
            userName?.toUpperCase().trim()
        );
        user = found;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};

const getAllUser = () => {
  return axios.get(`http://localhost:3005/users`);
};

const getUserById = (userId: number) => {
  return axios.get(`http://localhost:3005/users/${userId}`);
};

export { signIn, getAllUser, getUserById };
