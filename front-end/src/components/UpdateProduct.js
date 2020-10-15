import React, { useState } from 'react';
import axios from 'axios';

function formsUpdate(id, label, type, value, set) {
  return (
    <section>
      <label htmlFor={`${id}`}>{`${label}`}</label>
      <input id={`${id}`} type={type} value={`${value}`} onChange={(event) => set(event.target.value)} />
    </section>
  )
}

function Update(productName, quantity, unityPrice, id) {
  axios.put(`http://localhost:3001/product/${id}`, { productName, quantity, unityPrice }).then(response => {
    console.log(response)
  })
  window.location.reload();
}

function UpdateProduct({ data }) {
  const [productName, setProductName] = useState(data.productName);
  const [quantity, setQuantity] = useState(data.quantity);
  const [unityPrice, setUnityPrice] = useState(data.unityPrice);

  return (
    <div>
      {formsUpdate('name', 'Nome do Produto: ', 'text', productName, setProductName)};
      {formsUpdate('quantity', 'Quantidade: ', 'number', quantity, setQuantity)};
      {formsUpdate('unityPrice', 'Preço: ', 'number', unityPrice, setUnityPrice)};
      <button type="button" onClick={() => Update(productName, quantity, unityPrice, data.id)}>Enviar</button>
    </div>
  )
}

export default UpdateProduct;
