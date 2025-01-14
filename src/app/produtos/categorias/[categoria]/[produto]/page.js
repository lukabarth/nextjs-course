import React from 'react';

function ProductPage(params) {
  const produto = params.produto;

  return (
    <div>
      <h1>Vendo produto {produto}</h1>
    </div>
  );
};

export default ProductPage;