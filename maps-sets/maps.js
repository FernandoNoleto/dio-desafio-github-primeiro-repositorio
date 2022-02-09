function getAdmin(funcionarios) {
    let admins = [];
    for ([key, value] of funcionarios) {
        value === 'admin' ? admins.push(key) : console.log(`${key} não é admin`);
    }

    return admins;
}


var funcionarios = new Map();

funcionarios.set('Luiz', "admin");
funcionarios.set('Bruna', "rh");
funcionarios.set('Fernando', "dev");
funcionarios.set('Janio', "dev");
funcionarios.set('Neto', "contador");
funcionarios.set('Max', "admin");
funcionarios.set('Luciano', "ti");


console.log("Admins são: " + getAdmin(funcionarios));