import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleProduct, Wishlist, Cart, NotFoundPage, Electronics, Men, Women, Jewelery } from './pages/index';
import { Header, Footer } from './components/index';

const App = () => {
  return (
    <Router>
      <Header />
          <Routes>
              <Route path="/" element={<Home />} />
                  <Route path="/product/:productid" element={<SingleProduct />} />
                  <Route path="/wishlist" element={<Wishlist />}/>
                  <Route path="/cart" element={<Cart />} />

                  {/* category pages  */}
                  <Route path="/category/men" element={<Men/>} />
                  <Route path="/category/women" element={<Women />} />
                  <Route path="/category/jewelery" element={<Jewelery />} />
                  <Route path="/category/electronics" element={<Electronics />} />
                  
                  {/* page not found */}
                  <Route path="*" element={<NotFoundPage />} />
          </Routes>
      <Footer />
    </Router>
  )
}

export default App;