import { Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'


const Products = () => {
    
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
  return (
      <Container>
          <Grid >
    
          </Grid>
      </Container>
  )
}

export default Products