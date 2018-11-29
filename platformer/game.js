const preload = function() {
    this.load.image('dg','./assets/plat-dg.png')
    this.load.image('pl','./assets/wow.png')
}

const create = function() {
    this.add.image(0,0,'dg').setOrigin(0,0)
    this.add.image(0,0,'pl').setOrigin(0,0)
}

let config = {
    width: 683,
    height: 384,
    scene: { preload, create }
}

new Phaser.Game(config)
