import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { AppBar, Box, Container, IconButton, Menu, Toolbar, styled, Tooltip, Typography, InputBase, Badge, Avatar, MenuItem } from '@mui/material';
import { ColorizeOutlined, Mail, Notifications, Pets } from '@mui/icons-material';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  padding: "20px", 
  justifyContent: "space-between"
})
const Search = styled("div")(({ theme }) =>( {
  backgroundColor : "white",
    padding : "0 10px",
  borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) =>( {
  display: "none", gap: " 20px", alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }

 }))

const Navbar = () => {


  const [open, setOpen] = useState(false)

  return (
      <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="6" sx={{size: "20px"}}>Hotel Booking</Typography>
        <Search> <InputBase placeholder='Search .....'></InputBase>
        </Search>
        <Icons>
        <Badge badgeContent={4} color="error">
  <Mail/>
          </Badge>
          <Badge badgeContent={1} color="error">
  <Notifications/>
          </Badge>
          <Badge  color="error">
            <Avatar sx={{ width: "30", height: "30" }} src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80 '
            onClick ={e=>setOpen(true)}/>
          </Badge>
        </Icons>

        <UserBox onClick ={e=>setOpen(true)}>
        <Badge  color="error">
  <Avatar sx={{width: "30" , height: "30"}} src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80 '/>
          </Badge>
          <Typography>
            Zack
  </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
          onClose= {e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right' ,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

    </AppBar>
  );
}

export default Navbar