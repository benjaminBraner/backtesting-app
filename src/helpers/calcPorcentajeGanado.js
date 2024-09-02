export const calcPorcentajeGanado = (capitalInicial, capitalActual) => {
	if (capitalInicial <= 0) {
		alert("El capital inicial debe ser mayor que cero.");
		return;
	}
 
	const porcentajeGanado = ((capitalActual - capitalInicial) / capitalInicial) * 100;
	return porcentajeGanado.toFixed(2);
 
};