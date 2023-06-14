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
    padding: '2px 8px'
       
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
    flexGrow: 3,
    justifyContent: 'center',
    alignContent: 'center'

}))