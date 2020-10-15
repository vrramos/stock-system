import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.css'

function ProductCard({ index, data }) {
  const { id, productName, quantity, unityPrice } = data[index];

  return (
    <section className="card">
      <h2>{productName}</h2>
      <h3>{quantity} unidades</h3>
      <h3>R${unityPrice}</h3>
      <Link to={`/product/${id}`}><button className="card btn">Editar</button></Link>
      <button className="card btn">Excluir</button>
    </section>
  )
}

export default ProductCard;
