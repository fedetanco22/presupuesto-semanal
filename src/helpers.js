export const revisarPresupuesto = (presupuesto, saldo) => {
  let clase;

  if (presupuesto / 4 > saldo) {
    clase = "alert alert-danger";
  } else if (presupuesto / 2 > saldo) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }
  return clase;
};
