import { filterType, upperCase, listType, ordered } from '../src/data.js';


describe('realiza un filtro de cada tipo de pokemon creando un set de 17 tipos en total', () => {
  it('is a function', () => {
    expect(typeof listType).toBe('function');
  });
  it('reortna array tipos de pokemon', () => {
    const tiposPokemon = [{
      name: "ponyta",
      type: ["fire"]
    },
    {
      name: "metapod",
      type: ["bug"]

    },
    {
      name: "Hounduor",
      type: ["dark"]

    }]
    const todosJuntos = ["fire","bug","dark"]
    expect(listType(tiposPokemon)).toEqual(todosJuntos);
  });
});
  
describe('upperCase', () => {
  it('is a function', () => {
    expect(typeof upperCase).toBe('function');
  });

  it('`pikachu` return ` Pikachu`', () => {
    expect(upperCase('pikachu')).toBe('Pikachu');
  });

});
describe('Filtra la data mostrando solo los pokemon que pertenecen al tipo seleccionado', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('Fire retorna ponyta', () => {
    const arrayData = [{
      name: "ponyta",
      type: ["fire"]
    },
    {
      name: "metapod",
      type: ["bug"]

    }]
    const arrayResultado = [{
      name: "ponyta",
      type: ["fire"]
    },
    ]
    expect(filterType('fire',arrayData)).toEqual(arrayResultado);
  });
});

describe('ordenar alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof ordered).toBe('function');
  });

  it('"fire","bug","dark" return "bug","dark","fire"', () => {

    const todosJuntos = ["fire","bug","dark"]
    const ordenados = ['bug','dark','fire']

    expect(ordered(todosJuntos)).toEqual(ordenados);
  });

})