import { FC, useEffect } from "react";
import Head from "next/head";
import loadable from "@loadable/component";
import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch } from "redux/hooks";
import { setMobileMode } from "redux/application/applicationSlice";
import { getLoggedUserId } from "utils/getLoggedUserId";
import { getConversations } from "services/conversation";
import { getUserById } from "services/users";
import { setLoggedUser } from "redux/user/userSlice";
import { ConversationType } from "types/conversation";
import { setConversations } from "redux/conversation/conversationSlice";
const MessengerDesktop = loadable(() => import("components/MessengerDesktop"));
const MessengerMobile = loadable(() => import("components/MessengerMobile"));

const Home: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useAppDispatch();
  const loggedUserId = getLoggedUserId();

  useEffect(() => {
    dispatch(setMobileMode(!matches));
  }, [matches]);

  useEffect(() => {
    if (loggedUserId) {
      getConversationsByUserId(loggedUserId);
      getDataUserById(loggedUserId);
    }
  }, [loggedUserId]);

  const getConversationsByUserId = (userID) => {
    getConversations(userID)
      .then((response) => {
        filterByLastMessageTime(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataUserById = (userID) => {
    getUserById(userID)
      .then((response) => {
        if (response.data) {
          dispatch(setLoggedUser(response.data));
        }
      })
      .catch((error) => console.error(error));
  };

  const filterByLastMessageTime = (conversations: ConversationType[]) => {
    const conversationsFiltred = conversations.sort(
      (a, b) => b?.lastMessageTimestamp - a?.lastMessageTimestamp
    );
    dispatch(setConversations(conversationsFiltred));
  };

  return (
    <div>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>
      {matches ? <MessengerDesktop /> : <MessengerMobile />}
    </div>
  );
};

export default Home;
