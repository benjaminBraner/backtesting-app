import React, { useState } from 'react'
import { Form } from './components/Form'
import { Stats } from './components/Stats'
import { History } from './components/History'
import { StatsContext } from './components/context/StatsContext'

export const BacktestingApp = () => {
	const statistics = {
		operaciones: 0,
		ganadoras: 0,
		perdedoras: 0,
		rachaMaxGanadora: 0,
		rachaMaxPerdedora: 0,
		porcentajeGanado: 0,
		capitalActual: 0,
		dineroGanado: 0,
		//oculto
		capitalInicial: 0,
		riesgo: 0,
		distanciaProfit: 0,
	}

	const [stats, setStats] = useState(statistics);
	const [historial, setHistorial] = useState([]);

	return (
		<StatsContext.Provider value={{stats, setStats, historial, setHistorial}}>

			<div className="father">
				<h1>Backtesting</h1>
				<div className="container">
					<Form />
					<Stats />
					<History />
				</div>
			</div>

		</StatsContext.Provider>
	)
}
