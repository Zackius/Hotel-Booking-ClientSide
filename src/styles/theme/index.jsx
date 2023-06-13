import { createTheme } from "@mui/system"

export const Colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",

}

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    }
})
export default theme;

