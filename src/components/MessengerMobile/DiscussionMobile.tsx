import React from "react";
import Messages from "components/Messages";
import {
  AppBar,
  Avatar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
  ArrowBack as ArrowBackIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { ConversationType } from "types/conversation";
import { useAppDispatch } from "redux/hooks";
import { resetSelectedConversation } from "redux/conversation/conversationSlice";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface discussionMobileProps {
  openDiscussionMobile: boolean;
  setOpenDiscussionMobile: (openDiscussionMobile: boolean) => void;
  selectedConv: ConversationType;
}
const DiscussionMobile = ({
  openDiscussionMobile,
  setOpenDiscussionMobile,
  selectedConv,
}: discussionMobileProps) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpenDiscussionMobile(false);
    dispatch(resetSelectedConversation());
  };

  return (
    <Dialog
      fullScreen
      open={openDiscussionMobile}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "fixed", backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="default"
            onClick={handleClose}
            aria-label="close"
          >
            <ArrowBackIcon />
          </IconButton>
          <div style={{ flexGrow: 1, display: "flex", paddingLeft: 10 }}>
            <Avatar
              style={{ backgroundColor: "#ec6f2293", marginRight: 10 }}
              alt={selectedConv?.senderNickname}
            />
            <Typography
              color="#1f1f1fbf"
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              {selectedConv?.senderNickname}
            </Typography>
          </div>
          <IconButton edge="start" color="default" aria-label="close">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: 40 }}>
        <Messages />
      </div>
    </Dialog>
  );
};

export default DiscussionMobile;
