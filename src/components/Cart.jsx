import React from 'react';
import { useCart } from './CartContext';

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.car_factory} {item.car_model} 
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
