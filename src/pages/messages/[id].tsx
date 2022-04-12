import { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import loadable from "@loadable/component";
import { setMobileMode } from "redux/application/applicationSlice";
import { resetSelectedConversation, setConversations } from "redux/conversation/conversationSlice";
import { useAppDispatch } from "redux/hooks";
import { getConversations } from "services/conversation";
import { ConversationType } from "types/conversation";
import { getLoggedUserId } from "utils/getLoggedUserId";
import { getUserById } from "services/users";
import { setLoggedUser } from "redux/user/userSlice";
const MessengerDesktop = loadable(() => import("components/MessengerDesktop"));
const MessengerMobile = loadable(() => import("components/MessengerMobile"));

const MessagePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const loggedUserId = getLoggedUserId();
  const dispatch = useAppDispatch();


  useEffect(() => {
    return () => {
      dispatch(resetSelectedConversation());
    };
  }, []);

  useEffect(() => {
    dispatch(setMobileMode(!matches));
  }, [matches]);

  useEffect(() => {
    if (loggedUserId) {
      getConversationsByUserId(loggedUserId);
      getDataUserById(loggedUserId);
    }
  }, [loggedUserId]);

  const getDataUserById = (userID) => {
    getUserById(userID)
      .then((response) => {
        if (response.data) {
          dispatch(setLoggedUser(response.data));
        }
      })
      .catch((error) => console.error(error));
  };

  const getConversationsByUserId = (userID) => {
    getConversations(userID)
      .then((response) => {
        filterByLastMessageTime(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterByLastMessageTime = (conversations: ConversationType[]) => {
    const conversationsFiltred = conversations.sort(
      (a, b) => b?.lastMessageTimestamp - a?.lastMessageTimestamp
    );
    dispatch(setConversations(conversationsFiltred));
  };

  return <div>{matches ? <MessengerDesktop /> : <MessengerMobile />}</div>;
};

export default MessagePage;
