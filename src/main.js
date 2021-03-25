import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import { forType } from "./data.js";


const arrPokemon = data.pokemon;
console.log(forType(arrPokemon));

const menu = document.getElementById('menu');
const pokeTypeList = document.querySelector('ul');
const typePokemon = document.getElementById('type1');
const mesage = document.createElement("span");
const newfondo = document.querySelector('body');


menu.addEventListener('click',()=>{pokeTypeList.style.visibility = "visible";});  


typePokemon.addEventListener('mouseover',function(){
      mesage.innerHTML = "Buscar por tipo";
      mesage.style.color = "black";
      mesage.style.visibility = "visible";
      document.getElementById('type1').appendChild(mesage);
});

typePokemon.addEventListener('mouseout',hiddenMesage);
   function hiddenMesage(){
    mesage.style.visibility = 'hidden';
   }

   typePokemon.addEventListener('click',()=>{
       document.querySelector('main').innerHTML = "";
       newfondo.style.backgroundImage = "url(../images/531970.jpg)";
       const containerType = document.createElement('div');
       const lista = document.createTextNode(forType(arrPokemon));
       containerType.appendChild(lista);
       document.body.appendChild(containerType);
});

