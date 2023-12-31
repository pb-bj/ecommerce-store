import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleProduct, Wishlist, Category, Cart } from './pages/index';
import { Header, Footer } from './components/index';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;