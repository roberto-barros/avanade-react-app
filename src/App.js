import './App.css';
import Header from './components/Header';

function App() {

  const dados = {
    nome: "Roberto Barros",
    empresa: "Fiap",
    site: "https://www.avanade.com.br",
    className: "App-link"
  }

  return (
    //JSX - JavaScript Extensible
    <div className="App">
      <Header title="Bem Vindo! Bom almoço!" options={ dados } />
    </div>
  );
}

export default App;
