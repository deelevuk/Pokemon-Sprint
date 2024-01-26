const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')

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

class Trainer{

    constructor(){
        this.belt = [new Pokeball(), 
            new Pokeball(), 
            new Pokeball(), 
            new Pokeball(), 
            new Pokeball(), 
            new Pokeball()]
        
        console.log(this.belt)
    }
    catch(pokemon){
        
            this.belt.forEach((currentBall) => {
                if (currentBall.isEmptyNow === true){
                    currentBall.throw(pokemon)    
                }
        }
            // if (this.belt[0].isEmptyNow === true){
            //     this.belt[0].storage.push(pokemon)
            // }
    )}
}

/*
catch

Takes a Pokemon as an argument.
It should use one of its empty Pokeball's throw method to catch the Pokemon.
Should do something if you don't have any empty Pokeballs, what and how is up to you.

*/

module.exports = {Pokeball, Trainer}