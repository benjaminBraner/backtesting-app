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
		btnEditar.disabled = !btnIniciarClick;
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
		const {
			inputCapital,
			inputRiesgo,
			inputDistanciaProfit,
			inputs,
			btnIniciar,
			btnEditar
		} = domComponents()
		e.preventDefault()

		const msgCapitalRiesgoVacios =
			'Capital y Riesgo% no pueden estar vacios'

		if (!inputCapital.value || !inputRiesgo.value) {
			alert(msgCapitalRiesgoVacios)
			return
		}

		const profitDefinido = parseFloat(inputDistanciaProfit.value)

		profitDefinido
			? alert(
					`tus operaciones se haran de distancia 1 a ${profitDefinido}`
			  )
			: ''

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
		btnEditar.textContent = isEditing ? 'Aceptar' : 'Editar';

		setStats({...stats, riesgo: inputRiesgo.value, distanciaProfit: inputDistanciaProfit.value})
		setBtnEditarClick(!btnEditarClick)
	}
	
	return (
		<form>
			<input
				type="text"
				placeholder="Nombre Estrategia"
				id="name-strat"
			/>

			<div className="h">
				<div className="inp-cont">
					<label htmlFor="">Capital</label>
					<input type="number" className="capital" />
				</div>
				<div className="inp-cont">
					<label htmlFor="">Riesgo %</label>
					<input type="number" className="riesgo" />
				</div>
				<div className="inp-cont">
					<label htmlFor="">Distancia profit 1:</label>
					<input type="number" className="distancia-profit" />
				</div>
			</div>

			<div className="inp-cont j">
				<label htmlFor="">N° operaciones</label>
				<input type="number" className="n-operaciones" />
			</div>
			<button type="submit" className="iniciar" onClick={clickBtnIniciar}>
				Iniciar
			</button>
			<button type="button" className="editar" onClick={clickBtnEditar}>
				Editar
			</button>

			<div className="k">
				<BtnLoss btnIniciarClicked={btnIniciarClick} btnEditarClicked={btnEditarClick}/>
				<BtnProfit btnIniciarClicked={btnIniciarClick} btnEditarClicked={btnEditarClick}/>
			</div>
		</form>
	)
}
