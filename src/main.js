import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import { listType, filterType } from "./data.js";


const dataPokemon = data.pokemon;
const selectType = listType(dataPokemon);
const menu = document.getElementById('menu');
const newfondo = document.querySelector('body');


menu.addEventListener('click',activePokeball);

function activePokeball() {
     const select = document.querySelector('main');
      select.innerHTML = "";
      newfondo.style.background = "white";

      //RECORREMOS LA LISTA Y CREAMOS UNA TARJETA POR CADA UNO
      selectType.forEach(item => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = item;
      div.id = item;
      document.querySelector('#list-tipos').appendChild(div).appendChild(p);
      div.classList.add('div-shadow');

      div.addEventListener('click',mostrarPorTipo);
      
     
     
     });

      
      
}
function mostrarPorTipo(event){
      
      const tipo = event.currentTarget.id;
      const arrayFiltrado = filterType(tipo,dataPokemon);
      console.log(arrayFiltrado);
     const select = document.querySelector('main');
     select.innerHTML = "";
     newfondo.style.background = "white";
  
     for(let i = 0; i < arrayFiltrado.length; i++){
      const name = document.createElement('div');   
      const p = document.createElement('p');
      const img = document.createElement('img');
      img.textContent = arrayFiltrado[i].img;
      p.textContent = arrayFiltrado[i].name;
      document.querySelector('#list-tipos').appendChild(name).appendChild(p).appendChild(img);
      name.classList.add('card-pokemon');
      console.log(name);

}
}

  
     
     





