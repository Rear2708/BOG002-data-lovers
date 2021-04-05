
import data from './data/pokemon/pokemon.js';
import { listType, filterType, upperCase, ordered } from "./data.js";

const dataPokemon = data.pokemon;
const menu = document.getElementById('menu');
const newfondo = document.querySelector('body');
const select = document.querySelector('main');
const cardPokemon = document.querySelector('#list-tipos');

menu.addEventListener('click',newMain);
menu.addEventListener('click',activePokeball);

function activePokeball() {
    
      //RECORREMOS LA LISTA Y CREAMOS UNA TARJETA POR CADA UNO
      const selectType = listType(dataPokemon);
      ordered(selectType);
      selectType.forEach(item => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = item;
      div.id = item;
      document.querySelector('#list-tipos').appendChild(div).appendChild(p);
      div.classList.add('div-shadow');

      div.addEventListener('click',newMain);
      div.addEventListener('click',frontCard);
      
});

}

function frontCard(event){
      
      const tipo = event.currentTarget.id;
      const arrayFiltrado = filterType(tipo,dataPokemon);
      select.className = "main-hidden";
      
  
     for(let i = 0; i < arrayFiltrado.length; i++){
      
      const card = document.createElement('div');   
      const name = document.createElement('p');
      const num = document.createElement('p');
      const img = document.createElement('img');
      const about = document.createElement('p');
      about.textContent = arrayFiltrado[i].about;
      img.src = arrayFiltrado[i].img;
      num.textContent = arrayFiltrado[i].num;
      name.textContent = upperCase(arrayFiltrado[i].name);
      cardPokemon.appendChild(card).appendChild(num).appendChild(name).appendChild(about);
      cardPokemon.appendChild(card).appendChild(img);
      card.className ='card-pokemon';
      num.className = 'numPokemon';
      name.className = "namePokemon";
      about.className = "aboutPokemon";

      }
}
function newMain(){
      
      select.innerHTML = "";
      newfondo.className="nuevoFondo";
      
}
ordered(frontCard);
/* function backCard(event){
      const tipo = event.currentTarget.id;
      const arrayFiltrado = filterType(tipo,dataPokemon);
      
  
     for(let i = 0; i < arrayFiltrado.length; i++){
      const backCard = document.createElement('div'); 
      const weight= document.createElement('p');
      const height = document.createElement('p');
      const resistant = document.createElement('div');
      const weaknesses = document.createElement('div');
      const prevEvolution = document.createElement('div');
      const evolution = document.createElement('div');
      const specialAttack = document.createElement('div');
      weight.textContent = arrayFiltrado[i].weight;
      height.textContent = arrayFiltrado[i].height;
      
      cardPokemon.appendChild(backCard).appendChild(weight).appendChild(height);
     cardPokemon.appendChild(backCard).appendChild(resistant).appendChild(weaknesses).appendChild(prevEvolution);
      cardPokemon.appendChild(evolution).appendChild(specialAttack);


      
}  */

  
     
     





