import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const BasicButton = styled(Button)({
  color: "#ff6e14",
  borderColor: "#ff6e14",
  ":hover": {
    borderColor: "#ff6e14",
    backgroundColor: "#ff6e1417",
  },
});

export default BasicButton;
