import Conversations from "components/Conversations";
import { useEffect, useState } from "react";
import { selectedConversation } from "redux/conversation/conversationSlice";
import { useAppSelector } from "redux/hooks";
import styles from "styles/Messenger.module.css";
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
      <div className={styles.contentMessenger}>
        <Conversations />
      </div>
      <DiscussionMobile
        openDiscussionMobile={openDiscussionMobile}
        setOpenDiscussionMobile={setOpenDiscussionMobile}
        selectedConv={selectedConv}
      />
    </div>
  );
};

export default MessengerMobile;
