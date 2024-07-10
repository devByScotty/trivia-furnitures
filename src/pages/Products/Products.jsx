import React ,{ useState } from 'react'
import ProductBanner from '../../components/ProductBanner/ProductBanner'
import Cart from '../../components/Cart/Cart'
import Navbar from '../../components/Navbar/Navbar'

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div>
      <Navbar />
      <ProductBanner addToCart={addToCart} toggleCart={toggleCart} />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        toggleCart={toggleCart}
        cartOpen={cartOpen}
        total={calculateTotal()}
      />
    </div>
  )
}

export default Products;
