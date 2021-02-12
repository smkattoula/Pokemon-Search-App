import "./App.css";
import Search from "./components/Search";
import PokemonList from "./components/PokemonList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Search />
        <PokemonList />
      </Container>
    </div>
  );
}

export default App;
