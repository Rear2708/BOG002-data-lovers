

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
export function upperCase(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

export function ordered(data){
  return data.sort((a,b) => a.localeCompare(b));
}
