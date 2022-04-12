import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Mail as MailIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { LeboncoinLogo } from "assets/image";
import { useAppSelector } from "redux/hooks";
import { mobileMode } from "redux/application/applicationSlice";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "styles/AppBar.module.css";
import BasicDrawer from "components/Drawer";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobileMode = useAppSelector(mobileMode);
  const router = useRouter();

  useEffect(() => {
    if (!isMobileMode) {
      setOpenDrawer(false);
    }
  }, [isMobileMode]);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (bool: boolean) => {
    setOpenDrawer(bool);
  };

  return (
    <AppBar position="relative" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isMobileMode && (
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: isMobileMode ? "center" : "space-between",
            }}
          >
            <Link href={"/"} passHref>
              <a>
                <Image
                  alt="Leboncoin"
                  src={LeboncoinLogo}
                  className={styles.logo}
                  width="200"
                  height="50"
                />
              </a>
            </Link>
            {!isMobileMode && (
              <Box sx={{ flexGrow: 0 }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  style={{ marginRight: 15 }}
                  color="inherit"
                  onClick={() => {
                    router.push(`/messages`);
                  }}
                >
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: "#ff6e14" }} alt="Remy Sharp">
                      R
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </div>
        </Toolbar>
      </Container>
      <BasicDrawer openDrawer={openDrawer} setOpenDrawer={toggleDrawer} />
    </AppBar>
  );
};
export default ResponsiveAppBar;
