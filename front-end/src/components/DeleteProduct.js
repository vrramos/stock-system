import React from 'react';
import axios from 'axios';
import '../styles/card.css';

function Delete(id) {
  axios.delete(`http://localhost:3001/product/${id}`).then(response => {
    console.log(response)
  })
  window.location.reload();
}

function DeleteProduct({ id }) {
  return (
    <div>
      <button className="btn" type="button" onClick={() => Delete(id)}>Excluir</button>
    </div>
  )
}

export default DeleteProduct;
