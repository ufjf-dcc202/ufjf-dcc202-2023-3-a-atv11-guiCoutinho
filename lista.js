const lista = ["Um", "Dois", "Três"];

function getLista() {
    return lista;
}

function adicionaNaLista(texto) {
    lista.push(texto);
}

function limpaLista() {
    lista.splice(0, lista.length);
}

function removeDaLista(indice) {
    lista.pop(indice);
}

export {getLista, adicionaNaLista, limpaLista, removeDaLista};