import {Container } from '@mui/system'
import Navbar from "./Components /Navbar"
import Main from "./Components /Main"
import Hero from "./Components /Hero"
import { ThemeProvider } from '@mui/material/styles'
import Appbar from "./Components /AppBar"
import theme from "./styles/theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar/>
      {/* <Navbar />
      <Hero/>
      <Main/> */}
      </Container>
    </ThemeProvider>
  )
}

export default App
