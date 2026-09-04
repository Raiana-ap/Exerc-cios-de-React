import { useState } from "react";

function Mensagem() {
  const [mensagem, setMensagem] = useState("Mostrar mensagem");
  return (
    <div>
      <h2>Clique no botão</h2>
      <p>{mensagem}</p>
      <button onClick={() => setMensagem("Bem vindo ao React!")}>
        Clique aqui
      </button>
    </div>
  );
}
export default Mensagem;
