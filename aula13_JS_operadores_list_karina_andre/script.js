//map
//percorre todo array e executa a ação que tivermos programado
//let lista = ['Altamiro','Barnabe','Cremildo'];

//ista.map((nome,posicao)=>{
//  console.log(`o nome é ${nome} e ele ocupa posição ${posicao}`);
//})

//REDUCE
//procura reduzir um array normalmente , através de
//operações matematicas, transformando todo conteúdo 
//do array em um unico valor

// let numeros = [2, 3, 5, 10]

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} total ate agora`)
//     console.log(`${numero} - valor total`);
//     console.log(`${indice} - posicao ate agora`);
//     console.log(`${original} - array original`);

//     console.log('-----------------------------')
//     return acumulador += numero;;

// });
// console.log(`total reduce é ${total}`);

//FIND
//faz uma busca dnetro do array e devolve o primriro item que 
//ele encontra e corresponde ao critério do busca 

let listagem = [2,3,'Marcelo',5,'professor'];

let busca = listagem.find((item2)=>{
    return (item2 ==='Marcelo');
} );