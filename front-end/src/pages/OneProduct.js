import React from 'react';
import useAxios from 'axios-hooks';
import { Link } from 'react-router-dom';

import OneProductCard from '../components/OneProductCard';
import UpdateProduct from '../components/UpdateProduct';

import '../styles/buttons.css';

function OneProduct({ match: { params: { id } } }) {
  const [{ data, loading, error }, refetch] = useAxios(
    `http://localhost:3001/product/${id}`
  )

  if (loading) return <h2>Loading</h2>
  if (error) return <p>Error</p>;

  return (
    <section>
      <div className="container space-between">
        <Link to="/">
          <button className="button">Início</button>
        </Link>
        <button className="button" onClick={refetch}>Atualizar</button>
      </div>
      <section>
        <div>
          <OneProductCard data={data} />
        </div>
      </section>
      <UpdateProduct data={data} id={id} />
    </section>
  )
}

export default OneProduct;
