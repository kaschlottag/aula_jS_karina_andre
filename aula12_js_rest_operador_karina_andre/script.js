//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4) {
//     console.log("sejam bem vindos todos os alunos!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);

//}

//na função não temos como saber de atemão qunatos parametros serão passados 
//'ai entra em acão o Rest Operator que irá trasformar os parametros em array'

//vamos reescrever a função ultilizando o Rest Operator
// function listaAlunos(...alunos) {
//     console.log("sejam bem vindos todos os alunos!")
//     console.log(alunos);
//     console.log(alunos[0]); 
//     console.log(alunos[3]);
// }

// listaAlunos('Anamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emegarda');


//outro exemplo: sorteador de números primos menores que 20

// function sorteadorPrimo(...numeros){
//     console.log(numeros);
// //    const numeroSorteado =Math.random()*numeros.length;

//     const numeroSorteados = Math.floor(math.ramdom()*numeros.length);
//     console.log(`posição' ${numeroSorteados}`);
//     console.log(`numero primo: ${numeros [numeroSorteados]}`)

// }

// sorteadorPrimo(2,3,5,7,11,13,17,19);

//Sorteador dos nomes
function sorteadorAlunos(...alunos) {
    console.log(alunos);

    const alunosSorteados = Math.floor(Math.random() * alunos.length);
    console.log(`posição: ${alunosSorteados}`);
    console.log(`Alunos: ${alunos[alunosSorteados]}`)

}
sorteadorAlunos('Aline', 'Ana Clara', 'André', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jefte', 'João Matheus',
'João Maurício', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin', 'Leonardo Freitas', 'Leonardo', 'Leonardo Speçamilio', 'Lorenzo', 'Lucas', 'Matheus', 'Nicolas', 'Nycolas', 'Pedro Portela',
'Rafaela', 'Raphael', 'Rayra', 'Valentina', 'Vinícius', 'Vitor Garrett', 'Vitor Schuski', 'Pedro da Silva', 'Ana Luiza');