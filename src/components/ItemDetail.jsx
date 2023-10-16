import React from 'react';
import { useCart } from './CartContext'; 

export const ItemDetail = ({ car, description }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(car); 
  };

  return (
    <div>
      <div>{car.car_factory}</div>
      <div>{car.car_model}</div>
      <div>{car.car_year}</div>
      <div>{car.category}</div>
      <img src={car.img} alt={car.car_model} />
      <div>{description}</div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};
