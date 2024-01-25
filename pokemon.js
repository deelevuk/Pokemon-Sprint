
// Pokemon General
// Type
// Specific Pokemon

class Pokemon {
    constructor (name, hitPoints, attackDamage, move = "tackle")
    {
        this.name = name
        this.hitPoints = hitPoints
        this. attackDamage = attackDamage
        this.move = move
        
    }

    takeDamage(damage){
        // console.log(this.hitPoints, "--- before damage");
        this.hitPoints -= damage
        // console.log(this.hitPoints, "---after damage");
        return this.hitPoints
    }
    useMove(){
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage
    }
    hasFainted(){
        if (this.hitPoints === 0) return true ; return false
    }
}

class Fire extends Pokemon{
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move = "tackle")
        this.type = "fire"
    }
    isEffectiveAgainst(pokemon){
        if (pokemon.type === grass) return true ; return false
        
    }
}
class Water extends Pokemon{
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move = "tackle")
        this.type = "water"
    }
}
class Grass extends Pokemon{
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move = "tackle")
        this.type = "grass"
    }
}
class Normal extends Pokemon{
    constructor(name, hitPoints, attackDamage, move = "tackle"){
        super(name, hitPoints, attackDamage, move = "tackle")
        this.type = "normal"
    }
} 



module.exports = {Pokemon, Fire, Water, Grass, Normal}