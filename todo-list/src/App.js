import { useState } from 'react';
import './App.css';

function App() {
// Array que vai retornar duas coisas:
// 1 - Lista de Tarefas
// 2 - Função para decalarar valor da lista de tarefas

//criando o estado da lista

let [lista, setLista] = useState([]);
let [novoItem, setNovoItem] = useState ("")

  return (
    <div class="container">
        <h1>Minha lista de Tarefas</h1>
        <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
        <button onClick={() => adicionarNovoItem()}>Adicionar</button>
        <ul>
          {lista.map((item, index) => (
            <li>
              {item}
              <button onClick={() => deletarItem(index)}>
                Deletar
              </button>
            </li>
            ))}
        </ul>
    </div>
  );

function adicionarNovoItem() {
  setLista([...lista, novoItem]);
  setNovoItem("") 
}

function deletarItem(index) {
  let tmpArray = [...lista];
  tmpArray.splice(index,1);

  setLista(tmpArray);
}


}

export default App;
