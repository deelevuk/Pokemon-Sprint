const {Pokemon} = require('./pokemon')

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