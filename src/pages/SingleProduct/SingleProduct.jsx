import './SingleProduct.scss';
import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';

import { LiaStarSolid } from "react-icons/lia";
import Button from '../../components/Button/Button';

const SingleProduct = () => {
  const { productid } = useParams();
  const { products} = useContext(ProductsContext);
  const { addToCart,  incrementCart, decreaseCart  } = useContext(CartContext);
  console.log(products)

  const filteredProduct = products.find((item) => item.id === parseInt(productid) );

  const { title, price, image, description, rating : { count, rate} } = filteredProduct;
  console.log(filteredProduct)
  return ( 
    <div style={{ marginTop : '100px'}}>
      <div className="product-container">
        <div className="product-content-left">
          <img src={image} alt="" />
        </div>
        <div className="product-content-right">
          <span className="product-category">Category: {filteredProduct.category}</span>
          <div className="product-title">{title}</div>
          <div className="details">
            <div className='product-wrapper'>
              <span className="product-price">${price}</span>
              <div className="product-reviews">
                  <span className="rate"> 
                  ({rate})

                  <LiaStarSolid style={{ color: '#FFA732'}} />
                   <LiaStarSolid style={{ color: '#FFA732'}} />
                    <LiaStarSolid style={{ color: '#FFA732'}} />
                     <LiaStarSolid style={{ color: '#FFA732'}} />
                </span>
                  <span className="count">{count} ratings</span>
            </div>

            </div>
            <div>
              <span onClick={() => decreaseCart(filteredProduct.id)}>-</span>
              {/* <span>{ cartquantity}</span> */}
              <span onClick={() => incrementCart(filteredProduct.id)}>+</span>
            </div>
            <div style={{ margin: '10px 0px'}}>
              <Button
                  label="Add to cart" 
                  className="btn-primary"
                  style={{ cursor: 'pointer'}}
                  onClick={() => addToCart(filteredProduct.id, filteredProduct)}
              />
            </div>
              <div className="product-description">
                <p>{description}</p>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleProduct