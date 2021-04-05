//Una funcion que filtre los tipos de pokemon


export const listType = (Pokemons) => {
  let tiposPokemon = [];
  let todosLosTiposJuntos = [];
  for (let i=0; i < Pokemons.length; i++){
        tiposPokemon = Pokemons[i].type[0];
        todosLosTiposJuntos.push(tiposPokemon);

       }
    return [...new Set (todosLosTiposJuntos)];
}
export const filterType = (tipo, Pokemons) => {
  return Pokemons.filter(Pokemon => Pokemon.type[0] === tipo);

}

export const imageType=[
  {name:"bug", img:"/images/pokemon-go/png/bug.png"},
  {name:"dark",img:"/images/pokemon-go/png/dark.png"},
  {name:"dragon",img:"/images/pokemon-go/png/dragon.png"},
  {name:"electric",img:"/images/pokemon-go/png/electric.png"},
  {name:"fairy",img:"/images/pokemon-go/png/fairy.png"},
  {name:"fighting",img:"/images/pokemon-go/png/fighting.png"},
  {name:"fire",img:"/images/pokemon-go/png/fire.png"},
  {name:"ghost",img:"/images/pokemon-go/png/ghost.png"},
  {name:"grass",img:"/images/pokemon-go/png/grass.png"},
  {name:"ground",img:"/images/pokemon-go/png/ground.png"},
  {name:"ice",img:"/images/pokemon-go/png/ice.png"},
  {name:"normal",img:"/images/pokemon-go/png/normal.png"},
  {name:"poison",img:"/images/pokemon-go/png/poison.png"},
  {name:"psychic",img:"/images/pokemon-go/png/psychic.png"},
  {name:"rock",img:"/images/pokemon-go/png/rock.png"},
  {name:"steel",img:"/images/pokemon-go/png/steel.png"},
  {name:"water",img:"/images/pokemon-go/png/water.png"},
];
export const filterIcono = (tipo, imageType) => {
  return imageType.filter(imageType => imageType.name === tipo);
}
