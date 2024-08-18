import React, { useState } from 'react';
import ProductLists from './productlist/ProductLists';
import AddProducts from './addproduct/AddProducts';
import UpdateProducts from './updateproduct/UpdateProducts';


const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setCurrentProduct(null);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <AddProducts onAdd={handleAddProduct} />
      <ProductLists 
        products={products} 
        onDelete={handleDeleteProduct} 
        onEdit={handleEditProduct} 
      />
      {currentProduct && (
        <UpdateProducts 
          product={currentProduct} 
          onUpdate={handleUpdateProduct} 
        />
      )}
    </div>
  );
};

export default AdminPanel;