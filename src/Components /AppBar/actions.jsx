import { ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { MyList } from '../../styles/appbar'
import PersonIcon from "@mui/icons-material/Person"
import { ActionIconContainerDesktop, ActionIconContainerMobile } from "../../styles/appbar"

const Actions = ({matches}) => {
    const Component = matches ?  ActionIconContainerMobile : ActionIconContainerDesktop;
    return (
      
        <Component>
  <MyList type="row">
          <ListItemButton sx={{justifyContent: 'center'}}>
              <ListItemIcon sx={{display: "flex" , justifyContent: 'center '}}>
                  <PersonIcon/>
              </ListItemIcon>
          </ListItemButton>
  </MyList>
        </Component>
    
  )
}

export default Actions