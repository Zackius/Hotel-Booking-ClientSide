import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const appbarDesktop= ()=>{
const theme = useTheme()
const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
      <div>{matches ? <h1>Mobile</h1>  : <h1>Desktop</h1>}</div>
  )
}

export default appbarDesktop