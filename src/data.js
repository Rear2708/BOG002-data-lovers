

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



export const anotherExample = () => {
  return 'OMG';
};
