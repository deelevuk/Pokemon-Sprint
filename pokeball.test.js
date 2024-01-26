const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const {Pokeball, Trainer} = require('./pokeball')

describe ("POKEBALL", () => {
    describe("Properties", () => {
        
    })
    describe("Throw", () => {
      
        test("If the pokeball is empty, throw will change isEmpty to false", () => {
            const testPokeball = new Pokeball()
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.isEmptyNow).toBe(false)
        })
        test("that storage contains the given pokemon", () => {
            const testPokeball= new Pokeball()
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.storage[0]).toBe('Bulbasaur')
        })
        test("if the function is invoked with no argument, isEmpty should remain true", () => {
            const testPokeball = new Pokeball()
            testPokeball.throw()
            expect(testPokeball.isEmptyNow).toBe(true)
            // console.log is pokeball is empty
        })
        test("when invoked with no argument, should return the stored pokemon", () => {
            const testPokeball = new Pokeball()
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.throw()).toBe('Bulbasaur')

        })
        test("if the pokebakll is empty and throw is invoked with no argument, should alert the user", () => {
            const testPokeball = new Pokeball()
            expect(testPokeball.throw()).toBe("The pokeball is empty")
        })
    })
    describe ("isEmpty method", () => {
        test("shows isEmpty is a function", () => {
            const testPokeball = new Pokeball()
            expect(typeof testPokeball.isEmpty).toBe('function')
        })
        test("returns true if pokeball is empty", () => {
            const testPokeball = new Pokeball()
            expect(testPokeball.isEmpty()).toBe(true)
        });
        test("returns false if pokeball is not empty", () => {
            const testPokeball = new Pokeball()
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.isEmpty()).toBe(false)
        });
    });
    describe ("contains method", () => {
        test("returns the name of the pokemon if the pokeball is not empty", () => {
            const testPokeball = new Pokeball()
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.contains()).toBe('Bulbasaur')
        });
        test("returns empty if pokeball is empty", () => {
            const testPokeball = new Pokeball()
            expect(testPokeball.contains()).toBe('empty...')
        });
    });
})
describe.only ("TRAINER", () => {
    test("belt has 6 pokeballs in", () => {
        const testTrainer = new Trainer()
        
        expect(testTrainer.belt).toEqual([
             {isEmptyNow: true, storage: [] },
             {isEmptyNow: true, storage: [] },
             {isEmptyNow: true, storage: [] },
             {isEmptyNow: true, storage: [] },
             {isEmptyNow: true, storage: [] },
             {isEmptyNow: true, storage: [] }
          ])
    });
    test("if the pokeball is empty, put the pokemon in to the storage", () => {
        const testTrainer = new Trainer()
        testTrainer.catch('Bulbasaur')
        expect(testTrainer.belt[0].storage).toEqual(["Bulbasaur"])
    })
    test("When catch is invoked, finds the first available empty pokeball and using Throw puts the pokemon in that pokeball storage", () => {
        const testTrainer = new Trainer()
        testTrainer.catch('Bulbasaur')
        console.log(testTrainer.belt)
        expect(testTrainer.belt[0].storage).toEqual(["Bulbasaur"])
    })
});