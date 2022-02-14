const { queryString, parse } = require('./queryString');

//agrupar casos de teste dentro de uma mesma suite, usando o describe
describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Marcelo',
      role: 'engineer',
    };

    expect(queryString(obj)).toBe('name=Marcelo&role=engineer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Marcelo',
      role: 'engineer',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe(
      'name=Marcelo&role=engineer&abilities=JS,TDD',
    );
  });

  it('should throw an error when an object is passed', () => {
    const obj = {
      name: 'Marcelo',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to an object', () => {
    const qs = 'name=Marcelo&role=developer';

    expect(parse(qs)).toEqual({
      name: 'Marcelo',
      role: 'developer',
    });
  });

  it('should convert a query of single key-value pair', () => {
    const qs = 'name=Marcelo';

    expect(parse(qs)).toEqual({
      name: 'Marcelo',
    });
  });

  it('should convert a query stringo to an object taking care of comma separated values ', () => {
    const qs = 'name=Marcelo&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Marcelo',
      abilities: ['JS', 'TDD'],
    });
  });
});
