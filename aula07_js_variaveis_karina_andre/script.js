//DIFERENÇA ENTRE VAR, LET E CONST

//VAR
var nome = 'Adamastor';
console.log(nome);


if(nome==="Adamastor"){
    var escola = 'CESF';
    console.log(escola);
}

console.log(escola);

escola = 'Sagrada';
console.log(escola);
//com variaveis do tipo var podemos acessar (visibilidade) 
//fora do escopo de criação da variável

 //let
 if(nome === 'Adamastor'){
    let curso = 'DS';
    console.log(curso);
 }
  //console.log(curso);
  curso = 'desenvolvimento';
  console.log(curso);

  //let só permite o acesso à variável no escopo onde ele foi criado(escopo de bloco)
  //se reatribuirmos o valor a ela é como se estivéssemos declarando uma nova variável
  //do tipo var como o mesmo nome curso

  //CONST
  const cargo = 'estudante';
  console.log(cargo);
  ///cargo = 'programador';
  console.log(cargo);

  //variáveis do tipo const tem escopo de bloco, com as let, mas ela não 
  //permite retribuição de valor


  //CRIAÇÃO DE VARIÁVEIS SEM ATRIBUIÇÃO INICIAL
  var aluno1;
  aluno1 = 'Ana Clara';
  console.log(aluno1);

  
let aluno2
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3; variáveis do tipo const não pode ser apenas declaradas
const aluno3 = 'Cremilda'
console.log(aluno3)