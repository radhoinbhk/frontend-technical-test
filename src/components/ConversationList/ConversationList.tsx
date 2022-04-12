import { List, ListItem } from "@mui/material";
import ConversationItem from "./ListItem";
import styles from "styles/Conversations.module.css";
import { useAppSelector } from "redux/hooks";
import { getAllConversations } from "redux/conversation/conversationSlice";

const ConversationList = () => {
  const conversations = useAppSelector(getAllConversations);
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

export default ConversationList;
