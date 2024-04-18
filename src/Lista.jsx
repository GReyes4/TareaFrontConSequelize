// Lista.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const baseUrl = 'http://localhost:3001/api/notes';

const Lista = () => {
  // Estado para manejar el contenido de las notas
  const [notes, setNotes] = useState([]);

  // Realizar una llamada a la API y cargar las notas cuando el componente se monta
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []); // Por el arreglo vacío, el efecto solo se ejecuta una vez, al montar el componente

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>Notes</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note) => (
          <Item key={note.id} content={note.content} />
        ))}
      </ul>
    </div>
  );
};

export default Lista;
