// src/App.jsx
import { useState, useEffect } from "react";
const API = "http://localhost:3000/musicas";
function App() {
  const [musicas, setMusicas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((dados) => setMusicas(dados));
  }, []);
  function salvar(e) {
    e.preventDefault();
    const corpo = { titulo, artista };
    if (editandoId) {
      // PATCH: atualiza a música existente
      fetch(`${API}/${editandoId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpo),
      })
        .then((res) => res.json())
        .then((atualizada) => {
          setMusicas(
            musicas.map((m) => (m.id === atualizada.id ? atualizada : m)),
          );
          cancelarEdicao();
        });
    } else {
      // POST: cria uma música nova
      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpo),
      })
        .then((res) => res.json())
        .then((nova) => {
          setMusicas([...musicas, nova]);
          setTitulo("");
          setArtista("");
        });
    }
  }
  function remover(id) {
    fetch(`${API}/${id}`, { method: "DELETE" }).then(() =>
      setMusicas(musicas.filter((m) => m.id !== id)),
    );
  }
  function editar(musica) {
    setEditandoId(musica.id);
    setTitulo(musica.titulo);
    setArtista(musica.artista);
  }
  function cancelarEdicao() {
    setEditandoId(null);
    setTitulo("");
    setArtista("");
  }
  return (
    <div>
      <h1>Minha Playlist</h1>
      <form onSubmit={salvar}>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
        />
        <input
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          placeholder="Artista"
        />
        <button type="submit">
          {editandoId ? "Salvar edição" : "Adicionar"}
        </button>
        {editandoId && (
          <button type="button" onClick={cancelarEdicao}>
            Cancelar
          </button>
        )}
      </form>
      <ul>
        {musicas.map((m) => (
          <li key={m.id}>
            {m.titulo} — <strong>{m.artista}</strong>
            <button onClick={() => editar(m)}>Editar</button>
            <button onClick={() => remover(m.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
