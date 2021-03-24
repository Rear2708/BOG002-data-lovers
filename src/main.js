import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';


//console.log(data.pokemon);
const arrPokemon = data.pokemon;
const menu = document.getElementById('menu');
const pokeTypeList = document.querySelector('ul');
const typePokemon = document.getElementById('type1');
const mesage = document.createElement("span");
const newfondo = document.querySelector('body');
const tiposdePokemon = document.getElementById('bienvenido');
let todosLosTiposJuntos = "";

for (let i=0; i < arrPokemon.length; i++){
    let tiposPokemon = arrPokemon[i].type[0];
    todosLosTiposJuntos = todosLosTiposJuntos  + "<br>" + tiposPokemon;
    
};
tiposdePokemon.innerHTML = todosLosTiposJuntos;

/*crear un condicional para separar por cada tipo
condicional para los tipo poison del la variable todosLosTiposJuntos
convertir todosLosTiposJuntos a un array 
luego condicionar
si  o switch/case [i] = poison
crear variable numeros = arrPokemon.num;
y los guarde dentro del li con id type1

*/



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