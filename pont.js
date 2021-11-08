let numeroCartas = prompt("Numero de cartas:");
let arrGifs = ['bobrossparrot', 
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'];

    
    
while(numeroCartas < 4 || numeroCartas > 14 || numeroCartas % 2 !== 0 ){
        numeroCartas = prompt("Numero de cartas:");
}
    
    let giftsarr = arrGifs.slice(0, numeroCartas/2);
    giftsarr = giftsarr.concat(giftsarr);
    
    giftsarr.sort(comparador);

for(let i = 0; i < numeroCartas; i++){
    let main = document.querySelector('main')
    main.innerHTML += `
    <article>
    <div class="card" onclick="flip(this)">
      <div class="front-face face">
        <img src="assets/front.png" alt="imagem-frente">
      </div>
      <div class="back-face face">
        <div class="gifs">
          <ul>
            <li><img src="assets/${giftsarr[i]}.gif" alt="gif"></li>
          </ul>
        </div>
      </div>
    </div>
  </article>`
}

function comparador() { 
	return Math.random() - 0.5; 
}


function flip(flipCard){
    flipCard.classList.toggle("card-selected")
}

// function flip(card){

//    let front = card.children[0]
//    let back = card.children[1]
//    console.log(front, back)

//    front.classList.toggle('flip-front-up');
//    back.classList.toggle('flip-back-up');
// }
