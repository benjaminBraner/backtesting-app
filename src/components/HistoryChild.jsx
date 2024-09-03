import deleteImg from '../assets/delete.svg'
import { contarSecuencia } from '../helpers/contarSecuencia'
import { calcPorcentajeGanado } from '../helpers/calcPorcentajeGanado'
import { useContext } from 'react'
import { StatsContext } from './context/StatsContext'

export const HistoryChild = ({
	nOperacion,
	PnL,
	tipo,
	porcentaje,
	capital,
	riesgoEnOperacion,
	distanciaProfitEnOperacion,
	hasChanged,
	riesgoCambio,
distanciaProfitCambio
}) => {
	const { stats, setStats, historial, setHistorial } =
		useContext(StatsContext)

	const {
		ganadoras,
		perdedoras,
		operaciones,
		capitalActual,
		capitalInicial,
		profitDefinido
	} = stats

	const x = () => {
		if (!profitDefinido && !riesgoCambio) {
			return "tooltip"
		} else if (!profitDefinido && riesgoCambio) {
			return "tooltip border-golden"
		} else if (hasChanged && profitDefinido) {
			return "tooltip border-golden"
		}
	}
console.log(x())

	const clickBtnEliminar = (nOperacion) => {
		const nuevoHistorial = historial.filter(
			(op) => op.nOperacion !== nOperacion
		)

		const [registroEliminado] = historial.filter(
			(op) => op.nOperacion === nOperacion
		)

		setStats({
			...stats,
			ganadoras:
				registroEliminado.tipo == 'Profit' ? ganadoras - 1 : ganadoras,
			perdedoras:
				registroEliminado.tipo == 'Loss' ? perdedoras - 1 : perdedoras,
			operaciones: operaciones - 1,
			capitalActual: (capitalActual - registroEliminado.PnL).toFixed(2),
			rachaMaxGanadora: contarSecuencia(nuevoHistorial).maxRachaGanadora,
			porcentajeGanado: calcPorcentajeGanado(
				capitalInicial,
				capitalActual - registroEliminado.PnL
			),
			dineroGanado: (
				parseFloat(capitalActual - registroEliminado.PnL.toFixed(2)) -
				capitalInicial
			).toFixed(2)
		})
		setHistorial(nuevoHistorial)
	}
	// console.log(riesgoEnOperacion)
	// console.log(distanciaProfitEnOperacion)
	// console.log(porcentaje)

	return (
		// <div
		// 	className={`registro ${tipo.toLowerCase()}-reg ${
		// 		hasChanged ? 'tooltip' : ''
		// 	}`}
		// >
		<div
			className={`registro ${tipo.toLowerCase()}-reg ${x()}`}
		>
			<span className="tooltiptext">{`riesgo: ${riesgoEnOperacion}% profit: 1:${distanciaProfitEnOperacion}`}</span>
			<div>{nOperacion}.</div>
			<div className={`pnl-${tipo.toLowerCase()}`}>{tipo}</div>
			<div className={`pnl-${tipo.toLowerCase()}`}>
				PnL: {tipo.toLowerCase() === 'profit' ? '+' : ''}
				{PnL}$
			</div>
			<div>
				Roi:{' '}
				{tipo.toLowerCase() === 'profit'
					? `+${riesgoEnOperacion * distanciaProfitEnOperacion}%`
					: `-${porcentaje}%`}
			</div>
			<div>{capital}$</div>
			<div
				className="btn-del"
				onClick={() => clickBtnEliminar(nOperacion)}
			>
				<img src={deleteImg} alt="delete" />
			</div>
		</div>
	)
}
