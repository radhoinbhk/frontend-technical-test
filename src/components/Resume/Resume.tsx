import { useEffect, useState } from "react";
import { Box, Rating, Typography } from "@mui/material";
import { selectedConversation } from "redux/conversation/conversationSlice";
import { useAppSelector } from "redux/hooks";
import StarIcon from "@mui/icons-material/Star";
import Style from "./Resume.style";

const Resume = () => {
  const selectedConv = useAppSelector(selectedConversation);
  const [senderNickname, setSenderNickname] = useState("");

  useEffect(() => {
    if (selectedConv.senderNickname) {
      setSenderNickname(selectedConv.senderNickname);
    }
  }, [selectedConv.senderNickname]);

  return (
    <Style.ContainerResume>
      <Style.StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Style.ResumeAvatar alt={senderNickname}>
          {senderNickname[0]}
        </Style.ResumeAvatar>
      </Style.StyledBadge>
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
      <Style.Description>
        <Typography variant="h6" color="text.primary">
          Description
        </Typography>
        <p>Bonjour,</p>
        <p>
          Je vends cette console Nintendo Wii. Tout fonctionne parfaitement
          bien.
        </p>
        <p>Ce lot est compos…</p>
      </Style.Description>
    </Style.ContainerResume>
  );
};

export default Resume;
