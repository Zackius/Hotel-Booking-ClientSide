import {Container } from '@mui/system'
import { ThemeProvider } from '@mui/material/styles'
import Appbar from "./Components /AppBar"
import theme from "./styles/theme"
import Banner from './Components /banner'
import Promotions from './Components /promotions'
import Products from './Components /products'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Products/>
      {/* <Navbar />
      <Hero/>
      <Main/> */}
      </Container>
    </ThemeProvider>
  )
}

export default App
