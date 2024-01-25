const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata, Pokeball} = require('./pokemon')

describe ("Pokemon: Properties", () => {
    test("shows that the Pokemon classes has 4 properties required ", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        // console.log(eevee)
        expect(eevee).toHaveProperty('name')
        expect(eevee).toHaveProperty('hitPoints')
        expect(eevee).toHaveProperty('attackDamage')
        expect(eevee).toHaveProperty('move')
    });
    test("check that hitPoints property is a number", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        expect(typeof eevee.hitPoints).toBe('number')
    })
    test("check that attackDamage property is a number", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        expect(typeof eevee.attackDamage).toBe('number')
    })
    test("shows that the move property defaults to tackle", () => {
        const eevee = new Pokemon("Eevee", 55, 18,)
        expect(eevee.move).toBe("tackle")
    })
});
describe ("Pokemon: Methods", () => {
    test("check that takeDamage is a function", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        //act
        const ouput = eevee.takeDamage()
        expect(typeof eevee.takeDamage).toBe('function')
    });
    test("shows that the hitPoints reduces by the number given", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        expect(eevee.takeDamage(20)).toBe(35)
    })
    test("reduces hitPoints when takeDamage invoked twice", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        eevee.takeDamage(20)
        eevee.takeDamage(20)
        expect(eevee.hitPoints).toBe(15)
    })
    test("returns the attackDamage when invoked ", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        const actual = eevee.useMove()
        expect(actual).toBe(18)
    })
    // test("defines the moved used on console log when invoked", () => {
    //     const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
    //     eevee.useMove()
    //     const consoleSpy = jest.spyOn(console, 'log')
    //     expect(consoleSpy).toHaveBeenCalledTimes(1)
    //     expect(consoleSpy).toHaveBeenCalledWith('Eevee used Headbutt')
    // })
    test("return true when the hitpoints are zero", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        eevee.takeDamage(55)
        expect(eevee.hitPoints).toBe(0)
        expect(eevee.hasFainted()).toBe(true)
    })
    test("return false when the hitpoints are not zero", () => {
        const eevee = new Pokemon("Eevee", 55, 18, "Headbutt")
        eevee.takeDamage(20)
        expect(eevee.hitPoints).toBe(35)
        expect(eevee.hasFainted()).toBe(false)
    })
});
describe ("Type: Fire", () => {
    describe("Properties", () => {
        test("should extend Pokemon class", () => {
            const testPoke = new Fire()
            expect(testPoke).toBeInstanceOf(Pokemon)
        });
        test("should have a property of type with a value of fire", () => {
            const testPoke = new Fire()
            expect(testPoke).toHaveProperty('type')
            expect(testPoke.type).toBe('fire')
        })
    })
    describe("isEffectiveAgainst", () => {
        test("should return true when compared to pokemon with type grass", () => {
            const testFire = new Fire()
            const testGrass = new Grass()
            expect(testFire.isEffectiveAgainst(testGrass)).toBe(true)
        })
        test("should return false when compared to pokemon with type water", () => {
            const testFire = new Fire()
            const testWater = new Water()
            expect(testFire.isEffectiveAgainst(testWater)).toBe(false)
        })
    })
    describe("isWeakTo", () => {
        test("should return true when compared to pokemon with type water", () => {
            const testFire = new Fire()
            const testWater = new Water()
            expect(testFire.isWeakTo(testWater)).toBe(true)
        })
        test("should return false when compared to pokemon with type grass", () => {
            const testFire = new Fire()
            const testGrass = new Grass()
            expect(testFire.isWeakTo(testGrass)).toBe(false)
        })
    })

});
describe ("Type: Charmander", () => {
    describe("Properties", () => {
        test("should extend Fire class", () => {
            const testPoke = new Charmander()
            expect(testPoke).toBeInstanceOf(Pokemon)
            expect(testPoke).toBeInstanceOf(Fire)
        })
        test("should contain expected values for Charmander", () => {
            const testPoke = new Charmander()
            expect(testPoke.name).toBe('Charmander')
            expect(testPoke.type).toBe('fire')
            expect(testPoke.move).toBe('ember')
        })
    })
})
describe ("Type: Bulbasaur", () => {
    describe("Properties", () => {
        test("should extend Grass class", () => {
            const testPoke = new Bulbasaur()
            expect(testPoke).toBeInstanceOf(Pokemon)
            expect(testPoke).toBeInstanceOf(Grass)
        })
        test("should contain expected values for Bulbasaur", () => {
            const testPoke = new Bulbasaur()
            expect(testPoke.name).toBe('Bulbasaur')
            expect(testPoke.type).toBe('grass')
            expect(testPoke.move).toBe('vine whip')
        })
    })
})
describe ("Pokeball", () => {
    describe("Pokeball: Properties", () => {
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
        
    })
})