import hyper from '../../src/index'

window.hyper = hyper

window.Player = class {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

window.Human = class {
    constructor(name, hp) {
        this.name = name
        this.hp = hp
    }
}

window.Put = hyper([
    {
        player: Player,
        _({ player }) {
            console.log(`Name:${player.name}`)
            console.log(`HP:${player.hp}`)
        }
    }
])