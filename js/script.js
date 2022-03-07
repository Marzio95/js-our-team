//ELEMENTI HTML
const contenitoreCarte = document.querySelector('.team-container');
let cartaTeamMate = document.querySelector('.team-card');
console.log();
let nomeTeamMate = document.querySelector('.team-card .card-text h3');
console.log();
let ruoloTeamMate = document.querySelector('.team-card .card-text p');
console.log();
let imgTeamMate = document.querySelector('.team-card .card-image img');
console.log(imgTeamMate);
console.dir(imgTeamMate);

//CREO UN DIV UGUALE A QUELLO DELL' HTML DA APPENDERE 
let carta = document.createElement('div');
carta.classList.add('team-card');
let immagine = document.createElement('div');
immagine.classList.add('card-image');
carta.append(immagine);
let img = document.createElement('img');
immagine.append(img);
let testoCarte = document.createElement('div');
testoCarte.classList.add('card-text');
let nomeInLabel = document.createElement('h3');
let ruoloInLabel = document.createElement('p');
testoCarte.append(nomeInLabel);
testoCarte.append(ruoloInLabel);
carta.append(testoCarte);






//OGGETTI : TEAMMATES
const warren = {
    nome: 'Warren Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
}

function addTeamMates(obj){
    img.src = obj.foto;
    nomeInLabel.innerHTML = obj.nome;
    ruoloInLabel.innerHTML = obj.ruolo;
    contenitoreCarte.append(carta);
}

addTeamMates(warren);