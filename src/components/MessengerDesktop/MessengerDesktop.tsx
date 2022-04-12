import ConversationList from "components/ConversationList";
import Conversations from "components/Conversation";
import Resume from "components/Resume";
import { Paper } from "@mui/material";
import styles from "styles/Messenger.module.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  getAllConversations,
  selectedConversation,
  setSelectedConversation,
} from "redux/conversation/conversationSlice";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const MessengerDesktop = () => {
  const dispatch = useAppDispatch();
  const conversations = useAppSelector(getAllConversations);
  const selectedConv = useAppSelector(selectedConversation);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (
      conversations.length > 0 &&
      selectedConv.id === null &&
      id === undefined
    ) {
      // set the default selected Conversation by the last message
      router.push("/messages", `messages/${conversations[0].id}`, {
        shallow: true,
      });
      dispatch(setSelectedConversation(conversations[0]));
    }
  }, [conversations]);

  useEffect(() => {
    if (id && id !== selectedConv?.id?.toString()) {
      const found = conversations.find(
        (conversation) => conversation.id.toString() === id
      );
      dispatch(setSelectedConversation(found));
    }
  }, [id]);

  return (
    <div className={styles.contentMessenger}>
      <Paper className={styles.paper}>
        <div className={styles.conversBlock}>
          <ConversationList />
        </div>
        <div className={styles.messageBlock}>
          <Conversations />
        </div>
        <div className={styles.resumeBlock}>
          <Resume />
        </div>
      </Paper>
    </div>
  );
};

export default MessengerDesktop;
