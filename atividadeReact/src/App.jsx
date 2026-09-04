import { useState } from 'react';
import './App.css';
import Ex1 from './components/Ex1.jsx';
import Cabecalho from './components/Cabecalho.jsx';
import Aluno from './components/Aluno.jsx';
import Contador from './components/Contador.jsx';
import Mensagem from './components/Mensagem.jsx';
import FormularioNome from './components/FormularioNome.jsx';
import ListaDiciplinas from './components/ListaDiciplinas.jsx';
import ListaAlunos from './components/ListaAlunos.jsx';
import SituacaoAluno from './components/SituacaoAluno.jsx';
import ListaUsuarios from './components/ListaUsuarios.jsx';

function App() {

  return (
    <>
    <Ex1 />
    <hr />
    <Cabecalho />
    <hr />
    <Aluno nome="Ana" turma="2 ano" />
    <hr />
    <Contador />
    <hr />
    <Mensagem />
    <hr />
    <FormularioNome />
    <hr />
    <ListaDiciplinas />
    <hr /> 
    <ListaAlunos />
    <hr /> 
    <SituacaoAluno />
    <hr />
    <ListaUsuarios />
    </>
  )
}

export default App
