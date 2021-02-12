import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";

function CalculoPresupuesto({ presupuesto, saldo }) {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, saldo)}>
        Saldo: $ {saldo}
      </div>
    </>
  );
}

CalculoPresupuesto.protoTypes = {
  presupuesto: PropTypes.number.isRequired,
  saldo: PropTypes.number.isRequired,
};

export default CalculoPresupuesto;
