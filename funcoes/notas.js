function notas(mediaFinal, alunos) {
    var alunosAprovados = [];
    var alunosReprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const { nome, nota } = alunos[i];
        nota >= mediaFinal ? alunosAprovados.push(nome) : alunosReprovados.push(nome);
    }

    for (let i = 0; i < alunosAprovados.length; i++) {
        console.log(`Aprovados: ${alunosAprovados[i]}`);
    }
    console.log("-------------");
    for (let i = 0; i < alunosReprovados.length; i++) {
        console.log(`Reprovados: ${alunosReprovados[i]}`);
    }
}




var alunos = [{
        nome: "Fernando",
        nota: 10,
        turma: "A"
    },
    {
        nome: "Janio",
        nota: 7,
        turma: "B"
    },
    {
        nome: "Neto",
        nota: 7,
        turma: "A"
    },
    {
        nome: "Hudson",
        nota: 0,
        turma: "C"
    },
    {
        nome: "Luciano",
        nota: 9,
        turma: "B"
    },
    {
        nome: "Max",
        nota: 8,
        turma: "C"
    },
    {
        nome: "Eduardo",
        nota: 7,
        turma: "A"
    },
];

var aprovados = notas(7, alunos);

// imprimirAprovados(aprovados);