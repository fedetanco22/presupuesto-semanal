import { revisarPresupuesto } from "../helpers";

export default function CalculoPresupuesto({ presupuesto, saldo }) {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto, saldo)}>
        Saldo: $ {saldo}
      </div>
    </>
  );
}
