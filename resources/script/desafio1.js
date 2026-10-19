let senhaDigitada = Number(prompt("Digite a senha: "))
let senha = 242424;
let numeroTentativas = 2

while (numeroTentativas != 0) {
    if(senhaDigitada === senha){
        alert("Acesso liberado");
        break
    }
    else {
         numeroTentativas --; 

         if(numeroTentativas > 0) {
            senhaDigital = Number(prompt(`Senha incorreta. Você tem mais ${numeroTentativas} tentativas, tente novamente: `));
         }
    } 
}
    if (numeroTentativas === 0){
        alert("Aceso bloqueado!");
    }


       