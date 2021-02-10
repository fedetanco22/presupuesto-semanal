import Preguntas from "./componentes/Preguntas";
import Formulario from "./componentes/Formulario";
import { useState } from "react";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [preguntagasto, setPreguntaGasto] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {preguntagasto ? (
            <Preguntas
              setPresupuesto={setPresupuesto}
              setSaldo={setSaldo}
              setPreguntaGasto={setPreguntaGasto}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario />
              </div>

              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
