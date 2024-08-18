import React, { useState, useEffect } from 'react';
import './UpdateProduct.css'


const UpdateProducts = ({ product, onUpdate }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name, price });
  };

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
  }, [product]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateProducts;