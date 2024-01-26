const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const Pokeball = require('./pokeball')
const Trainer = require('./trainer')

describe("POKEMON", () => {
    describe ("Properties", () => {
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
    describe ("Methods", () => {
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
    test("returns the attackDamage when useMove is invoked ", () => {
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
})
describe("TYPE", () => {
    describe ("Fire", () => {
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
    describe ("Water", () => {
    describe("Properties", () => {
        test("should extend Pokemon class", () => {
            const testPoke = new Water()
            expect(testPoke).toBeInstanceOf(Pokemon)
        });
        test("should have a property of type with a value of water", () => {
            const testPoke = new Water()
            expect(testPoke).toHaveProperty('type')
            expect(testPoke.type).toBe('water')
        })
    })
    describe("isEffectiveAgainst", () => {
        test("should return true when compared to pokemon with type fire", () => {
            const testWater = new Water()
            const testFire = new Fire()
            expect(testWater.isEffectiveAgainst(testFire)).toBe(true)
        })
        test("should return false when compared to pokemon with type normal", () => {
            const testWater = new Water()
            const testNormal = new Normal()
            expect(testWater.isEffectiveAgainst(testNormal)).toBe(false)
        })
    })
    describe("isWeakTo", () => {
        test("should return true when compared to pokemon with type water", () => {
            const testWater = new Water()
            const testGrass= new Grass()
            expect(testWater.isWeakTo(testGrass)).toBe(true)
        })
        test("should return false when compared to pokemon with type normal", () => {
            const testWater = new Water()
            const testNormal = new Normal()
            expect(testWater.isWeakTo(testNormal)).toBe(false)
        })
    })

    });
    describe ("Grass", () => {
    describe("Properties", () => {
        test("should extend Pokemon class", () => {
            const testPoke = new Grass()
            expect(testPoke).toBeInstanceOf(Pokemon)
        });
        test("should have a property of type with a value of grass", () => {
            const testPoke = new Grass()
            expect(testPoke).toHaveProperty('type')
            expect(testPoke.type).toBe('grass')
        })
    })
    describe("isEffectiveAgainst", () => {
        test("should return true when compared to pokemon with type fire", () => {
            const testGrass = new Grass()
            const testWater = new Water()
            expect(testGrass.isEffectiveAgainst(testWater)).toBe(true)
        })
        test("should return false when compared to pokemon with type normal", () => {
            const testGrass = new Grass()
            const testNormal = new Normal()
            expect(testGrass.isEffectiveAgainst(testNormal)).toBe(false)
        })
    })
    describe("isWeakTo", () => {
        test("should return true when compared to pokemon with type water", () => {
            const testGrass = new Grass()
            const testFire= new Fire()
            expect(testGrass.isWeakTo(testFire)).toBe(true)
        })
        test("should return false when compared to pokemon with type normal", () => {
            const testGrass = new Grass()
            const testNormal = new Normal()
            expect(testGrass.isWeakTo(testNormal)).toBe(false)
        })
    })

    });
    describe ("Normal", () => {
    describe("Properties", () => {
        test("should extend Pokemon class", () => {
            const testPoke = new Normal()
            expect(testPoke).toBeInstanceOf(Pokemon)
        });
        test("should have a property of type with a value of grass", () => {
            const testPoke = new Normal()
            expect(testPoke).toHaveProperty('type')
            expect(testPoke.type).toBe('normal')
        })
    })
    describe("isEffectiveAgainst", () => {
        test("should return false when compared to any other type", () => {
            const testNormal = new Normal()
            const testWater = new Water()
            expect(testNormal.isEffectiveAgainst(testWater)).toBe(false)
            const testFire = new Fire()
            expect(testNormal.isEffectiveAgainst(testFire)).toBe(false)
            const testGrass = new Grass()
            expect(testNormal.isEffectiveAgainst(testGrass)).toBe(false)
        })
    })
    describe("isWeakTo", () => {
        test("should return false when compared to any other type", () => {
            const testNormal = new Normal()
            const testWater = new Water()
            expect(testNormal.isEffectiveAgainst(testWater)).toBe(false)
            const testFire = new Fire()
            expect(testNormal.isEffectiveAgainst(testFire)).toBe(false)
            const testGrass = new Grass()
            expect(testNormal.isEffectiveAgainst(testGrass)).toBe(false)
        })
    })

    });
})
describe("SPECIES", () => {
    describe ("Charmander", () => {
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
    describe ("Squirtle", () => {
        describe("Properties", () => {
            test("should extend Water class", () => {
                const testPoke = new Squirtle()
                expect(testPoke).toBeInstanceOf(Pokemon)
                expect(testPoke).toBeInstanceOf(Water)
            })
            test("should contain expected values for Squirtle", () => {
                const testPoke = new Squirtle()
                expect(testPoke.name).toBe('Squirtle')
                expect(testPoke.type).toBe('water')
                expect(testPoke.move).toBe('water gun')
            })
        })
        })
    describe ("Bulbasaur", () => {
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
    describe ("Rattata", () => {
        describe("Properties", () => {
            test("should extend Normal class", () => {
                const testPoke = new Rattata()
                expect(testPoke).toBeInstanceOf(Pokemon)
                expect(testPoke).toBeInstanceOf(Normal)
            })
            test("should contain expected values for Rattata", () => {
                const testPoke = new Rattata()
                expect(testPoke.name).toBe('Rattata')
                expect(testPoke.type).toBe('normal')
                expect(testPoke.move).toBe('tackle')
            })
        })
        })
})
