const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')
const Trainer = require('./trainer')

class Pokeball {
    constructor (pokemon) {
        this.isEmptyNow = true
        this.storage = []
    }

    throw(pokemon) {
        if(this.isEmptyNow === true && pokemon !== undefined){
            this.isEmptyNow = false
            this.storage.push(pokemon)
            console.log(`You caught ${pokemon}!`)
        }
        if (this.isEmptyNow === false && pokemon === undefined){
            console.log(`Go ${this.storage[0]}!`)
            return this.storage[0]
        }
        if (this.isEmptyNow === true && pokemon === undefined){
            console.log(`The pokeball is empty`)
            return 'The pokeball is empty'
        }
    }
    isEmpty(){
        return this.isEmptyNow
    }
    contains(){
        return this.isEmptyNow ? "empty..." : this.storage[0]
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

module.exports = Pokeball