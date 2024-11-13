var area=document.getElementById('area');


function entrar(){
   //alert("Clicou");
   var nome= prompt('Digite seu nome');
   //console.log(nome)
   area.innerHTML='Bem vindo '+nome+ "  ";

   //criando um botao dentro do HTML apartir do JS
   let BotaoSair = document.createElement('button');
   BotaoSair.innerHTML = "sair da conta" 
   BotaoSair.onclick = sair;

   area.appendChild(BotaoSair);

}

function sair(){
    alert('Até mais');
    area.innerHTML = 'Você saiu'
}