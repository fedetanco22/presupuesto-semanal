import { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

export default function Formulario({ funcionSetGasto, setCrearGasto }) {
  const [gasto, setGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    //   Validar
    if (cantidad < 1 || isNaN(cantidad) || gasto.trim() === "") {
      setError(true);
      return; //importante el return
    }

    setError(false);

    // Construir el Gasto
    const gastosParciales = {
      gasto,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al com0p principal
    funcionSetGasto(gastosParciales);
    setCrearGasto(true);

    // resetear el form
    setGasto("");
    setCantidad(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar tus gastos aqui</h2>

      {error ? (
        <Error mensaje="El Presupuesto es Incorrecto: Complete correctamente" />
      ) : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={gasto}
          onChange={(e) => setGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 1000"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />

        <input
          type="submit"
          value="Agregar gasto"
          className="button-primary u-full-width"
        />
      </div>
    </form>
  );
}
