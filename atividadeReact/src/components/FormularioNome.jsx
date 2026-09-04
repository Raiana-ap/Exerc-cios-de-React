import { useState } from "react";

function FormularioNome() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setMensagem(`Olá, ${nome}!`);
  }
  return (
    <div>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
        <button type="submit">Enviar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}
export default FormularioNome;
