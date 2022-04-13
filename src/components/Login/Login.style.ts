import { Box, styled, IconButton, TextField } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BasicTextField = styled(TextField)({
  marginRight: "15px",
});

export default {
  Container,
  BasicTextField,
};
