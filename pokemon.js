
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

class Pokeball {
    constructor (pokemon) {
        this.pokemon = pokemon
        this.isEmpty = false
    }

    throw(pokemon) {

    }
}

/*
Pokeball behaviours include:

being able to store a Pokemon.
throw it to catch a Pokemon.
throw it to release it for battle.
check which Pokemon is in the pokeball.

Methods

throw

Takes a Pokemon object as an argument. If the pokeball is empty it will capture the passed Pokemon.
If it isn't empty ,the user should not be allowed to capture a pokemon with it!
The throw method should also console log something like ("you caught pokemonX's name") when a Pokemon has been caught.
Additionally, the method can be invoked with no argument.
In this case the method should return the stored Pokemon. The throw method should console log something like ("GO pokemonX's name!!") in this scenario.
If the ball is empty then the user should be informed accordingly.

*/


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

/*
Pokeball behaviours include:

being able to store a Pokemon.
throw it to catch a Pokemon.
throw it to release it for battle.
check which Pokemon is in the pokeball.

Methods

throw

Takes a Pokemon object as an argument. If the pokeball is empty it will capture the passed Pokemon.
If it isn't empty ,the user should not be allowed to capture a pokemon with it!
The throw method should also console log something like ("you caught pokemonX's name") when a Pokemon has been caught.
Additionally, the method can be invoked with no argument.
In this case the method should return the stored Pokemon. The throw method should console log something like ("GO pokemonX's name!!") in this scenario.
If the ball is empty then the user should be informed accordingly.

isEmpty

Should return a boolean representing whether or not a Pokemon is stored inside it.

contains

Should return the name of the Pokemon that is stored or
If the pokeball is empty is should return "empty ...".

*/

module.exports = {Pokemon, Fire, Water, Grass, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball}