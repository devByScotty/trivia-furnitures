import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductBanner from './components/ProductBanner/ProductBanner';
import ProductFurniture from './components/ProductFurniture/ProductFurniture';
import Reviews from '../src/components/ProductReviews/ProductReviews';
import Faqs from './components/Faqs/Faqs';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router>
      <div className="App">
     

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
