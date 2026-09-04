import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={() => setValor(valor + 1)}>Adicionar</button>
      <button onClick={() => setValor(valor - 1)}>Diminuir</button>
    </div>
  );
}
export default Contador;
