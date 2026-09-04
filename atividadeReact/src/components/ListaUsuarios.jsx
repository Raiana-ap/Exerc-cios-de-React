import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => setPessoas(dados));
  }, []);

  return (
    <div>
      <h2>Nomes</h2>

      <ul>
        {pessoas.map((n) => (
          <li key={n.id}>{n.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;