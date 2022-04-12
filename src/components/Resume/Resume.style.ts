import { Avatar, Badge, styled } from "@mui/material";

const ContainerResume = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyDontent: "flex-start",
  alignItems: "center",
  padding: "40px 10px 0",
});

const Description = styled("div")({
  padding: "20px 10px",
  marginTop: "20px",
  overflow: "auto",
  borderTop: "1px solid #e6ebef",
});

const ResumeAvatar = styled(Avatar)({
  backgroundColor: "#ec6f2293",
  width: "70px",
  height: "70px",
  fontSize: "28px",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

export default {
  ContainerResume,
  Description,
  ResumeAvatar,
  StyledBadge,
};
