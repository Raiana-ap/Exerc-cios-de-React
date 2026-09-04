function ListaAlunos() {
  const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Carlos", nota: 6 },
    { id: 3, nome: "Mariana", nota: 9 },
  ];
  return (
    <div>
      <h2>Alunos</h2>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>
            {aluno.nome} - Nota: {aluno.nota}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListaAlunos;
