import Gasto from "./Gasto";
import PropTypes from "prop-types";

export default function Gastos({ gastos }) {
  return (
    <div className="gastos-realizados">
      <h2>Listado de Gastos</h2>

      {gastos.map((gasto, index) => {
        return <Gasto key={index} gasto={gasto} />;
      })}
    </div>
  );
}
