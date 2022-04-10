import { useEffect } from "react";
import { List, ListItem } from "@mui/material";
import ConversationItem from "./ConversationItem";
import styles from "styles/Conversations.module.css";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  setSelectedConversation,
  getAllConversations,
  selectedConversation,
} from "redux/conversation/conversationSlice";
import { mobileMode } from "redux/application/applicationSlice";

const Conversations = () => {
  const dispatch = useAppDispatch();
  const isMobileMode = useAppSelector(mobileMode);
  const conversations = useAppSelector(getAllConversations);
  const selectedConv = useAppSelector(selectedConversation);

  useEffect(() => {
    if (conversations.length > 0 && !isMobileMode && selectedConv.id === null) {
      // set the default selected Conversation by the last message
      dispatch(setSelectedConversation(conversations[0]));
    }
  }, [conversations, isMobileMode]);

  return (
    <List className={styles.containerList}>
      {conversations.map((conversation) => (
        <ListItem key={conversation.id} alignItems="flex-start" disablePadding>
          <ConversationItem conversation={conversation} />
        </ListItem>
      ))}
    </List>
  );
};

export default Conversations;
