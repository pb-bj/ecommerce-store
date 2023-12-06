import './Wishlist.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { FaRegHeart } from "react-icons/fa6";


const Wishlist = () => {
  return (
    <div className='wishlist-container'>
      <div className="top-wishlist">
        <h1 style={{ fontSize : '45px', paddingTop: '35px'}}>Wishlist</h1>
        <span style={{ padding: '25px 0 15px 0'}}>
          <Link to="/" style={{ color: '#FFF'}}>HOME</Link> / WISHLIST
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
        <Button label="RETURN TO SHOP" className='btn-primary' />
      </div>
      
    </div>
  )
}

export default Wishlist