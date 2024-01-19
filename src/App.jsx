import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, SingleProduct, Wishlist, Category, Cart } from './pages/index';
import { Header, Footer } from './components/index';
// import { Men, Women } from "./pages/Categories";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productid" element={<SingleProduct />} />
        <Route path="/wishlist" element={<Wishlist /> } />
        <Route path="/category" element={<Category />} >
              {/* <Route path="men" element={<Men />} />
              <Route path="women" element={<Women />} /> */}
              {/* <Route path="electronics" element={<Electronic />} /> */}
          </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;