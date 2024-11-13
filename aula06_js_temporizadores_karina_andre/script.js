
//function acao(){
//document.write("executando ....<br/>");
//}
//temporizador
//setInterval(acao,2000); 

// setInterval(()=>{
//     document.write("executando atravez do arrow function...<br/>")
// },1000);

// clearInterval(timer);

// var time = setInterval(()=>{
//     document.write("executando atravez do arrow function...<br/>")
// },1000);

//outro temporizador
function acao2(){
    document.write("executando com setTimeout!")
}

setTimeout(acao2,3000);
setTimeout(()=>{
    document.write("executando com arrow function!")
},4000);