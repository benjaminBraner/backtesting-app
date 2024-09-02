import React, { useContext } from 'react'
import { StatsContext } from './context/StatsContext'
import { HistoryChild } from './HistoryChild'

export const History = () => {
	const { historial} =
		useContext(StatsContext)

	
	return (
		<div className="historial">
			{historial.map(
				({
					nOperacion,
					PnL,
					tipo,
					porcentaje,
					capital,
					riesgoEnOperacion,
					distanciaProfitEnOperacion,
					hasChanged
				}) => (
					<HistoryChild
						key={nOperacion}
						nOperacion={nOperacion}
						PnL={PnL}
						tipo={tipo}
						porcentaje={porcentaje}
						capital={capital}
						riesgoEnOperacion={riesgoEnOperacion}
						distanciaProfitEnOperacion={distanciaProfitEnOperacion}
						hasChanged={hasChanged}
					/>
				)
			)}
		</div>
	)
}
