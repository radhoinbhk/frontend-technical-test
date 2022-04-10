import Conversations from "components/Conversations";
import Messages from "components/Messages";
import Resume from "components/Resume";
import { Paper } from "@mui/material";
import styles from "styles/Messenger.module.css";

const MessengerDesktop = () => {
  return (
    <div className={styles.contentMessenger}>
      <Paper className={styles.paper}>
        <div className={styles.conversBlock}>
          <Conversations />
        </div>
        <div className={styles.messageBlock}>
          <Messages />
        </div>
        <div className={styles.resumeBlock}>
          <Resume />
        </div>
      </Paper>
    </div>
  );
};

export default MessengerDesktop;
