export const contarSecuencia = (array) => {
	if (array.length === 0) return { maxRachaGanadora: 0, maxRachaPerdedora: 0 };
 
	let maxRachaGanadora = 0;
	let maxRachaPerdedora = 0;
	let rachaGanadoraActual = 0;
	let rachaPerdedoraActual = 0;
 
	for (let i = 0; i < array.length; i++) {
	    if (array[i].tipo === 'Profit') {
		   rachaGanadoraActual++;
		   rachaPerdedoraActual = 0;  // Reinicia la racha de pérdidas
 
		   maxRachaGanadora = Math.max(maxRachaGanadora, rachaGanadoraActual);
	    } else if (array[i].tipo === 'Loss') {
		   rachaPerdedoraActual++;
		   rachaGanadoraActual = 0;  // Reinicia la racha de ganancias
 
		   maxRachaPerdedora = Math.max(maxRachaPerdedora, rachaPerdedoraActual);
	    }
	}
 
	return { maxRachaGanadora, maxRachaPerdedora };
 };