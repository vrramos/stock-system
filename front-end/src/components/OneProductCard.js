import React from 'react';
import '../styles/card.css'

function OneProductCard({ data }) {

  return (
    <section className="card">
      <h2>{data.productName}</h2>
      <h3>{data.quantity} unidades</h3>
      <h3>R${data.unityPrice}</h3>
      <button className="card btn">Olá</button>
    </section>
  )
}

export default OneProductCard;
