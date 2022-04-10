import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "styles/Message.module.css";
import { useAppSelector } from "redux/hooks";
import { selectedConversation } from "redux/conversation/conversationSlice";
import { creatNewMessage, getMessages } from "services/message";
import { Message, newMessageDataType } from "types/message";
import { Fab, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getLoggedUserId } from "utils/getLoggedUserId";
import { mobileMode } from "redux/application/applicationSlice";

interface messageToDisplayType {
  id: number;
  conversationId: number;
  authorId: number;
  timestamp: number;
  body: string;
  sender: boolean;
  first: boolean;
  middle: boolean;
  last: boolean;
}
const Conversations = () => {
  const initialMessagesState: messageToDisplayType[] = [];
  const [messagesToDisplay, setMessagesToDisplay] =
    useState(initialMessagesState);
  const [newMessage, setNewMessage] = useState("");
  const selectedConv = useAppSelector(selectedConversation);
  const loggedUserId = getLoggedUserId();
  const isMobileMode = useAppSelector(mobileMode);

  useEffect(() => {
    if (selectedConv.id) {
      getAllMsgOfSelectedConv();
      setNewMessage("");
    }
  }, [selectedConv.id]);

  useEffect(() => {
    if (messagesToDisplay.length > 0) {
      const target = document.getElementById("last-discussion");
      target.scrollIntoView({
        block: "start",
        behavior: "auto",
        inline: "end",
      });
    }
  }, [messagesToDisplay]);

  const creatMessageToDisplay = (messages: Message[]) => {
    let messagesToDisplay: messageToDisplayType[] = [];
    for (let index = 0; index < messages.length; index++) {
      let message = messages[index];
      messagesToDisplay.push({
        id: message.id,
        conversationId: message.conversationId,
        authorId: message.authorId,
        timestamp: message.timestamp,
        body: message.body,
        sender: message.authorId !== loggedUserId,
        first:
          message.authorId !== messages[index - 1]?.authorId &&
          message.authorId === messages[index + 1]?.authorId,
        middle:
          message.authorId === messages[index - 1]?.authorId &&
          message.authorId === messages[index + 1]?.authorId,
        last:
          message.authorId !== messages[index + 1]?.authorId &&
          message.authorId === messages[index - 1]?.authorId,
      });
    }
    setMessagesToDisplay(messagesToDisplay);
  };

  const sendNewMsg = (event) => {
    event.preventDefault();
    if (newMessage.length > 0) {
      const newMessageData: newMessageDataType = {
        body: newMessage,
        timestamp: Math.floor(Date.now() / 1000),
        conversationId: selectedConv.id,
        authorId: loggedUserId,
      };

      creatNewMessage(selectedConv.id, newMessageData)
        .then((response) => {
          console.log(response);
          getAllMsgOfSelectedConv();
          setNewMessage("");
        })
        .catch((error) => console.log(error));
    }
  };

  const getAllMsgOfSelectedConv = () => {
    getMessages(selectedConv.id)
      .then((response) => {
        if (response.data) {
          creatMessageToDisplay(response.data);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className={styles.containerMsg}>
      <div
        className={styles.containerDiscuss}
        style={{
          paddingBottom: isMobileMode && 110,
        }}
      >
        {messagesToDisplay.length > 0 &&
          messagesToDisplay.map((message, index) => (
            <div
              className="discussion"
              id={
                index === messagesToDisplay.length - 1
                  ? "last-discussion"
                  : "notLast-discussion"
              }
              key={message.id}
            >
              {message.sender &&
                (message.first ||
                  (!message.first && !message.last && !message.middle)) && (
                  <span className={styles.senderNickname}>
                    {selectedConv.senderNickname}
                  </span>
                )}
              <Item
                sender={message.sender}
                first={message.first}
                last={message.last}
                middle={message.middle}
              >
                {message.body}
              </Item>
            </div>
          ))}
      </div>
      <form
        className={styles.sendNewMsgContainer}
        style={{
          position: isMobileMode ? "fixed" : "initial",
          bottom: isMobileMode && 0,
        }}
      >
        <TextField
          size="small"
          fullWidth
          placeholder="Send new message"
          id="fullWidth"
          value={newMessage}
          onChange={handleChange}
          style={{ paddingRight: 20 }}
        />
        <Fab
          size="small"
          color="primary"
          aria-label="send"
          type="submit"
          disabled={newMessage.length === 0}
          onClick={sendNewMsg}
        >
          <SendIcon />
        </Fab>
      </form>
    </div>
  );
};

export default Conversations;
