import { filterType, anotherExample } from '../src/data.js';


describe('filterType', () => {
  it('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

  it('returns `example`', () => {
    const arrayData = [{
      name: "ponyta",
      type: "fire",
    },
    {
      name: "Gimena",
      type: "water"

    }]
    const arrayResultado = [{
      name: "ponyta",
      type: "fire"
    },
    {
      name: "Gimena",
      type: "water"

    }]
    expect(filterType(arrayData)).toEqual(arrayResultado);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
