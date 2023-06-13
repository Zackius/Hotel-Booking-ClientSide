import { Box, CssBaseline, Container, Typography } from '@mui/material'
import React from 'react'
import Hotels from './Hotels'

const Main = () => {
  return (
    <React.Fragment>
    <CssBaseline />
      <Container sx={{ bgcolor: '#cfe8fc', height: 'auto', padding: "20px" }}>
      <Typography sx={{textAlign: "center"}} >
            Top Rated Hotels  in your Areas
</Typography>
        <Box >
          <Hotels/>
      </Box>
    </Container>
  </React.Fragment>
  )
}

export default Main