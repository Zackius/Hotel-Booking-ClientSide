import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import accra from "./"
import React from "react";
import { BannerContainer , BannerContent, BannerDescription, BannerImge, BannerTittle} from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImge src="/images/accra.jpg"/>
      <BannerContent>
        <Typography>Bnanner</Typography>
        <BannerTittle variant= "h2">
          Hotels
        </BannerTittle>
        <BannerDescription variant="subtitle">
          lorem ipdsum dollar sit amet cosnsecutre adisping eliting do eiusmo tempor incidentfjdj lasd 
        </BannerDescription>
 </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
