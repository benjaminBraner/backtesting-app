import React, { useContext, useEffect, useState } from 'react'
import { StatsContext } from './context/StatsContext'
import { BtnLoss } from './OpButtons/BtnLoss'
import { BtnProfit } from './OpButtons/BtnProfit'

export const Form = () => {
	const { stats, setStats } = useContext(StatsContext)

	const [btnIniciarClick, setBtnIniciarClick] = useState(false)
	const [btnEditarClick, setBtnEditarClick] = useState(false)

	useEffect(() => {
		const btnEditar = document.querySelector('.editar')
		btnEditar.disabled = !btnIniciarClick
	}, [])

	const domComponents = () => {
		const inputCapital = document.querySelector('.capital')
		const inputRiesgo = document.querySelector('.riesgo')
		const inputDistanciaProfit = document.querySelector('.distancia-profit')
		const inputNumOperaciones = document.querySelector('.n-operaciones')

		const inputs = document.getElementsByTagName('input')

		const btnIniciar = document.querySelector('.iniciar')
		const btnEditar = document.querySelector('.editar')
		const btnLoss = document.querySelector('.loss')
		const btnProfit = document.querySelector('.profit')

		return {
			inputCapital,
			inputRiesgo,
			inputNumOperaciones,
			inputs,
			btnIniciar,
			btnLoss,
			btnEditar,
			btnProfit,
			inputDistanciaProfit
		}
	}

	const clickBtnIniciar = (e) => {
		const { inputCapital, inputRiesgo, inputDistanciaProfit, inputs, btnIniciar, btnEditar } = domComponents()
		e.preventDefault()

		const msgCapitalRiesgoVacios = 'Capital y Riesgo% no pueden estar vacios'

		if (!inputCapital.value || !inputRiesgo.value) {
			alert(msgCapitalRiesgoVacios)
			return
		}

		const profitDefinido = parseFloat(inputDistanciaProfit.value)

		profitDefinido ? alert(`tus operaciones se haran de distancia 1 a ${profitDefinido}`) : ''

		let capitalValue = parseFloat(inputCapital.value)
		let riesgoValue = parseFloat(inputRiesgo.value)

		for (let i = 0; i < inputs.length; i++) {
			inputs[i].disabled = true
		}
		setStats({
			...stats,
			capitalInicial: capitalValue,
			capitalActual: capitalValue,
			riesgo: riesgoValue,
			distanciaProfit: profitDefinido ? profitDefinido : 0
		})

		btnIniciar.disabled = true
		btnEditar.disabled = false
		setBtnIniciarClick(true)
	}

	const clickBtnEditar = (e) => {
		e.preventDefault()
		const { inputRiesgo, inputDistanciaProfit, btnEditar } = domComponents()

		const isEditing = btnEditar.textContent === 'Editar'
		inputRiesgo.disabled = !isEditing
		inputDistanciaProfit.disabled = !isEditing
		btnEditar.textContent = isEditing ? 'Aceptar' : 'Editar'

		setStats({ ...stats, riesgo: inputRiesgo.value, distanciaProfit: inputDistanciaProfit.value })
		setBtnEditarClick(!btnEditarClick)
	}

	return (
		<>
		
		<section className="form-section">
			<div className="input-group">
				<input type="text" id="nombre" placeholder="" required className={btnIniciarClick ? 'box disabled' : 'box'} disabled={btnIniciarClick} />
				<label htmlFor="nombre">Nombre Estrategia</label>
			</div>

			<div className="input-group">
				<input type="number" id="capital" placeholder="" className={btnIniciarClick ? 'capital box disabled' : 'capital box'} disabled={btnIniciarClick} required />
				<label htmlFor="capital">Capital</label>
			</div>
			<div className="input-group">
				<input type="number" id="riesgo" placeholder="" required className={btnIniciarClick ? 'riesgo box disabled' : 'riesgo box'} disabled={btnIniciarClick} />
				<label htmlFor="riesgo">Riesgo %</label>
			</div>
			<div className="input-group">
				<input type="number" id="distancia" placeholder="" required className={btnIniciarClick ? 'distancia-profit box disabled' : 'distancia-profit box'}  disabled={btnIniciarClick} />
				<label htmlFor="distancia">Distancia Profit 1:X</label>
			</div>

			<div className="input-group">
				<input type="number" id="n-operaciones" placeholder="" required className="box" disabled={btnIniciarClick} />
				<label htmlFor="n-operaciones">N de Operaciones</label>
			</div>

			<div className="btn-group">
				<button className={btnIniciarClick ? 'btn-start iniciar disabled' : 'btn-start iniciar'} onClick={clickBtnIniciar}>
					Iniciar
				</button>
				<button className="btn-edit editar" onClick={clickBtnEditar}>
					Editar
				</button>
			</div>


		</section>
			<section className="operation-buttons">
					<BtnProfit btnIniciarClicked={btnIniciarClick} btnEditarClicked={btnEditarClick} />
					<BtnLoss btnIniciarClicked={btnIniciarClick} btnEditarClicked={btnEditarClick} />
			</section>
		</>
	)
}
