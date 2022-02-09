function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}


var pessoas = [{
        id: 1,
        nome: "Fernando",
        idade: 24
    },
    {
        id: 2,
        nome: "Belinha",
        idade: 7
    },
    {
        id: 3,
        nome: "Janaina",
        idade: 29
    },
    {
        id: 4,
        nome: "Nina",
        idade: 10
    }
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


pessoas.forEach(pessoa => {
    console.log(calculaIdade.call(pessoa, getRandomInt(1, 10)));
});

console.log("-----");

pessoas.forEach(pessoa => {
    console.log(calculaIdade.apply(pessoa, [getRandomInt(1, 10)]));
});