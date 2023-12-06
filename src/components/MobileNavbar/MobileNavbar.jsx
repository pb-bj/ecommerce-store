import './MobileNavbar.scss';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  return (
    <div className='mobile-navbar'>
        <div><Link to="/" style={{ color : '#FFF'}}>OUTLETS</Link></div>
        <div className='shop-items'>
            <Link to="/" style={{ color : '#FFF'}}>SHOP</Link>
               {/* sub links */}
              <div className='inner-shop-items'>
                <div><Link to="/category"  style={{ color : '#FFF'}}>Men Clothing</Link></div>
                <div><Link to="/category"  style={{ color : '#FFF'}}>Women Clothing</Link></div>
              </div>
          </div>
        <div><Link to="/wishlist" style={{ color : '#FFF'}}>WISHLIST</Link></div>
        <div><Link to="/" style={{ color : '#FFF'}}>LOGIN / REGISTER</Link></div>
    </div>
  )
}

export default MobileNavbar