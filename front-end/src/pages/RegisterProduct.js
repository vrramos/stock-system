import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/buttons.css';

function registerForms(id, label, type, value, set) {
  return (
    <section>
      <label htmlFor={`${id}`}>{`${label}`}</label>
      <input id={`${id}`} type={type} value={`${value}`} onChange={(event) => set(event.target.value)} />
    </section>
  )
}

function Register(productName, quantity, unityPrice) {
  axios.post(`http://localhost:3001/product`, { productName, quantity, unityPrice }).then(response => {
    console.log(response);
  })
  window.location.reload();
}

function RegisterProduct() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unityPrice, setUnityPrice] = useState(0);

  return (
    <section>
      <div className="container space-between">
        <Link to="/">
          <button className="button">Início</button>
        </Link>
      </div>
      <section>
        {registerForms('name', 'Nome do Produto: ', 'text', productName, setProductName)}
        {registerForms('quantity', 'Quantidade: ', 'number', quantity, setQuantity)}
        {registerForms('unityPrice', 'Preço: ', 'number', unityPrice, setUnityPrice)}
        <button className="button" type="button" onClick={() => Register(productName, quantity, unityPrice)}>Cadastrar</button>
      </section>
    </section>
  )
}

export default RegisterProduct;
