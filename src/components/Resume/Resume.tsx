import { Avatar, Badge, Box, Rating, Typography } from "@mui/material";
import { selectedConversation } from "redux/conversation/conversationSlice";
import { useAppSelector } from "redux/hooks";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import styles from "styles/Resume.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const Resume = () => {
  const selectedConv = useAppSelector(selectedConversation);
  const [senderNickname, setSenderNickname] = useState("");

  useEffect(() => {
    if (selectedConv.senderNickname) {
      setSenderNickname(selectedConv.senderNickname);
    }
  }, [selectedConv.senderNickname]);

  return (
    <div className={styles.containerResume}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar className={styles.avatar} alt={senderNickname}>
          {senderNickname[0]}
        </Avatar>
      </StyledBadge>
      <Typography variant="h5" color="text.primary">
        {senderNickname}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={3.5}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>338 avis</Box>
      </Box>
      <div className={styles.description}>
        <Typography variant="h6" color="text.primary">
          Description
        </Typography>
        <p>Bonjour,</p>
        <p>
          Je vends cette console Nintendo Wii. Tout fonctionne parfaitement
          bien.
        </p>
        <p>Ce lot est compos…</p>
      </div>
    </div>
  );
};

export default Resume;
