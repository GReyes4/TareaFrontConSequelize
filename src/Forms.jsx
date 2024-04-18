// Forms.jsx

import React, { useState } from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3001/api/notes';

const Forms = () => {
  // Estado para manejar el valor del nuevo mensaje
  const [newNote, setNewNote] = useState("");

  // Actualizar el estado del nuevo mensaje mientras el usuario escribe
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  // Enviar el nuevo mensaje al servidor
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };

    // Agregar una nueva nota
    axios.post(baseUrl, noteObject).then((response) => {
      setNewNote(""); // Reiniciar campo de entrada después de agregar la nota
    });
  };

  return (
    <form onSubmit={addNote} style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        value={newNote}
        onChange={handleNoteChange}
        style={{ padding: "8px", marginRight: "8px" }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </form>
  );
};

export default Forms;

