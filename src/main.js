import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


console.log(data);


for (let i=0; i<data.pokemon.length; i++){
    console.log(data.pokemon[i].type[0]);
};
const menu = document.getElementById('menu');
const pokeTypeList = document.querySelector('ul');
const typePokemon = document.getElementById('type1');
const mesage = document.createElement("span");
const newfondo = document.querySelector('body');


menu.addEventListener('click',()=>{pokeTypeList.style.visibility = "visible";});  


typePokemon.addEventListener('mouseover',function(){
      mesage.innerHTML = "pokemon poison";
      mesage.style.color = "black";
      mesage.style.visibility = "visible";
      document.getElementById('type1').appendChild(mesage);
});

typePokemon.addEventListener('mouseout',hiddenMesage);
   function hiddenMesage(){
    mesage.style.visibility = 'hidden';
   }

   typePokemon.addEventListener('click',()=>{newfondo.style.backgroundImage = "url(../images/531970.jpg)";
});