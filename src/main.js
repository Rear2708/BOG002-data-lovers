import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
import { listType, filterType, upperCase, ordered } from "./data.js";

const dataPokemon = data.pokemon;
const selectType = listType(dataPokemon);
const menu = document.getElementById('menu');
const newfondo = document.querySelector('body');
const select = document.querySelector('main');
const cardPokemon = document.querySelector('#list-tipos');

menu.addEventListener('click',activePokeball);


function activePokeball() {
     const select = document.querySelector('main');
      select.innerHTML = "";
      newfondo.className="nuevoFondo";
      
      //RECORREMOS LA LISTA Y CREAMOS UNA TARJETA POR CADA UNO
      ordered(selectType);
      selectType.forEach(item => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.textContent = upperCase(item);
            div.id = item;
            img.src = `/images/pokemon-go/png/${item}.png`;
            img.alt = 'pokemon';
            document.querySelector('#list-tipos').appendChild(div).appendChild(p).appendChild(img);
            div.classList.add('div-shadow');
            div.addEventListener('click', frontCard); 

     });      
}     
function frontCard(event){
      const tipo = event.currentTarget.id;
      const arrayFiltrado = filterType(tipo,dataPokemon);
      select.className = "main-hidden";
     
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
      cardPokemon.appendChild(card).appendChild(num).appendChild(name).appendChild(about);
      cardPokemon.appendChild(card).appendChild(img);
      card.className ='card-pokemon';
      num.className = 'numPokemon';
      name.className = "namePokemon";
      about.className = "aboutPokemon";
      
      card.addEventListener('click',()=>{
            card.innerHTML="";
            const weight = document.createElement ('p');
            const height = document.createElement ('p');
            const resistant = document.createElement('div');
            const weaknesses = document.createElement('div');
            const prevEvolution = document.createElement('div');
            const candy = document.createElement('div');
            const specialAttack = document.createElement('div');

            weight.textContent=arrayFiltrado[i].size.weight;
            height.textContent=arrayFiltrado[i].size.height;
            resistant.textContent=arrayFiltrado[i].resistant;
            weaknesses.textContent=arrayFiltrado[i].weaknesses;
            candy.textContent=arrayFiltrado[i].evolution.candy;
            if (arrayFiltrado[i].evolution["prev-evolution"]!= undefined && arrayFiltrado[i].evolution["prev-evolution"].length>0){
                  prevEvolution.textContent=arrayFiltrado[i].evolution["prev-evolution"][0].name;
            } else{
                  prevEvolution.textContent="sin evoluciones previas";
            };
            if (arrayFiltrado[i]["special-attack"]!= undefined && arrayFiltrado[i]["special-attack"].length>0){
                  specialAttack.textContent=arrayFiltrado[i]["special-attack"][0].name;
            } else{
                  specialAttack.textContent="sin ataques especiales";
            };
            card.appendChild(weight).appendChild(height);
            card.appendChild(resistant).appendChild(weaknesses);
            card.appendChild(prevEvolution);
            card.appendChild(candy);
            card.appendChild(specialAttack);
       });
      }
}

