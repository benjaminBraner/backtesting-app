import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BacktestingApp } from './BacktestingApp'

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    <BacktestingApp />
  /* </React.StrictMode> */
)

/*
const inputNombre = document.getElementById("name-strat");
const inputCapital = document.querySelector(".capital");
const inputRiesgo = document.querySelector(".riesgo");
const inputNumOperaciones = document.querySelector(".n-operaciones");
 
const inputs = document.getElementsByTagName('input');
 
const btnIniciar = document.querySelector(".iniciar");
const btnLoss = document.querySelector(".loss");
const btnProfit = document.querySelector(".profit");
 
const parrafoOpPerdedoras = document.querySelector(".operaciones-perdedoras");
const parrafoOpGanadoras = document.querySelector(".operaciones-ganadoras");
const parrafoCapActual = document.querySelector(".capital-actual");
const parrafoNumOperaciones = document.querySelector(".num-operaciones");
const parrafoMaxRachaGanadora = document.querySelector(".max-racha-ganadora");
const parrafoMaxRachaPerdedora = document.querySelector(".max-racha-perdedora");
const parrafoGananciaEnCapital = document.querySelector(".ganancia-en-capital");
const registroContainer = document.querySelector(".historial");
 
 
btnIniciar.addEventListener("click", (e) => {
     e.preventDefault();
     clickBtnIniciar();
})
 
btnLoss.addEventListener("click", (e) => {
     e.preventDefault();
     clickBtnLoss();
})
 
btnProfit.addEventListener("click", (e) => {
     e.preventDefault();
     clickBtnProfit();
})
 
 
let capitalActual;
let riesgo;
 
let definidoProfit;
const clickBtnIniciar = () => {
 
     const profitDefinido = prompt("Tienes un profit definido para cada operacion con respecto al stop-loss? Ejm: 1.50,  2,  etc.");
 
     // Convertir la respuesta a número
     const profitNumerico = parseFloat(profitDefinido);
 
     // Verificar si es un número
     if (isNaN(profitNumerico)) {
          alert("ERROR: El valor introducido no es un número.");
     } else {
          alert(`tus operaciones se haran de distancia 1 a ${profitNumerico}`)
          definidoProfit = profitNumerico;
     }
 
 
 
 
     let capitalValue = parseFloat(inputCapital.value);
     let riesgoValue = parseFloat(inputRiesgo.value);
 
     if (!capitalValue || !riesgoValue) {
          alert("Capital y Riesgo% no pueden estar vacios");
          return
     }
     for (let i = 0; i < inputs.length; i++) {
          inputs[i].disabled = true;
     }
 
 
     capitalActual = capitalValue;
     riesgo = riesgoValue;
 
     btnLoss.removeAttribute("disabled");
     btnProfit.removeAttribute("disabled");
 
}
 
 
let numOpPerdedoras = 0;
const clickBtnLoss = () => {
     numOpPerdedoras += 1;
     let riesgoComoFactor = riesgo / 100;
     capitalActual -= capitalActual * riesgoComoFactor;
     parrafoOpPerdedoras.querySelector("span").textContent = numOpPerdedoras;
     parrafoCapActual.querySelector("span").textContent = capitalActual.toFixed(2);
     clickBtnOperacion();
     operaciones.push(0);
     contarSecuencias(operaciones);
     calcularPorcentajeGanado(parseFloat(inputCapital.value), capitalActual)
}
 
 
let numOpGanadoras = 0;
const clickBtnProfit = () => {
     numOpGanadoras += 1;
     let profit;
     if (definidoProfit) {
          profit = definidoProfit
     } else {
          profit = parseFloat(prompt("Porcentaje de profit de la operacion"));
     }
     let riesgoComoFactor = profit / 100;
     capitalActual += capitalActual * riesgoComoFactor;
     parrafoOpGanadoras.querySelector("span").textContent = numOpGanadoras;
     parrafoCapActual.querySelector("span").textContent = capitalActual.toFixed(2);
     clickBtnOperacion();
     operaciones.push(1);
     contarSecuencias(operaciones);
     calcularPorcentajeGanado(parseFloat(inputCapital.value), capitalActual)
}
 
let numOperacionesRealizadas = 0;
const clickBtnOperacion = () => {
     numOperacionesRealizadas += 1;
     parrafoNumOperaciones.querySelector("span").textContent = numOperacionesRealizadas;
}
 
 
 
const operaciones = [];
function contarSecuencias(array) {
     let maxCeros = 0;
     let maxUnos = 0;
     let contadorCeros = 0;
     let contadorUnos = 0;
 
     for (let i = 0; i < array.length; i++) {
          if (array[i] === 0) {
               contadorCeros++;
               contadorUnos = 0;
               maxCeros = Math.max(maxCeros, contadorCeros);
          } else if (array[i] === 1) {
               contadorUnos++;
               contadorCeros = 0;
               maxUnos = Math.max(maxUnos, contadorUnos);
          }
     }
     parrafoMaxRachaGanadora.querySelector("span").textContent = maxUnos;
     parrafoMaxRachaPerdedora.querySelector("span").textContent = maxCeros;
}
 
 
const calcularPorcentajeGanado = (capitalInicial, capitalActual) => {
     if (capitalInicial <= 0) {
          alert("El capital inicial debe ser mayor que cero.");
          return;
     }
 
     const porcentajeGanado = ((capitalActual - capitalInicial) / capitalInicial) * 100;
     parrafoGananciaEnCapital.querySelector("span").textContent = `${porcentajeGanado.toFixed(2)}%`;
 
};
 

const agregarRegistro = (op, pnl, nOperacion) => {
     let htmlReg = `
          <div class="registro ${op.toLowerCase()}-reg">
               <div class="N">${nOperacion}.</div>
               <div class="op">${op}</div>
               <div class="g-p">PnL: ${op.toLowerCase() == "profit"? "+": "-"}${pnl}%</div>
               <div class="btn-del">
                    <img src="delete.svg">
               </div>
          </div>`
     registroContainer.innerHTML +=htmlReg;
         

 
}
agregarRegistro("Profit", 1.43, 2);
agregarRegistro("losS", 1.43, 2);
 
const eliminarRegistro = (op, pnl) => {
 
}
 
*/