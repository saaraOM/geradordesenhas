const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha = tamanhoSenha+1;
     }
     numeroSenha.textContent = tamanhoSenha;
}
const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

campoSenha.value = letrasMaiusculas;

function geraSenha(){
  for (let i = 0; i < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    (numeroAleatorio);= Math.floor(numeroAleatorio);
    console.log(letrasMaiusculas[numeroAleatorio]);
}
}
