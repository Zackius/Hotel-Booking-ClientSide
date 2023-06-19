import {Container } from '@mui/system'
import { ThemeProvider } from '@mui/material/styles'
import Appbar from "./Components /AppBar"
import theme from "./styles/theme"
import Banner from './Components /banner'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner/>
      {/* <Navbar />
      <Hero/>
      <Main/> */}
      </Container>
    </ThemeProvider>
  )
}

export default App
