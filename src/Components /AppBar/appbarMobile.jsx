import { IconButton } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from './actions'

const AppbarMobile = ({matches}) => {

  return (
    <AppbarContainer>
      <IconButton>
        <MenuIcon/>
      </IconButton>
      <AppbarHeader textAlign={"center"} variant='h4'>
        Hotel Booking
      </AppbarHeader>
      <IconButton>
        <SearchIcon/>
      </IconButton>
      <Actions matches={matches}/>
    </AppbarContainer>
  )
}

export default AppbarMobile