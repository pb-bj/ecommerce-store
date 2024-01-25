import './Wishlist.scss';
import { Link, useNavigate} from 'react-router-dom';
import { Button } from '../../components';
import { FaRegHeart } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

import { useContext } from 'react';
import { WishListContext } from '../../contexts/WishListContext';
import { CartContext } from '../../contexts/CartContext';


const Wishlist = () => {
  const {  wishList, removeWishList } = useContext(WishListContext);
  const {addToCart } = useContext(CartContext);
  const navigate = useNavigate();


  // navigate through the home page
  const handleBackToShopPage = () => {
      navigate('/');
  }
  
  return (
    <section className='wishlist-container'>
    <div className='wishlist-main'>
    { wishList.length > 0? ( 
      <>
      { wishList.map(item => {
          const { id, title, image,description, price, rating} = item;
          return (
            <div className='wrapper'>
            <div className='left' key={id}>
              <div><img src={image} width={55} alt="" /></div>
              <div className='left-content'>
                <div className='title'>{title}</div>
                <div className='desc'>{description}</div>
                <div>Rating ({rating.rate})</div>
              </div>
            </div>
            <div className='right'>
              <div className='icon' onClick={() => removeWishList(id)}><IoMdClose /></div>
              <div>{price}</div>
              <div onClick={() => addToCart(id,product)}>
                <Button label="Add to cart" className="btn-primary" />
              </div>
            </div>
            </div>

          )
            
        })}
       </>
    ) : ( 
      <>
      <div className="top-wishlist">
        <h1 style={{ fontSize : '45px', paddingTop: '35px'}}>Wishlist</h1>
        <span style={{ padding: '25px 0 15px 0'}}>
          <Link to="/" style={{ color: '#000'}}>HOME</Link> / WISHLIST
        </span>
      </div>
      <div className="empty-wishlist">
        <div className='empty-wishlist-content'>
          <div className='wishlistIcon'>
          <FaRegHeart />
          </div>
          <div className='wislist-text'>
            <span style={{ fontSize : '30px', fontWeight : 'bold'}}>This wishlist is empty.</span><br/>
            <span style={{ fontSize : '15px', color: 'gray', fontWeight: 'normal'}}>You don't have any products in the wishlist yet.
                  You will find a lot of interesting products on our "Shop" page.
            </span>
            </div>
            </div>
        <Button 
          label="RETURN TO SHOP" 
          className='btn-primary'
          onClick={ handleBackToShopPage } 
        />
      </div>
      </>
      ) }
      </div>
  </section>
  )}

export default Wishlist