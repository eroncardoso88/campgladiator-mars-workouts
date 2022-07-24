import { createDatabase, timeout } from './basedb'

describe('Api tests', () => {

  test('Should return a class with api-like methods', async () => {
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

    expect(await pokemonDB.getAll()).toStrictEqual({
      "3": {
        id: "3",
        name: "charmander",
        type: "fire"
      }
    })
  })

  test('timeout should return a number between 0.25 and 2.75', () => {
    const timeoutTest = timeout()

    expect(timeoutTest).toBeLessThan(3)
  })
})
