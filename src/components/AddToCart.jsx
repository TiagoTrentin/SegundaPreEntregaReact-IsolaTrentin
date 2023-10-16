import React from 'react';
import { useCart } from './CartContext';

export const ItemDetail = ({ car, description }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(car);
  };

  return (
    <div>
      <h2>{car.car_factory} {car.car_model}</h2>
      <p>{description}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};
