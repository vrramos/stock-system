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

function Update(name, quantity, unityPrice) {
  axios.put(`http://localhost:3001/product/1`, { productName: name, quantity, unityPrice }).then(response => {
    console.log(response)
  })
}

function UpdateProduct({ data }) {
  const [name, setName] = useState(data.productName);
  const [quantity, setQuantity] = useState(data.quantity);
  const [unityPrice, setUnityPrice] = useState(data.unityPrice);

  return (
    <div>
      {formsUpdate('name', 'Nome do Produto: ', 'text', name, setName)};
      {formsUpdate('quantity', 'Quantidade: ', 'number', quantity, setQuantity)};
      {formsUpdate('unityPrice', 'Preço: ', 'number', unityPrice, setUnityPrice)};
      <button type="button" onClick={() => Update(name, quantity, unityPrice)}>Enviar</button>
    </div>
  )
}

export default UpdateProduct;
