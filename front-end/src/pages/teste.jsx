import React, { Component } from 'react';
import useAxios from 'axios-hooks';

function Teste() {
  const [{ data, loading, error }, refetch] = useAxios(
   'http://localhost:3001/products'
  )
  
  if (loading) return <h2>Loading</h2>
  if (error) return <p>Error</p>;
  
  return (
    <div>
      <button onClick={refetch}>Atualizar</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Teste;
