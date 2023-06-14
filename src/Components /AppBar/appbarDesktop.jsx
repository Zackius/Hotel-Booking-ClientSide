
import { ListItemText } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'

const AppbarDesktop= ({matches})=>{

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
        </MyList>
     </AppbarContainer>
</React.Fragment>
  )
}

export default AppbarDesktop