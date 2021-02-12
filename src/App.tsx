import "./App.css";
import Search from "./components/Search";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Search />
      </Container>
    </div>
  );
}

export default App;
