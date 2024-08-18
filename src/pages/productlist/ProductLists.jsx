import React from 'react';
import './ProductList.css';

const ProductLists = ({ products, onDelete, onEdit }) => (
  <div>
    <h2>Product List</h2>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => onEdit(product)}>Edit</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductLists;