let pessoa = {
    nome: 'Karina',
    sobrenome: 'Schlottag',
    empresa: 'CESF',
    cargo: 'Estudante',
};
console.log(pessoa)
console.log(pessoa.nome)

//desconstruir o objeto
const {nome, cargo, empresa}=pessoa;
console.log(nome);
console.log(empresa);

let nomes = [ 'Aparicio', 'Bernadete', 'Cremilda']
console.log(nomes)

let {0:primeiroNome,1:segundoNome,2:terceiroNome}=nomes;
console.log(primeiroNome)

//outro de desconstruir o array
let [primNome, segNome, tercNome]=nomes;
console.log(segNome)