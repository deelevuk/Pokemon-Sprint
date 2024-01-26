const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const Pokeball = require('./pokeball')
const Trainer = require('./trainer')

describe("TRAINER", () => {
describe ("Properties", () => {
  xtest('This belt is an empty array', () => {
    const testTrainer = new Trainer
    expect(testTrainer.belt).toEqual([])
  })
    test('The array contains a pokeball', () => {
        const testTrainer = new Trainer
        const pokeball1 = new Pokeball
        testTrainer.belt.push(pokeball1)
        console.log(testTrainer.belt)
        expect(testTrainer.belt).toEqual([{ isEmptyNow: true, storage: [] }])
    })
})
})