import React, { useContext, useEffect } from 'react'
import { StatsContext } from '../context/StatsContext'
import { contarSecuencia } from '../../helpers/contarSecuencia';
import { calcPorcentajeGanado } from '../../helpers/calcPorcentajeGanado';

export const BtnProfit = ({btnIniciarClicked, btnEditarClicked}) => {

	const {stats, setStats, historial, setHistorial} = useContext(StatsContext);
	const {
		distanciaProfit, 
		operaciones, 
		ganadoras, 
		capitalActual,
		capitalInicial,
		riesgo
	} = stats;

	useEffect(() => {
		const btnProfit = document.querySelector('.profit')
		btnProfit.disabled = !btnIniciarClicked || btnEditarClicked
	}, [btnIniciarClicked, btnEditarClicked])
	

	const clickBtnProfit = (e) => {
		e.preventDefault();
		let profit = distanciaProfit?  distanciaProfit : parseFloat(prompt('Porcentaje de profit de la operacion'))
		if (isNaN(profit)) {
			return;
		}
		let riesgoComoFactor = (riesgo) / 100
		let capitalMasGanancia = capitalActual + ((capitalActual * (riesgoComoFactor*profit)))
		console.log(profit)
		const nuevoHistorial = [
			{
				nOperacion: operaciones+1, 
				PnL: parseFloat((parseFloat(capitalMasGanancia).toFixed(2) - capitalActual).toFixed(2)) ,
				tipo: "Profit",
				porcentaje: profit,
				capital: parseFloat(parseFloat(capitalMasGanancia).toFixed(2)),
				riesgoEnOperacion: parseFloat(riesgo),
				distanciaProfitEnOperacion: parseFloat(profit),
				hasChanged: historial[0]?.riesgoEnOperacion != riesgo || historial[0]?.distanciaProfitEnOperacion != distanciaProfit,
				riesgoCambio: historial[0]?.riesgoEnOperacion != riesgo,
				distanciaProfitCambio: historial[0]?.distanciaProfitEnOperacion != distanciaProfit,
			},
			...historial, 
		]
console.log(stats)
		setStats({
			...stats, 
			ganadoras: ganadoras + 1, 
			operaciones: operaciones + 1,
			capitalActual: parseFloat(parseFloat(capitalMasGanancia).toFixed(2)),
			rachaMaxGanadora: contarSecuencia(nuevoHistorial).maxRachaGanadora,
			porcentajeGanado: calcPorcentajeGanado(capitalInicial, capitalMasGanancia),
			dineroGanado: parseFloat((parseFloat(capitalMasGanancia).toFixed(2) - capitalInicial).toFixed(2))
		})
		setHistorial(nuevoHistorial)
		console.log(nuevoHistorial)
	}
	return (
		<button className="btn-op profit" onClick={clickBtnProfit}>
			Profit
		</button>
	)
}
