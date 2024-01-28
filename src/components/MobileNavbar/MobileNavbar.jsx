import './MobileNavbar.scss';
import { Link } from 'react-router-dom';
import { mobileNavData } from '../../data/mobileNavData';
import { useContext, useState } from 'react';
import { WishListContext } from '../../contexts/WishListContext';

const MobileNavbar = ({setMenuOpen }) => {
  const [  shopMenu, setShopMenu ] = useState(false);
  const { wishList } = useContext(WishListContext);
  return (
    <div className='mobile-navbar'>
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
        <div><Link to="/wishlist" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false) }>WISHLIST ({wishList.length})</Link></div>
    </div>
  )
}

export default MobileNavbar