let oldFlip
let oldCardId
let counter = 0;
const endGame = [];

let arrGifs = [
    'bobrossparrot', 
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

let numeroCartas = prompt("Deseja jogar com quantas cartas?");
while(numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0 ){
        numeroCartas = prompt("Ops! Escolha um número par entre 4 e 14");
}
    
function comparador() { 
	return Math.random() - 0.5; 
};

let giftsArr = arrGifs.slice(0, numeroCartas/2);
giftsArr = giftsArr.concat(giftsArr);
giftsArr.sort(comparador);

function finalizarJogo(){
    const numberClass = document.querySelectorAll('.card-selected').length
    //pegar o valor de cardSelected e comparar ao numeroCartas,
    // quando isso validar, finaliza o jogo
    const endGame = parseInt(numberClass) === parseInt(numeroCartas)
    if(endGame){
        alert(`Você ganhou em ${counter} jogadas!`)
    };
}

function flip(flipCard){
    counter++

    flipCard.classList.add("card-selected")
    flipCard.style.pointerEvents = 'none'; 

    const currentCardId = flipCard.querySelector('.back-face').id
    const matchCard = currentCardId === oldCardId
    
    // Sempre na primeira vez que é escolhida uma carta, não 
    // entra aqui, pq oldCardId é undefined e undefined é false.
    // Se as cartas forem diferentes e existir alguma coisa em 
    // oldCardId, ele cai no if.
    if(!matchCard && oldCardId){
        setTimeout(
            function() {
            oldFlip.classList.remove("card-selected")
            oldFlip.style.pointerEvents = 'auto';

            flipCard.classList.remove("card-selected")
            flipCard.style.pointerEvents = 'auto';

            oldCardId = undefined
            oldFlip = undefined
        } , 500)
    } else if(matchCard) {
        // Entra se as cartas forem iguais
        // limpa dados da memória
        oldFlip = undefined
        oldCardId = undefined

        setTimeout(finalizarJogo, 500)
    } else {
        // Entra na primeira vez que uma carta é selecionada
        // guarda na memória novos dados
        oldFlip = flipCard
        oldCardId = currentCardId
    }

};

for(let i = 0; i < numeroCartas; i++){
    let main = document.querySelector('main')
    main.innerHTML += `
    <article onclick="flip(this)">
      <div class="card">
        <div class="front-face face">
          <img src="assets/front.png" alt="imagem-frente">
        </div>
      <div id=${giftsArr[i]} class="back-face face">
          <div class="gifs">
              <img src="assets/${giftsArr[i]}.gif" alt="gif">
          </div>
      </div>      
    </div>
  </article>`
}
