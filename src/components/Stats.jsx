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
		<section className="summary">
			<div className="card">Operaciones: <br/><strong>{operaciones}</strong></div>
			<div className="card green">Ganadoras: <br/><strong>{ganadoras}</strong></div>
				<div className="card red">Perdedoras: <br/><strong>{perdedoras}</strong></div>
				<div className="card">Max. Racha Ganadora: <br/><strong>{rachaMaxGanadora}</strong></div>
				<div className="card">Max. Racha Perdedora: <br/><strong>{rachaMaxPerdedora}</strong></div>
				<div className="card">% Ganado: <br/><strong>{porcentajeGanado}%</strong></div>
				<div className="card">Dinero Ganado: <br/><strong>{dineroGanado}</strong></div>
				<div className="card">Capital: <br/><strong>{capitalActual}</strong></div>
			
			
			
		</section>
	)
}
