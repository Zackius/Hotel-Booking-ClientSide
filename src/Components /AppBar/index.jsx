import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import AppbarMobile from './appbarMobile';
import AppbarDesktop from './appbarDesktop';
import React from 'react'

const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
      <>
          {matches ? <AppbarMobile/>  : <AppbarDesktop/>}
      </>
  )
}

export default Appbar