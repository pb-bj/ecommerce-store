import './MobileNavbar.scss';
import { Link } from 'react-router-dom';
import { mobileNavData } from '../../data/index';

const MobileNavbar = ({setMenuOpen }) => {
  return (
    <div className='mobile-navbar'>
        <div><Link to="/" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false)}>OUTLETS</Link></div>
        <div className='shop-items'>
            <Link to="/" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false)}>SHOP</Link>
               {/* sub links */}
              <div className='inner-shop-items'>
                { mobileNavData.map((data, index) => (
                  <div key={index}>
                      <Link to={data.path}  style={{ color : '#FFF'}} onClick={() => setMenuOpen(false)}>
                        {data.title}
                      </Link></div>
                ))}
              </div>
          </div>
        <div><Link to="/wishlist" style={{ color : '#FFF'}} onClick={() => setMenuOpen(false) }>WISHLIST</Link></div>
        <div><Link to="/" style={{ color : '#FFF'} } onClick={() => setMenuOpen(false) }>LOGIN / REGISTER</Link></div>
    </div>
  )
}

export default MobileNavbar