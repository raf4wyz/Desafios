let notas = [1, 5, 4, 7, 7, 8, 10];

let opcao = Number(prompt("Digite uma opção \n 1 - listar \n 2 - achar nota 10 \n 3- buscar posicao \n 4- remover nota"));

while (opcao != 0) {
     opcao = Number(prompt("Digite uma opção \n 1 - listar \n 2 - achar nota 10 \n 3- buscar posicao \n 4- remover nota"));
    switch (opcao) {
        case 1:
            notas.forEach(nota => {
                console.log(nota);
            })
            break;
        case 2:
            let busca = notas.find(nota =>
                nota === 10
            )
            if (busca === 10) {
                console.log("Nota encontrada.");
            }
            else {
                console.log("Nota não encontrada");
            }

            break;
        case 3:
            let buscarPosicao = notas.find(nota =>
                nota === 10
            )
            let indice = notas.indexOf(buscarPosicao)
            if (indice >= 0) {
                console.log("O item está na posição ".concat(indice));
            }
            else {
                console.log("Item inexistente")
            }

            break;
        case 4:
            let excluir = prompt("Digite a nota que deseja remover:")
            let filtrar = notas.find(nota =>
                nota === excluir
            )
           let notaExcluir = notas.indexOf(filtrar)
            if (notaExcluir >= 0) {
               console.log("item excluído com sucesso");
            }
            else {
                console.log("Item inexistente")
            }
            break;

        default:
            alert("opção inválida");
            break;
    }
}
