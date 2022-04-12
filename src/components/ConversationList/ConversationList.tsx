import { ListItem } from "@mui/material";
import ConversationItem from "./ListItem";
import Style from "./ConversationList.style";
import { useAppSelector } from "redux/hooks";
import { getAllConversations } from "redux/conversation/conversationSlice";

const ConversationList = () => {
  const conversations = useAppSelector(getAllConversations);
  return (
    <Style.ContainerList>
      {conversations.map((conversation) => (
        <ListItem key={conversation.id} alignItems="flex-start" disablePadding>
          <ConversationItem conversation={conversation} />
        </ListItem>
      ))}
    </Style.ContainerList>
  );
};

export default ConversationList;
