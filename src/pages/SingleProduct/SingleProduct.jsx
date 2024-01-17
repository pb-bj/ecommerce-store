import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../contexts/ProductsContext';
import './SingleProduct.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'
import Button from '../../components/Button/Button';

const SingleProduct = () => {
  const { productid } = useParams();
  const { products} = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  
  const filteredProduct = products.find((item) => {
    if( item.id === parseInt(productid)) {
      return item;
    } 
  });
  

  const { title, price, image, description, rating : { count, rate} } = filteredProduct;
  return (
    <div style={{ marginTop : '100px'}}>
      <div className="product-container">
        <div className="product-content-left">
          <img src={image} alt="" />
        </div>
        <div className="product-content-right">
          <div className="product-title">{title}</div>
          <div className="details">
            <div className='product-wrapper'>
              <span className="product-price">${price}</span>
              <div className="product-reviews">
                  <span className="rate">{rate}</span>
                  <span className="count">{count}</span>
            </div>

            </div>
            <div>
              <Button 
                  label="Add to cart" 
                  className="btn-primary"
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