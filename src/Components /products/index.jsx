import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'
import { products } from "../../data"
import SingleProduct from './SingleProduct'


const Products = () => {
    
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const renderProducts = products.map(product => (
        <Box item key ={product.id} display= "flex" flexDirection="rows" >
            <SingleProduct products={product} matches={matches}/>
        </Box>
    ) )
  return (
      <Container      container spacing={2}>
              {renderProducts}
      </Container>
  )
}

export default Products