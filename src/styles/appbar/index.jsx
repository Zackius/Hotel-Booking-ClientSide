import {styled} from "@mui/material/styles";
import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Colors }from "../theme"
import "@fontsource/montez"




//container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex', 
    marginTop: 4,
    justifyContent: 'center', 
    alignItem: 'center',
    padding: '2px 8px',

       
}))
   
//header
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontFamily: `"Montez", "cursive"`,
    fontSize: "'20em",
    color: Colors.secondary
}))
export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 2,
    justifyContent: 'center',
    alignContent: 'center'

}))

export const ActionIconContainerMobile = styled(Box)(() => ({
    display: 'flex', 
    background: Colors.shaft,
    position: 'fixed', 
    bottom: 0,
    left: 0, 
    width: '100%',
    alignItems: 'center', 
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))
export const ActionIconContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
}))