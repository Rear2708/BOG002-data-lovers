//Una funcion que filtre los tipos de pokemon


export const listType = (Pokemons) => {
  let tiposPokemon = [];
  let todosLosTiposJuntos = [];
  for (let i=0; i < Pokemons.length; i++){
        tiposPokemon = Pokemons[i].type[0];
        if(todosLosTiposJuntos.includes(tiposPokemon)){
          //no hacemos nada porque ya esta incluido
        }else{
          todosLosTiposJuntos.push(tiposPokemon);
        }
       }
    return todosLosTiposJuntos;
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
export let ordenArrayObjetos = (data) =>{
  return data.sort((a,b) => (a.name > b.name) ? 1 : -1);
}

 
export function estadisticaPeso(dataPokemon){
  let pesoTodos=0;
  let pesoPromedio=0;
  for(let i=0;i< dataPokemon.length;i++){
        const peso= dataPokemon[i].size.weight;
        pesoTodos+= parseInt(peso);
        pesoPromedio= pesoTodos/i+"kg";
  }
  return pesoPromedio;
}
export function estadisticaAltura(dataPokemon){
  let alturaTodos=0;
  let alturaPromedio=0;
  for(let i=0;i< dataPokemon.length;i++){
        const altura= dataPokemon[i].size.height;
        alturaTodos+= parseInt(altura);
        alturaPromedio= alturaTodos/i+"m";
  }
  return alturaPromedio;
}
