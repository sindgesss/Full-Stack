import React, { useState } from 'react';
import './AddProduct.css'
const AddProducts = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price });
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
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
        placeholder="Quantity"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddProducts;