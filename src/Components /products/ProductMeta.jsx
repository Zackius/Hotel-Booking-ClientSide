import React from 'react'
import { ProductMetaWrapper } from '../../styles/product'
import { Typography } from '@mui/material'

const ProductMeta = ({products, matches}) => {
  return (
      <ProductMetaWrapper>
          <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
              {products.name}
          </Typography>
          <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
              {products.type}
          </Typography>
          <Typography variant={matches ? 'h6' : 'h5'} lineHeight={2}>
              {products.city}
          </Typography>
   </ProductMetaWrapper>
  )
}

export default ProductMeta