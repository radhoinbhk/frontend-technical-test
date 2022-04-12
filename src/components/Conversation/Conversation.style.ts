import { styled } from "@mui/material";

const ContainerMsg = styled("div")({
  height: "100%",
  borderRight: "1px solid #e6ebef",
  display: "flex",
  alignContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "space-between",
});

const ContainerDiscuss = styled("div")({
  overflow: "auto",
  width: "100%",
  padding: "40px 20px 20px",
});

const SenderNickname = styled("span")({
  paddingLeft: "10px",
  fontSize: "10pt",
  color: "#000000a1",
});

const SendNewMsgContainer = styled("form")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90px",
  padding: "15px",
  borderTop: "1px solid #e6ebef",
  backgroundColor: "#fff",
});

export default {
  ContainerMsg,
  ContainerDiscuss,
  SenderNickname,
  SendNewMsgContainer,
};
