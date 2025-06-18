import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [userId] = useState('user123'); // In a real app, get from auth

  // Fetch cart from MongoDB on load
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
        const data = await response.json();
        setCart(data);
        setCartCount(data.reduce((total, item) => total + item.quantity, 0));
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    
    fetchCart();
  }, [userId]);

  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }),
      });
      
      const newItem = await response.json();
      
      setCart(prevCart => {
        const existing = prevCart.find(item => item._id === newItem._id);
        return existing 
          ? prevCart.map(item => 
              item._id === newItem._id ? newItem : item
            )
          : [...prevCart, newItem];
      });
      
      setCartCount(prev => prev + 1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);