import React from 'react';
import useAxios from 'axios-hooks';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import '../styles/listProduct.css';

function Teste() {
  const [{ data, loading, error }, refetch] = useAxios(
   'http://localhost:3001/products'
  )
  
  if (loading) return <h2>Loading</h2>
  if (error) return <p>Error</p>;
  
  return (
    <section className="Products">
      <button onClick={refetch}>Atualizar</button>
      <Link to="/product"><button>Incluir</button></Link>
      <div className="list-product">
        <ul>{data.map((products, index) => <ProductCard key={products.id} index={index} data={data} />)}</ul>
      </div>
    </section>
  )
}

export default Teste;
