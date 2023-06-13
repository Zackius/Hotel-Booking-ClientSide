import styled from '@emotion/styled'
import { CssBaseline, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'


const StyledHero = styled(Container)({
    backgroundColor: "gray",
})
const Hero = () => {
  return (
      <React.Fragment>
                <CssBaseline />

          <Container maxWidth="xlg" sx={{m: '2', display: "flex", justifyContent: "center",  bgcolor: "gray"}}>
              <Box sx={{  display: "flex", textAlign: "center",  height: '70vh' }}>
                  <Box>
                      <Typography>
                          Welcome to Hotel Booking
                      </Typography>
                      <Typography>
                          The Best 
                      </Typography>
                  </Box>
                  <Box>
                    <img src=""/>
                  </Box>
        </Box>
      </Container>   
</React.Fragment>
  )
}

export default Hero