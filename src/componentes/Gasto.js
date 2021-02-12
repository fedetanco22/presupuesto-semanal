import PropTypes from "prop-types";
export default function Gasto({ gasto }) {
  return (
    <li className="gastos">
      <p className="gasto">
        {gasto.gasto}
        <span className="gasto">$ {gasto.cantidad}</span>
      </p>
    </li>
  );
}

Gasto.protoTypes = {
  gastos: PropTypes.object.isRequired,
};
