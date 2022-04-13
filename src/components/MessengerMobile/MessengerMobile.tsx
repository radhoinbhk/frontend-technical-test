import ConversationList from "components/ConversationList";
import { useEffect, useState } from "react";
import { selectedConversation } from "redux/conversation/conversationSlice";
import { useAppSelector } from "redux/hooks";
import style from "./MessengerMobile.style";
import DiscussionMobile from "./DiscussionMobile";

const MessengerMobile = () => {
  const [openDiscussionMobile, setOpenDiscussionMobile] = useState(false);
  const selectedConv = useAppSelector(selectedConversation);

  useEffect(() => {
    if (selectedConv.id) {
      setOpenDiscussionMobile(true);
    }else{
      setOpenDiscussionMobile(false);
    }
  }, [selectedConv]);

  return (
    <div>
      <style.ContentMessenger>
        <ConversationList />
      </style.ContentMessenger>
      <DiscussionMobile
        openDiscussionMobile={openDiscussionMobile}
        setOpenDiscussionMobile={setOpenDiscussionMobile}
        selectedConv={selectedConv}
      />
    </div>
  );
};

export default MessengerMobile;
