"use client";
import React from 'react';

export default function ContenedorRenderProp({ contenido, render }) {
  return <div>{contenido || (render && render())}</div>;
}
