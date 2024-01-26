const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const Pokeball = require('./pokeball')
const Trainer = require('./trainer')

describe ("POKEBALL", () => {
    describe("Properties", () => {
        test("Pokeball has a Pokemon property", () => {
            const testPokeball = new Pokeball
            expect(testPokeball).toHaveProperty("pokemon")
        })
        
    })
    describe("Throw", () => {
        test("If the pokeball is empty it will capture the passed Pokemon.", () => {
            const testPokeball = new Pokeball
            expect(testPokeball).toHaveProperty("pokemon")    
        })
        test("If the pokeball is empty, throw will change isEmpty to false", () => {
            const testPokeball = new Pokeball
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.isEmptyNow).toBe(false)
        })
        test("that storage contains the given pokemon", () => {
            const testPokeball= new Pokeball
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.storage[0]).toBe('Bulbasaur')
        })
        test("if the function is invoked with no argument, isEmpty should remain true", () => {
            const testPokeball = new Pokeball
            testPokeball.throw()
            expect(testPokeball.isEmptyNow).toBe(true)
            // console.log is pokeball is empty
        })
        test("when invoked with no argument, should return the stored pokemon", () => {
            const testPokeball = new Pokeball
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.throw()).toBe('Bulbasaur')

        })
        test("if the pokebakll is empty and throw is invoked with no argument, should alert the user", () => {
            const testPokeball = new Pokeball
            expect(testPokeball.throw()).toBe("The pokeball is empty")
        })
    })
    describe ("isEmpty method", () => {
        test("shows isEmpty is a function", () => {
            const testPokeball = new Pokeball
            expect(typeof testPokeball.isEmpty).toBe('function')
        })
        test("returns true if pokeball is empty", () => {
            const testPokeball = new Pokeball
            expect(testPokeball.isEmpty()).toBe(true)
        });
        test("returns false if pokeball is not empty", () => {
            const testPokeball = new Pokeball
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.isEmpty()).toBe(false)
        });
    });
    describe ("contains method", () => {
        test("returns the name of the pokemon if the pokeball is not empty", () => {
            const testPokeball = new Pokeball
            testPokeball.throw('Bulbasaur')
            expect(testPokeball.contains()).toBe('Bulbasaur')
        });
        test("returns empty if pokeball is empty", () => {
            const testPokeball = new Pokeball
            expect(testPokeball.contains()).toBe('empty...')
        });
    });
})