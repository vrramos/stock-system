import React from 'react';
import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';
import OneProductCard from '../components/OneProductCard';
import '../styles/listProduct.css';
import UpdateProduct from '../components/UpdateProduct';

function OneProduct({ match: { params: { id } } }) {
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3001/product/${id}`
  )

  if (loading) return <h2>Loading</h2>
  if (error) return <p>Error</p>;

  return (
    <section>
      <Link to="/">
        <button>Início</button>
      </Link>
      <section className="Products">
        <button onClick={refetch}>Atualizar</button>
        <div className="list-product">
          <OneProductCard data={data} />
        </div>
      </section>
      <UpdateProduct data={data} id={id}/>
    </section>
  )
}

export default OneProduct;
