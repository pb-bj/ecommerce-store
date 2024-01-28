import './SingleProduct.scss';
import { IoBookmarkOutline } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";

import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { WishListContext } from '../../contexts/WishListContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';

import Button from '../../components/Button/Button';

const SingleProduct = () => {
  const { productid } = useParams();
  const { products} = useContext(ProductsContext);
  const { addToCart, cart} = useContext(CartContext);

  const filteredProduct = products.find((item) => item.id === parseInt(productid) );

  // for cart quantity
  // const cartItem = cart?.find((item) => item?.id === filteredProduct?.id);
  // const cartQuantity = cartItem?.quantity || 0
  //   console.log('quantity :', cartQuantity)

  const {id, category, title, price, image, description, rating : { count, rate} } = filteredProduct ?? { rating : {} }; // optional chaining for the case of undefined
  // console.log(filteredProduct)
  return ( 
    <div style={{ marginTop : '100px'}}>
      <div className="product-container">
        <div className="product-content-left">
          <img src={image} alt="" />
        </div>
        <div className="product-content-right">
          <span className="product-category">Category: {category}</span>
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
            <div style={{ margin: '10px 0px'}}>
              <Button
                  label="Add to cart" 
                  className="btn-primary"
                  style={{ cursor: 'pointer'}}
                  onClick={() => { 
                    addToCart(id, filteredProduct)
                  }}
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