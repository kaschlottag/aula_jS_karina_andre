//TRABALHANDO COM OBJETOS NO JAVA SCRIPT

//criar uma variavel do tipo objeto
let pessoa = {
    nome: 'Deivid',
    idade: 52,
    altura: 1.58,
    cargo: 'estudante'
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
    nome: 'Brasilia',
    cor: 'amarela',
    marca: 'Volkswagem'
};

console.log(carro.nome + ' ' + carro.cor);

//CRIANDO UM ARRAY DE OBJETOS
let alunos = [
    { nome: 'Helo', CGM: 168345000, turma: '2DS' },
    { nome: 'Bernardo', CGM: 168345111, turma: '2DS' },
    { nome: 'Rogério', CGM: 168345222, turma: '2DS' },
];

console.log(alunos);

console.log(alunos[1]);

console.log(alunos[0].nome);