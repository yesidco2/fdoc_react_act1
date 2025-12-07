"use client";
import React from 'react';

export default function SaludoConDefaultProps({ nombre = "Invitado" }) {
  return <h1>Hola, {nombre}</h1>;
}
