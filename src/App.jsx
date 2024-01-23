import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, SingleProduct, Wishlist, Cart, NotFoundPage, Electronics, Men, Women } from './pages/index';
import { Header, Footer, Login } from './components/index';
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productid" element={<SingleProduct />} />

          {/* Routing through to the wishlist page */}
          {isLoggedIn && <Route path="/wishlist" element={<Wishlist />} /> }
          <Route path="/login" element={() => !isLoggedIn? <Login/> : <Navigate to="/whislist" replace />} />

          {/* Cart route */}
          <Route path="/cart" element={<Cart />} />

          {/* category pages  */}
          <Route path="/category/men" element={<Men/>} />
          <Route path="/category/women" element={<Women />} />
          <Route path="/category/electronics" element={<Electronics />} />

          {/* page not found */}
          <Route path="*" element={<NotFoundPage />} />
          <Route>
          </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;