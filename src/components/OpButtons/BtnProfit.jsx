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
		let riesgoComoFactor = (riesgo) / 100
		let capitalMasGanancia = capitalActual + ((capitalActual * (riesgoComoFactor*profit)))
		const nuevoHistorial = [
			...historial, 
			{
				nOperacion: operaciones+1, 
				PnL: parseFloat((capitalMasGanancia.toFixed(2) - capitalActual).toFixed(2)) ,
				tipo: "Profit",
				porcentaje: profit,
				capital: parseFloat(capitalMasGanancia.toFixed(2)),
				riesgoEnOperacion: parseFloat(riesgo),
				distanciaProfitEnOperacion: parseFloat(distanciaProfit),
				hasChanged: historial[historial.length-1]?.riesgoEnOperacion != riesgo || historial[historial.length-1]?.distanciaProfitEnOperacion != distanciaProfit 
			}
		]

		setStats({
			...stats, 
			ganadoras: ganadoras + 1, 
			operaciones: operaciones + 1,
			capitalActual: parseFloat(capitalMasGanancia.toFixed(2)),
			rachaMaxGanadora: contarSecuencia(nuevoHistorial).maxRachaGanadora,
			porcentajeGanado: calcPorcentajeGanado(capitalInicial, capitalMasGanancia),
			dineroGanado: (parseFloat(capitalMasGanancia.toFixed(2)) - capitalInicial).toFixed(2)
		})
		setHistorial(nuevoHistorial)
	}
	return (
		<button className="btn-op profit" onClick={clickBtnProfit}>
			Profit
		</button>
	)
}
