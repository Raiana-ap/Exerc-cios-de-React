function SituacaoAluno() {
  const nota = 8;

  return (
    <div>
      <h2>Situação</h2>
      <p>
        {nota >= 7 ? "Aprovado" : "Reprovado"}
      </p>
    </div>
  );
}

export default SituacaoAluno;