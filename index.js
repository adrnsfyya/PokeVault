const bgm= document.getElementById("bgm");

//sounds
const soundOn= document.getElementById("sound_on");
const soundOff = document.getElementById("sound_off");
const soundOnInvert = document.getElementById("sound_on_invert");
const soundOffInvert = document.getElementById("sound_off_invert");

//balls
const pokeBall = document.getElementById("poke_ball");
const ultraBall = document.getElementById("ultra_ball");
const body = document.body;

//initial
ultraBall.style.display = "none";
soundOff.style.display = "none";
soundOnInvert.style.display = "none";
soundOffInvert.style.display = "none";

//variables booleans
let darkMode= false;
let soundPlaying = true;

//sounds toggle
soundOn.onclick = () => {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    bgm.play();
    soundPlaying= false
};

soundOff.onclick = () => {
    soundOff.style.display = "none";
    soundOn.style.display = "block";
    bgm.pause();
    soundPlaying= true;
};

//sounds invert toggle
soundOnInvert.onclick = () => {
    soundOnInvert.style.display = "none";
    soundOffInvert.style.display = "block";
    bgm.play();
    soundPlaying= false
};

soundOffInvert.onclick = () => {
    soundOffInvert.style.display = "none";
    soundOnInvert.style.display = "block";
    bgm.pause();
    soundPlaying= true;
};

//balls toggle
pokeBall.onclick = () => {
    pokeBall.style.display = "none";
    ultraBall.style.display = "block";
    darkMode= true;

//background color change
body.style.backgroundColor = "black";

//sound icons 
if (soundPlaying) {
    soundOn.style.display = "none";
    soundOff.style.display = "none";
    soundOnInvert.style.display = "block";
    soundOffInvert.style.display = "none";
} else {
    soundOn.style.display = "none";
    soundOff.style.display = "none";
    soundOffInvert.style.display = "block";
    soundOnInvert.style.display = "none";
    }
};

ultraBall.onclick = () => { 
    ultraBall.style.display = "none";
    pokeBall.style.display = "block";
    darkMode= false;

//background color change
body.style.backgroundColor = "#2a4674";
    
//sound icons change
if (soundPlaying) {
    soundOn.style.display = "block";
    soundOff.style.display = "none";
    soundOnInvert.style.display = "none";
    soundOffInvert.style.display = "none";
} else {
    soundOn.style.display = "none";
    soundOff.style.display = "block";
    soundOffInvert.style.display = "none";
    soundOnInvert.style.display = "none";
    }
};

//next button
document.getElementById("right-arrow").onclick = function() {

currentPokemon=currentPokemon + 1;

if(currentPokemon >= pokemon.length){
currentPokemon = 0;
}
showPokemon();
};

//previous button
document.getElementById("left-arrow").onclick = function() {

currentPokemon=currentPokemon - 1;

if(currentPokemon < 0){
currentPokemon = pokemon.length - 1;
}
showPokemon();
};

//pokemon infos
const pokemon = [
{
    name: "Bulbasaur #0001", //bulbasaur 1
    color: "#73af8c",
    img: "images/bulbasaur_.png",
    type: "Type: Grass, Poison",
    height: "Height: 0.7m",
    weight: "Weight: 6.9kg",
    abilities: "Abilities: Overgrow",
    weakness: "Weakness: Fire, Ice, Flying, Psychic",
},

{
    name: "Pikachu #0025", //pikachu
    color: "#f5b33c",
    img: "images/pikachu.png",
    type: "Type: Electric",
    height: "Height: 0.3m",
    weight: "Weight: 6kg",
    abilities: "Abilities: Static",
    weakness: "Weakness: Ground",
},

{
    name: "Clefable #0036", //clefable 2
    color: "#d66468",
    img: "images/clefable.png",
    type: "Type: Fairy",
    height: "Height: 1.3m",
    weight: "Weight: 40 kg",
    abilities: "Abilities: Cute Charm, Magic Guard, Unaware",
    weakness: "Weakness: Poison, Steel",
},

{
    name:"Vileplum #0045", //vileplum
    color: "#4d3c9b",
    img: "images/vileplum.png",
    type: "Type: Grass, Poison",
    height: "Height: 0.9m",
    weight: "Weight: 18.6kg",
    abilities: "Abilities: Chlorophyll",
    weakness: "Weakness: Fire, Ice, Flying, Psychic",
},

{
    name: "Gengar #0094", //gengar 3
    color: "#665091",
    img: "images/gengar.png",
    type: "Type: Ghost, Poison",
    height: "Height: 1.3m",
    weight: "Weight: 40kg",
    abilities: "Abilities: Cursed body",
    weakness: "Weakness: Ground, Psychic, Ghost, Dark",
},

{
    name: "Vaporeon #00134", //vaporeon
    color: "#4d3b9c",
    img: "images/vaporeon.png",
    type: "Type: Water",
    height: "Height: 0.9m",
    weight: "Weight: 29kg",
    abilities: "Abilities: Water absorb",
    weakness: "Weakness: Grass, Electric",
},

{
    name: "Jolteon #0135",
    color: "#d67c52",
    img: "images/jolteon.png",
    type: "Type: Electric",
    height: "Height: 0.6m",
    weight: "Weight: 24kg",
    abilities: "Abilities: Volt absorb",
    weakness: "Weakness: Ground",
},

{
    name: "Flareon #0136", //flareon 4
    color: "#9c3128",
    img: "images/flareon.png",
    type: "Type: Fire",
    height: "Height: 0.6m",
    weight: "Weight: 40kg ",
    abilities: "Abilities: Flash fire",
    weakness: "Weakness: Water, Ground, Rock",
},

{
    name: "Dratini #0147", //dratini 5
    color: "#695e9f",
    img: "images/dratini.png",
    type: "Type: Dragon",
    height: "Height: 1.6m",
    weight: "Weight: 40kg ",
    abilities: "Abilities: Shed skin",
    weakness: "Weakness: Ice, Fairy, Dragon",
},

{
    name: "Pombon #????", //pombon tak tahu
    color: "#943d30",
    img: "images/pombon.png",
    type: "Type: ????",
    height: "Height: ????",
    weight: "Weight: ????",
    abilities: "Abilities: ????",
    weakness: "Weakness: ????",
},
];

//tukar tukar
let currentPokemon = 0;

function showPokemon(){
const p = pokemon[currentPokemon];

document.getElementById("pokemon-name").textContent = p.name;
document.getElementById("pokemon-name").style.color = p.color;
document.getElementById("pokemon-img").src = p.img;
document.getElementById("type").textContent = p.type;
document.getElementById("height").textContent = p.height;
document.getElementById("weight").textContent = p.weight;
document.getElementById("abilities").textContent = p.abilities;
document.getElementById("weakness").textContent = p.weakness;
}
// Show the first Pokémon immediately
showPokemon();