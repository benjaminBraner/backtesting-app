import React, { useContext, useEffect } from 'react'
import { StatsContext } from '../context/StatsContext'
import { calcPorcentajeGanado } from '../../helpers/calcPorcentajeGanado';
import { contarSecuencia } from '../../helpers/contarSecuencia';

export const BtnLoss = ({btnIniciarClicked, btnEditarClicked}) => {

	const {stats, setStats, historial, setHistorial} = useContext(StatsContext);
	const {
		operaciones, 
		perdedoras, 
		capitalActual,
		capitalInicial,
		riesgo,
		distanciaProfit
	} = stats;

	useEffect(() => {
		const btnLoss = document.querySelector('.loss')
		btnLoss.disabled = !btnIniciarClicked || btnEditarClicked
	}, [btnIniciarClicked, btnEditarClicked])

	const clickBtnLoss = (e) => {
		e.preventDefault()
		let riesgoComoFactor = riesgo / 100;
		let capitalMenosGanancia = capitalActual - (capitalActual * riesgoComoFactor)
		console.log(distanciaProfit)
		const nuevoHistorial = [
			{
				nOperacion: operaciones+1, 
				PnL: parseFloat((capitalMenosGanancia - capitalActual).toFixed(2)) ,
				tipo: "Loss",
				porcentaje: riesgo,
				capital: parseFloat(capitalMenosGanancia.toFixed(2)),
				riesgoEnOperacion: parseFloat(riesgo),
				distanciaProfitEnOperacion: parseFloat(distanciaProfit),
				hasChanged: historial[0]?.riesgoEnOperacion != riesgo || historial[0]?.distanciaProfitEnOperacion != distanciaProfit,
				riesgoCambio: historial[0]?.riesgoEnOperacion != riesgo,
				distanciaProfitCambio: historial[0]?.distanciaProfitEnOperacion != distanciaProfit,
			},
			...historial, 
		]


		setStats({
			...stats, 
			perdedoras: perdedoras + 1, 
			operaciones: operaciones + 1,
			capitalActual: parseFloat(capitalMenosGanancia.toFixed(2)),
			rachaMaxPerdedora: contarSecuencia(nuevoHistorial).maxRachaPerdedora,
			porcentajeGanado: calcPorcentajeGanado(capitalInicial, capitalMenosGanancia),
			dineroGanado: parseFloat((parseFloat(capitalMenosGanancia) - capitalInicial).toFixed(2))

		})
		setHistorial(nuevoHistorial)
	}
 

  return (
	<button className="btn-op loss" onClick={clickBtnLoss}>
	Loss
</button>
  )
}
