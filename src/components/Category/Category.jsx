import './Category.scss';
import './../../components/Products/Products.scss'
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';
import {  Button } from '../index'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

const Category = ({ header, categoryTitle }) => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const [sortOrder, setSortOrder] = useState('lower-higher');

  const maxLength = 25;
  const ellipsis = '....';


    // filtering the products based on categories
    const filterByProductCategory = products.filter((product) => {
      return product.category === categoryTitle;
    });

    // product count
    const totalProductCount = filterByProductCategory.length;

    //product sorting base on price
    const sortedProduct = filterByProductCategory.sort((a,b) => {
      if( sortOrder === 'lower-higher') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })

    const handleSortedProduct = () => {
      setSortOrder((prev) => (prev === 'lower-higher')? 'higher-lower' : 'lower-higher');
    }

  return (
    <div className='category-container'>
        <h2 className='category-header'>{ header }</h2>
        <p>Available products: ({totalProductCount})</p>
        <div className="category-wrapper">
          <aside className="category-left">
            <div className='left-inner'>
              <div>Filter product by price :</div>
              <div>
                <Button onClick={ handleSortedProduct } label={sortOrder} className='btn-primary'/>
              </div>
            </div>

          </aside>
          <div className="category-right">
               <div className='product-items'>
        { sortedProduct.map((product) => {
            const { id, title, image, price } = product;
            
            return (
              <div key={id} className='main-product'>
                  <Link to={`/product/${id}`}>
                <div className="product-top">
                    <div className='product-image'>
                      <img src={image} alt="" />
                    </div>
                </div>
                  </Link>
                <div className='product-bottom'>
                    <div className='product-title'>
                      { title.length <= maxLength?  title : title.substring(0, maxLength - ellipsis.length) + ellipsis  }
                    </div>
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