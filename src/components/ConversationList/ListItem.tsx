import React from "react";
import moment from "moment";
import {
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { ConversationType } from "types/conversation";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  selectedConversation,
  setSelectedConversation,
} from "redux/conversation/conversationSlice";
import { useRouter } from "next/dist/client/router";

interface ConversationItemProps {
  conversation: ConversationType;
}

export default function ConversationItem({
  conversation,
}: ConversationItemProps) {
  const dispatch = useAppDispatch();
  const selectedConv = useAppSelector(selectedConversation);
  const ListItemIsSelected = selectedConv.id === conversation.id;
  const router = useRouter();

  const onListItemClick = () => {
    dispatch(setSelectedConversation(conversation));
    router.push(`/messages/${conversation.id}`);
  };

  return (
    <ListItemButton
      selected={ListItemIsSelected}
      onClick={onListItemClick}
      style={{
        backgroundColor: ListItemIsSelected && "rgb(239 239 239 / 37%)",
        borderLeft: ListItemIsSelected && "3px solid #ff6e14",
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{ bgcolor: "#ec6f2293" }}
          alt={conversation?.senderNickname}
        >
          {conversation?.senderNickname[0]}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={conversation?.senderNickname}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Last message at:{" "}
            </Typography>
            {moment
              .unix(conversation?.lastMessageTimestamp)
              .format("MMMM Do YYYY, HH:mm")}
          </React.Fragment>
        }
      />
    </ListItemButton>
  );
}
