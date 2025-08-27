import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['Azul', 'Preto', 'Amarelo']

  return (
    <div className="App">
      <OutraLista itens={meusItens}></OutraLista>
      <OutraLista itens={[]}></OutraLista>
    </div>
  );
}

export default App;
