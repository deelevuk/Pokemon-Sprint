
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
    // takeDamage
    // Will take a number and reduce its hitPoints by the number given.
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




module.exports = {Pokemon}