

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
 export function estadisticaPeso(data){
       let sumaPeso = 0;
       let promedio = 0 
      for(let i= 0; i < data.length; i++){
          const peso = data[i].size.weight;
           sumaPeso += parseInt(peso);
           promedio = sumaPeso/i + " kg";
       }
        
         return promedio;
  }

  export function estadisticaAltura(data){
    let sumaAltura = 0;
    let promedio = 0 
   for(let i= 0; i < data.length; i++){
       const altura = data[i].size.height;
        sumaAltura += parseInt(altura);
        promedio = sumaAltura/i + " m";
    }
     
      return promedio;
}