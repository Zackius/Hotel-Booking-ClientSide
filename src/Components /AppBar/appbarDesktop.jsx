
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, MyList, ActionIconContainerDesktop, ActionIconContainerMobile } from '../../styles/appbar'
import SearchIcon from '@mui/icons-material/Search'
import Actions from './actions'

const AppbarDesktop = ({ matches }) => {
 


  return (
    <React.Fragment>
          <AppbarContainer>
      <AppbarHeader>
  Hotel Booking 
        </AppbarHeader>
        <MyList type='row'>
          <ListItemText primary="Home" />
          <ListItemText primary="Trending Hotels" />
          <ListItemText primary="Popular Destination" />
          <ListItemText primary="About " />
          <ListItemText primary="Contact Us" />
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon/>
            </ListItemIcon>
          </ListItemButton>
        </MyList>
        <Actions matches={matches } />
     </AppbarContainer>
</React.Fragment>
  )
}

export default AppbarDesktop