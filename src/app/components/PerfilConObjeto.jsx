"use client";
import React from 'react';

export default function PerfilConObjeto({ usuario }) {
  const hobbies = usuario?.hobbies?.length
    ? usuario.hobbies.join(", ")
    : "Sin hobbies";

  return (
    <div>
      <h2>{usuario?.nombre}</h2>
      <p>{hobbies}</p>
    </div>
  );
}
