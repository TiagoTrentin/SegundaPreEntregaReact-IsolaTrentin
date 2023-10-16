import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
import { useCart } from './CartContext'; 

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then((result) => {
      setProduct(result[2]);
    });
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product === null ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <ItemDetail car={product} description={product.description} />
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
      )}
    </Container>
  );
};
