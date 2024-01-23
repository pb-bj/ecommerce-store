import './Category.scss';
import './../../components/Products/Products.scss'
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';
import {  Button } from '../index'
import { Link } from 'react-router-dom';

import { useContext } from 'react';

const Category = ({ header, categoryTitle }) => {
  const { products } = useContext(ProductsContext);
  // console.log( products)
    const maxLength = 25;
    const ellipsis = '....';
  
  const { addToCart } = useContext(CartContext);

    // filtering the products based on categories
    const filterByProductCategory = products.filter((product) => {
      return product.category === categoryTitle;
    });

    console.log(filterByProductCategory);

  return (
    <div className='category-container'>
        <h2 className='category-header'>{ header }</h2>
        <div className="category-wrapper">
          <aside className="category-left">
              <p>filter Options</p>
          </aside>
          <div className="category-right">
               <div className='product-items'>
        { filterByProductCategory.map((product) => {
            const { id, title, image, price } = product;
            
            return (
              <div key={id} className='main-product'>
                <div className="product-top">
                    <div className='product-image'>
                      <img src={image} alt="" />
                    </div>
                </div>
                <div className='product-bottom'>
                  <Link to={`/product/${id}`}>
                    <div className='product-title'>
                      { title.length <= maxLength?  title : title.substring(0, maxLength - ellipsis.length) + ellipsis  }
                    </div>
                  </Link>
                  <div className='bottom-product-content'>
                    <div className='product-priceTag'>$ {price}</div>
                    <div className='product-btn' title='add to cart'>
                      <Button 
                        label="+" 
                        className="btn-primary" 
                        type='button'
                        onClick={ () => addToCart(id, product) } 
                      /> 
                    </div>
                  </div>
                </div>
                </div>
            )
        })}
    </div>
          </div>
        </div>
    </div>
    )
}

export default Category;