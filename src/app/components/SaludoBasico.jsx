"use client";
import React from 'react';

export default function SaludoBasico({ nombre, entusiasta }) {
  return (
    <div>
      <p>Hola, {nombre}{entusiasta ? "! 🎉" : ""}</p>
    </div>
  );
}