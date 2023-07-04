import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { BannerContainer , BannerContent, BannerDescription, BannerImge, BannerTittle} from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImge src="/images/accra.jpg"/>
      <BannerContent>
        <Typography>Hotel</Typography>
        <BannerTittle variant= "h2">
      Booking
        </BannerTittle>
        <BannerDescription variant="subtitle">
        Welcome to our premier hotel booking website, your gateway to finding the perfect accommodations for your travel needs. With our user-friendly interface and comprehensive search options, we make it easy for you to discover and book the ideal hotel that suits your preferences and budget.
        </BannerDescription>
 </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
