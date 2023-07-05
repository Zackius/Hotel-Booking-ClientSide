import { Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'
import { products } from "../../data"
import SingleProduct from './SingleProduct'


const Products = () => {
    
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const renderProducts = products.map(product => (
        <Grid item key ={product.id} display= "flex" flexDirection= "column" alignItems="center">
            <SingleProduct products={product} matches={matches}/>
        </Grid>
    ) )
  return (
      <Container>
          <Grid
              container
              justifyContent={"center"}
              sx={{ margin: '20px 4px 10px 4px' }}>
              {renderProducts}
    
          </Grid>
      </Container>
  )
}

export default Products