import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import { listType, filterType } from "./data.js";


const dataPokemon = data.pokemon;
const selectType = listType(dataPokemon);
console.log(listType(dataPokemon));
const menu = document.getElementById('menu');
const newfondo = document.querySelector('body');


menu.addEventListener('click',activePokeball);

function activePokeball() {
     const select = document.querySelector('main');
      select.innerHTML = "";
      select.classList.add('main');
      console.log(select);

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
      const select = document.querySelector('main');
      select.innerHTML = "";
      
  
     for(let i = 0; i < arrayFiltrado.length; i++){
      const card = document.createElement('div');   
      const name = document.createElement('p');
      const num = document.createElement('p');
      const img = document.createElement('img');
      const about = document.createElement('p');
      about.textContent = arrayFiltrado[i].about;
      img.src = arrayFiltrado[i].img;
      num.textContent = arrayFiltrado[i].num;
      name.textContent = arrayFiltrado[i].name;
      document.querySelector('#list-tipos').appendChild(card).appendChild(img);
      document.querySelector('#list-tipos').appendChild(card).appendChild(name).appendChild(num).appendChild(about);
      card.classList.add('card-pokemon');
     

}
}

  
     
     





