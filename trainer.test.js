const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const Pokeball = require('./pokeball')
const Trainer = require('./trainer')

describe("TRAINER", () => {})
describe ("Properties", () => {
    // test("shows that the traniner class has 4 properties required ", () => {
    //     const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
    //     // console.log(eevee)
    //     expect(eevee).toHaveProperty('name')
    //     expect(eevee).toHaveProperty('hitPoints')
    //     expect(eevee).toHaveProperty('attackDamage')
    //     expect(eevee).toHaveProperty('move')
    // });
    test("belt property can store a maxium of 6 pokeballs", () => {
        const testTrainer = new Trainer
        testTrainer.belt = [{}, {}, {}, {}, {}, {}]
        console.log(testTrainer.belt.length)
        console.log(this.currentBalls)
        console.log(testTrainer.isFull, "---6 balls")
        expect(testTrainer.isFull).toBe(true)
        testTrainer.belt = [{}, {}, {}, {}, {},]
        console.log(testTrainer.isFull, "---5 balls")
        expect(testTrainer.isFull).toBe(false)
    })
    // test()

})