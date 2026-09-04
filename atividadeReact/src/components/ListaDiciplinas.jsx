function ListaDiciplinas() {
  const diciplinas = [
    "Programação",
    "Banco de Dados",
    "Redes",
    "Desenvolvimento Web",
  ];
  return (
    <div>
      <h2>Diciplinas</h2>
      <ul>
        {diciplinas.map((diciplina, index) => (
          <li key={index}>{diciplina}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListaDiciplinas;
