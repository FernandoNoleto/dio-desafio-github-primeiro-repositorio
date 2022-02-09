function substituir(lista) {

    if (lista == null || lista.length == 0) {
        console.log("lista invalida!");
        return -1;
    }


    for (var i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            console.log(`${lista[i]} é par!`);
            lista[i] = 0;
        } else {
            console.log(`${lista[i]} não é par!`);
        }
    }


    return lista;
}


var lista = [0, 1, "2", 3, 4, 5, 6];

console.log(`Lista original: ${lista}`);

lista = substituir(lista);

console.log(`Lista substituida: ${lista}`);