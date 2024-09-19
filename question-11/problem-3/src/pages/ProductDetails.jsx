import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const { selectedProduct, fetchProductDetails, loading, error } = useContext(ProductContext);

  useEffect(() => {
    fetchProductDetails(productId);
  }, [productId, fetchProductDetails]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return selectedProduct ? (
    <div>
      <h1>{selectedProduct.title}</h1>
      <p>Price: ${selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
      <img src={selectedProduct.image} alt={selectedProduct.title} width="200" />
    </div>
  ) : (
    <p>Product not found</p>
  );
};

export default ProductDetails;