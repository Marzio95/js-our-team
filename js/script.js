//ELEMENTI HTML

const btnAddMember = document.getElementById('addMemberButton');
let inputNome = document.getElementById('name');
let inputRuolo = document.getElementById('role');
let inputImg = document.getElementById('image');

// let cartaTeamMate = document.querySelector('.team-card');
// console.log();
// let nomeTeamMate = document.querySelector('.team-card .card-text h3');
// console.log();
// let ruoloTeamMate = document.querySelector('.team-card .card-text p');
// console.log();
// let imgTeamMate = document.querySelector('.team-card .card-image img');
// console.log(imgTeamMate);
// console.dir(imgTeamMate);


const contenitoreCarte = document.querySelector('.team-container');
//CREO UN DIV UGUALE A QUELLO DELL' HTML DA APPENDERE 
// let carta = document.createElement('div');
// carta.classList.add('team-card');
// let immagine = document.createElement('div');
// immagine.classList.add('card-image');
// carta.append(immagine);
// let img = document.createElement('img');
// immagine.append(img);
// let testoCarte = document.createElement('div');
// testoCarte.classList.add('card-text');
// let nomeInLabel = document.createElement('h3');
// let ruoloInLabel = document.createElement('p');
// testoCarte.append(nomeInLabel);
// testoCarte.append(ruoloInLabel);
// carta.append(testoCarte);





//OGGETTI : TEAMMATES

const warren = {
    nome: 'Warren Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg'
}

const angela = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'img/angela-caroll-chief-editor.jpg'
}

const walter = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'img/walter-gordon-office-manager.jpg'
}

const angelaL = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'img/angela-lopez-social-media-manager.jpg'
}


const scott = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'img/scott-estrada-developer.jpg'
}


const barbara = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'img/barbara-ramos-graphic-designer.jpg'
}

 

let arrayObject = [warren, angela, walter, angelaL, scott, barbara]







//FUNZIONE APPENDI OGGETTI anche detta appendi abiti
function addTeamMates(arrObject) {

    for (let index = 0; index < arrObject.length; index++) {
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
        img.src = arrObject[index].foto;
        nomeInLabel.innerHTML = arrObject[index].nome;
        ruoloInLabel.innerHTML = arrObject[index].ruolo;
        contenitoreCarte.append(carta);
    }
}

addTeamMates(arrayObject);


//FUNZIONE APPENDI NEW MATES

function newTeamMates () {
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
    img.src = inputImg.value;
    nomeInLabel.innerHTML = inputNome.value;
    ruoloInLabel.innerHTML = inputRuolo.value;
    contenitoreCarte.append(carta);
}

btnAddMember.addEventListener('click', newTeamMates);
