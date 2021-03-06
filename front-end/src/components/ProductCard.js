import React from 'react';
import { Link } from 'react-router-dom';
import DeleteProduct from '../components/DeleteProduct';
import '../styles/card.css';

function ProductCard({ index, data }) {
  const { id, productName, quantity, unityPrice } = data[index];

  return (
    <section className="Products card">
      <h2>{productName}</h2>
      <h3>{quantity} unidades</h3>
      <h3>R${unityPrice}</h3>
      <Link to={`/product/${id}`}><button className="btn">Alterar</button></Link>
      <DeleteProduct id={id}/>
    </section>
  )
}

export default ProductCard;
