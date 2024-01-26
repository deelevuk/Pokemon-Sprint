const Pokeball = require('./pokeball')
const {Pokemon, Fire, Water, Grass, Normal, Charmander, Bulbasaur, Squirtle, Rattata} = require('./pokemon')

class Trainer{
    #maxBalls

    constructor(){
        this.belt = []
        this.#maxBalls = 6
        this.currentBalls = this.belt.length
        this.isFull = this.currentBalls === this.#maxBalls
    }
    catch(pokemon){
        
    }
}


module.exports = Trainer