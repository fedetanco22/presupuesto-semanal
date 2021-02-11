import { useState, useEffect } from "react";
import Preguntas from "./componentes/Preguntas";
import Formulario from "./componentes/Formulario";
import Gastos from "./componentes/Gastos";
import CalculoPresupuesto from "./componentes/CalculoPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [preguntagasto, setPreguntaGasto] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);
      //resta del saldo
      setSaldo(saldo - gasto.cantidad);
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, saldo]);

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
                <Formulario
                  funcionSetGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>

              <div className="one-half column">
                <Gastos gastos={gastos} />
                <CalculoPresupuesto presupuesto={presupuesto} saldo={saldo} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
