import ConversationList from "components/ConversationList";
import Conversations from "components/Conversation";
import Resume from "components/Resume";
import { Paper } from "@mui/material";
import Style from "./MessengerDesktop.style";
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
    <Style.ContentMessenger>
      <Style.ContainerPaper>
        <Style.ConversBlock>
          <ConversationList />
        </Style.ConversBlock>
        <Style.MessageBlock>
          <Conversations />
        </Style.MessageBlock>
        <Style.ResumeBlock>
          <Resume />
        </Style.ResumeBlock>
      </Style.ContainerPaper>
    </Style.ContentMessenger>
  );
};

export default MessengerDesktop;
