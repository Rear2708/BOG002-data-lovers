import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


console.log(data);


for (let i=0; i<data.pokemon.length; i++){
    console.log(data.pokemon[i].type[0]);
};


const typePokemon = document.getElementById('pokeType');
const mesage = document.createElement("span");


typePokemon.addEventListener('click',function(){
const newImg = document.getElementById('imagen');
newImg.src= "../images/203876.jpg";
});

typePokemon.addEventListener('mouseover',function(){
      mesage.innerHTML = "Aqui podras consultar los tipos de pokemon";
      mesage.style.color = "white";
      mesage.style.visibility = "visible";
      document.getElementById('pokeType').appendChild(mesage);
});

typePokemon.addEventListener('mouseout',hiddenMesage);
   function hiddenMesage(){
    mesage.style.visibility = 'hidden';
   }
