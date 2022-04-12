import { useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Image from "next/image";
import { LeboncoinLogo } from "assets/image";
import Style from "./Drawer.style";

const BasicDrawer = ({ openDrawer, setOpenDrawer }) => {
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer(open);
    };

  const goToPath = (path: string) => {
    router.push(path);
  };

  const list = () => (
    <Style.ListContainer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Style.LogoContainer>
        <Link href="/">
          <a>
            <Image
              alt="Leboncoin"
              src={LeboncoinLogo}
              width="200"
              height="50"
            />
          </a>
        </Link>
      </Style.LogoContainer>
      <List>
        <ListItem
          selected={router.pathname === "/"}
          button
          onClick={() => goToPath("/")}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          selected={router.pathname === "/messages"}
          button
          onClick={() => goToPath("/messages")}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
      </List>
    </Style.ListContainer>
  );

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
};
export default BasicDrawer;
