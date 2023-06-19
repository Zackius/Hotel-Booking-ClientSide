import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import { BannerContainer } from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerContent>
<Typography></Typography>
 </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
