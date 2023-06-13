import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const appbarMobile = () => {
    const theme = useTheme()
    const matches =useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div>appbarMobile</div>
  )
}

export default appbarMobile