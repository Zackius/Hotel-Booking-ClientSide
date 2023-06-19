import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100px",
  padding: "opx opx",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const BannerContent = styled(Box)(() => ({
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center', 
    maxWidth: 420,
    padding: '30px'
}))

export const BannerTittle = styled(Typography)(() = ({
    lineHeight: 1.5,
    fontSize: '72px', 
    marginBottom: '20px'
}))
