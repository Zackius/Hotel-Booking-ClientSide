import { createTheme } from "@mui/material/styles"

export const Colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
    light_gray: "rgb(230,230,230)",
    blue: "rgb(0, 43, 255"

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

