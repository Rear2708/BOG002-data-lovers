

//Una funcion que filtre los tipos de pokemon


export const forType = (arrPokemon) => {
  let tiposPokemon = [];
  let todosLosTiposJuntos = [];
  for (let i=0; i < arrPokemon.length; i++){
        tiposPokemon = arrPokemon[i].type[0];
        todosLosTiposJuntos = todosLosTiposJuntos + "\n" + tiposPokemon;
    }
    return todosLosTiposJuntos;
}
/*crear un condicional para separar por cada tipo
condicional para los tipo poison del la variable todosLosTiposJuntos
convertir todosLosTiposJuntos a un array 
luego condicionar
si  o switch/case [i] = poison
crear variable numeros = arrPokemon.num;
y los guarde dentro del li con id type1

*/


export const anotherExample = () => {
  return 'OMG';
};
