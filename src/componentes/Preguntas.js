import { useState } from "react";
import Error from "./Error";

export default function Preguntas() {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  function definirPresupuesto(e) {
    setCantidad(parseInt(e.target.value, 10));
  }

  function agregarPresupuesto(e) {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return; //importante el return
    }

    //Validacion Acepatada
    setError(false);
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          placeholder="Coloca tu presupuesto"
          className="u-full-width"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          value="Definir presupuesto"
          className="button-primary u-full-width"
        />
      </form>
    </>
  );
}
