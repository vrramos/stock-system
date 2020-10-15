import React from 'react';

function ProductCard({ index, data}) {
  const { productName, quantity, unityPrice } = data[index];
  
  return (
    <section>
      <h2>{productName}</h2>
      <h3>{quantity} unidades</h3>
      <h3>R${unityPrice}</h3>
    </section>
  )
}

export default ProductCard;
