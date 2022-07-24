import { createDatabase } from './basedb'

describe('Api tests', () => {

  test('Should return a class with api-like methods', () => {
    interface Pokemon {
      type: string;
      name: string;
      id: string;
    }

    const PokemonDB = createDatabase<Pokemon>()
    const pokemonDB = new PokemonDB()

    pokemonDB.set({
      name: "charmander",
      type: 'fire',
      id: "3"
    })

    expect(pokemonDB.getAll()).toStrictEqual({
      "3": {
        id: "3",
        name: "charmander",
        type: "fire"
      }
    })
  })
})
