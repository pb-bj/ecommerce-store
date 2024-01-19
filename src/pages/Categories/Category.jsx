import React, { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext';

const Category = () => {
  const { products } = useContext(ProductsContext);
    // const categoryFilteredProduct = products.map((item) => {
      
    // })
  return (
    <div>Category</div>
  )
}

export default Category