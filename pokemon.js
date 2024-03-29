const Pokeball = require('./pokeball')

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
    constructor(name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "fire"
    }

    isEffectiveAgainst(pokemon){
        if (pokemon.type === "grass") return true ; return false   
    }

    isWeakTo(pokemon) {
        if (pokemon.type === "water") return true ; return false
    }
}

class Charmander extends Fire {
    constructor(name, hitPoints, attackDamage, move){
        super("Charmander", hitPoints, attackDamage, "ember")
        
    }
}

class Water extends Pokemon{
    constructor(name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "water"
    }
    isEffectiveAgainst(pokemon){
        if (pokemon.type === "fire") return true ; return false
    }
    isWeakTo(pokemon) {
        if (pokemon.type === "grass") return true ; return false
    }
}

class Squirtle extends Water {
    constructor(name, hitPoints, attackDamage, move){
        super('Squirtle', hitPoints, attackDamage, move = "water gun")
        
    }
}

class Grass extends Pokemon{
    constructor(name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "grass"
    }
    isEffectiveAgainst(pokemon){
        if (pokemon.type === "water") return true ; return false
    }
    isWeakTo(pokemon) {
        if (pokemon.type === "fire") return true ; return false
    }
}

class Bulbasaur extends Grass {
    constructor(name, hitPoints, attackDamage, move){
        super("Bulbasaur", hitPoints, attackDamage, "vine whip")
        
    }
}

class Normal extends Pokemon{
    constructor(name, hitPoints, attackDamage, move){
        super(name, hitPoints, attackDamage, move)
        this.type = "normal"
    }
    isEffectiveAgainst(pokemon){
        return false
    }
    isWeakTo(pokemon) {
        return false
    }
} 

class Rattata extends Normal {
    constructor(name, hitPoints, attackDamage, move){
        super("Rattata", hitPoints, attackDamage, move)
        
    }
}


module.exports = {Pokemon, Fire, Water, Grass, Normal, Charmander, Squirtle, Bulbasaur, Rattata}