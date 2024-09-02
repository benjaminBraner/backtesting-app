import React, { useContext } from 'react'
import { StatsContext } from './context/StatsContext'

export const Stats = () => {

	const {stats} = useContext(StatsContext);

	const {
		operaciones,
		ganadoras,
		perdedoras,
		rachaMaxGanadora,
		rachaMaxPerdedora,
		porcentajeGanado,
		capitalActual,
		dineroGanado
	} = stats;

	return (
		<div className="stats">
			<p className="num-operaciones">
				Numero de operaciones: <span>{operaciones}</span>
			</p>
			<p className="operaciones-ganadoras">
				Operaciones Ganadoras: <span>{ganadoras}</span>
			</p>
			<p className="operaciones-perdedoras">
				Operaciones Perdedoras: <span>{perdedoras}</span>
			</p>
			<p className="max-racha-ganadora">
				Max. Racha ganadora: <span>{rachaMaxGanadora}</span>
			</p>
			<p className="max-racha-perdedora">
				Max. Racha perdedora: <span>{rachaMaxPerdedora}</span>
			</p>
			<p className="ganancia-en-capital">
				Porcentaje Ganado: <span>{porcentajeGanado}%</span>
			</p>
			<p className="ganancia-en-capital">
				Dinero Ganado: <span>{dineroGanado}</span>
			</p>
			<p className="capital-actual">
				Capital actual: <span>{capitalActual}</span>
			</p>
		</div>
	)
}
