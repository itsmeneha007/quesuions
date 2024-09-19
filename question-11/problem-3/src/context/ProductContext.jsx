import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      setError('Error fetching products');
    } finally {
      setLoading(false);
    }
  };

  // Fetch product details
  const fetchProductDetails = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      setError('Error fetching product details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedProduct, fetchProductDetails, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;