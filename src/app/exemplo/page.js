"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

function ExemploPage() {
  const searchParams = useSearchParams();

  const valorParam = searchParams.get("parametro");

  const presencaParam = searchParams.has("parametro");

  return (
    <div>
      <h1>Exibindo resultados para: {valorParam}</h1>
      {presencaParam ? "Tem parametro" : "Não tem parametro"}
    </div>
  );
};

export default ExemploPage;