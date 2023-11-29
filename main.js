// main.js
import { getLista } from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

olSaida.innerHTML = "";
atualizarItensDeLista();

function atualizarItensDeLista() {
    const lista = getLista()
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const li = document.createElement("li");
        li.textContent = item;
        olSaida.appendChild(li);
    }
}