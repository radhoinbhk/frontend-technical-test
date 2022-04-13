import { Paper, styled } from "@mui/material";

const ContentMessenger = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ConversBlock = styled("div")({
  width: "25%",
});

const ResumeBlock = styled("div")({
  width: "25%",
});

const MessageBlock = styled("div")({
  width: "25%",
});

const ContainerPaper = styled(Paper)({
  display: "flex",
  flexDirection: "row",
  width: "80vw",
  height: "90vh",
  "@media (max-width: 1200px)": {
    width: "95vw",
  },
});

export default {
  ContentMessenger,
  ConversBlock,
  ResumeBlock,
  MessageBlock,
  ContainerPaper,
};
