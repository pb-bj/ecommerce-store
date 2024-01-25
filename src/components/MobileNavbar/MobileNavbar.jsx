import './MobileNavbar.scss';
import { Link } from 'react-router-dom';
import { mobileNavData } from '../../data/mobileNavData';
import { useState } from 'react';

const MobileNavbar = ({setMenuOpen }) => {
  const [  shopMenu, setShopMenu ] = useState(false);
  return (
    <div className='mobile-navbar'>
        <div><Link to="/" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false)}>OUTLETS</Link></div>
        <div className='shop-items' onClick={() => setShopMenu(!shopMenu)}>
            <Link 
                to="/" 
                style={{ color : '#FFF'}} 
            >
                  SHOP
            </Link>
               {/* sub links */}
               { shopMenu && (
              <div className='inner-shop-items'>
                { mobileNavData.map((data, index) => (
                  <div key={index}>
                      <Link to={data.path}  style={{ color : '#FFF'}} onClick={() => setMenuOpen(false)}>
                        {data.title}
                      </Link>
                  </div>
                ))}
              </div>
               )}
          </div>
        <div><Link to="/wishlist" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false) }>WISHLIST</Link></div>
        <div><Link to="/" style={{ color : '#FFF'} } onClick={() => setMenuOpen(false) }>LOGIN / REGISTER</Link></div>
    </div>
  )
}

export default MobileNavbar