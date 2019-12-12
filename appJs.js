var galleryImg = document.getElementsByTagName('button');
console.log(galleryImg);
for(let i = 0; i < galleryImg.length; i++) {
  galleryImg[i].addEventListener('click', function(e) {
    document.getElementById('yo').src=`./assets/img/${e.currentTarget.dataset.v}.png`;
    let eleccion = e.currentTarget.dataset.v
    let opciones = ['tijera','piedra','papel'];
    let opPc = opciones[Math.floor(Math.random() * 3)];
    document.getElementById('pc').src=`./assets/img/${opPc}.png`;
    if(eleccion == opPc) 
      document.getElementById('resultado').innerHTML = `<b>Empate</b> los dos sacaron <b>${eleccion}</b>`;
     else if ((eleccion == "tijera" && opPc == "papel") || (eleccion == "papel" && opPc == "piedra") || (eleccion == "piedra" && opPc == "tijera")) 
       document.getElementById('resultado').innerHTML = `<b>Ganaste</b> sacando <b>${eleccion}</b> contra <b>${opPc}</b>`;
      else 
      document.getElementById('resultado').innerHTML = `<b>Perdiste</b> sacando <b>${eleccion}</b> contra <b>${opPc}</b>`;
  }
  )
 
}










