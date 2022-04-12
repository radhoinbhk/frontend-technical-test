import { useMediaQuery, useTheme } from "@mui/material";
import { FC, useEffect } from "react";
import { setMobileMode } from "redux/application/applicationSlice";
import { useAppDispatch } from "redux/hooks";

const Home: FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMobileMode(!matches));
  }, [matches]);

  return <div></div>;
};

export default Home;
