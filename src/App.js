import Preguntas from "./componentes/Preguntas";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          <Preguntas />
        </div>
      </header>
    </div>
  );
}

export default App;
