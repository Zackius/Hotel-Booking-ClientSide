import {Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'
import { products } from "../../data"
import SingleProduct from './SingleProduct'


const Products = () => {
    
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const renderProducts = products.map(product => (
        <Grid item key={product.id} xs={2 } sm={2} md={4} display= "flex" flexDirection="columns" alignItems="center" >
            <SingleProduct products={product} matches={matches}/>
        </Grid>
    ) )
  return (
      <Container      container spacing={2}>
              {renderProducts}
      </Container>
  )
}

export default Products