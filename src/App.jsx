import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleProduct, Wishlist, Cart, NotFoundPage } from './pages/index';
import { Header, Footer } from './components/index';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productid" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;