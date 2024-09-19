import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const page = searchParams.get('page') || 1;
      const limit = searchParams.get('limit') || 10;
      const category = searchParams.get('category') || '';
      const sort = searchParams.get('sort') || '';
      const order = searchParams.get('order') || '';

      try {
        const response = await axios.get(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`, {
            params: { page, limit, sort, order, filter: category }
          }
        );
        setProducts(response.data.data);
      } catch (err) {
        setError('Error fetching products');
      }
      setLoading(false);
    };

    fetchProducts();
  }, [searchParams]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div>
        <button onClick={() => setSearchParams({ page: 1, limit: 10, category: 'men' })}>Men's Products</button>
        <button onClick={() => setSearchParams({ page: 1, limit: 10, category: 'women' })}>Women's Products</button>
        <button onClick={() => setSearchParams({ page: 1, limit: 10, sort: 'price', order: 'asc' })}>Sort by Price: Low to High</button>
        <button onClick={() => setSearchParams({ page: 1, limit: 10, sort: 'price', order: 'desc' })}>Sort by Price: High to Low</button>
      </div>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;