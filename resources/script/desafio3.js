let jogos = [
    "Minecraft",
    "the sims",
    "roblox",
    "terraria",
    "stardew Valley"

];

let temmine = prompt("Digite o jogo e eu direi se está na lista: ").toLowerCase();

if (jogos.includes(temmine)){
    alert("O jogo está na lista");

} else {
    alert("O jogo não foi encontrado na lista");
}


