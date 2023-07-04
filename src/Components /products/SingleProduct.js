import React from 'react'
import { Product, ProductImage } from '../../styles/product'

const SingleProduct = ({products, matches}) => {
  return (
      <Product>
          <ProductImage src={products.image}/>
</Product>
  )
}

export default SingleProduct