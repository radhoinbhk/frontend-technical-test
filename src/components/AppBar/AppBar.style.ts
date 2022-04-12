import { styled, Toolbar } from "@mui/material";
import Image from "next/image";

const AppBarImage = styled(Image)({
  cursor: "pointer",
});

const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const RightContents = styled("div")(({ theme }) => ({
  justifyContent: "space-between",
  width: "100%",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export default {
  AppBarImage,
  ToolbarContainer,
  RightContents,
};
