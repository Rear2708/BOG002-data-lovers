import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import { listType, filterType, filterIcono } from "./data.js";

const dataPokemon = data.pokemon;
const selectType = listType(dataPokemon);
const menu = document.getElementById('menu');
const newfondo = document.querySelector('body');


menu.addEventListener('click',activePokeball);

function activePokeball() {
     const select = document.querySelector('main');
      select.innerHTML = "";
      newfondo.className="nuevoFondo";

      //RECORREMOS LA LISTA Y CREAMOS UNA TARJETA POR CADA UNO
      selectType.forEach(item => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      const img = document.createElement('img');
      p.textContent = item;
      div.id = item;
      img.src = filterIcono;
      document.querySelector('#list-tipos').appendChild(div).appendChild(p).appendChild(img);
      div.classList.add('div-shadow');
      div.addEventListener('click',mostrarPorTipo);
     });      
}     console.log(filterIcono)
function mostrarPorTipo(event){
      
      const tipo = event.currentTarget.id;
      const arrayFiltrado = filterType(tipo,dataPokemon);
      console.log(arrayFiltrado);
     const select = document.querySelector('main');
     select.innerHTML = "";
     newfondo.className="nuevoFondo";
     for(let i = 0; i < arrayFiltrado.length; i++){     
      const card = document.createElement('div'); 
      const num = document.createElement('p');  
      const name = document.createElement('p');
      const img = document.createElement('img');
      const about = document.createElement('p');
      img.src = arrayFiltrado[i].img;
      name.textContent = arrayFiltrado[i].name;
      num.textContent = arrayFiltrado[i].num;
      about.textContent = arrayFiltrado[i].about;
      document.querySelector('#list-tipos').appendChild(card).appendChild(num).appendChild(name).appendChild(about);
      document.querySelector('#list-tipos').appendChild(card).appendChild(img);
      card.classList.add('card-pokemon');
      console.log(name);
      }
}
