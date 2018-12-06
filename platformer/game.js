let p, k
let keys = 'RIGHT,LEFT,UP,DOWN,SPACE,W,A,S,D'


const preload = function() {
    this.load.image('dg','./assets/plat-dg.png')
    this.load.image('pl','./assets/wow.png')
}

const create = function() {
    this.add.image(0,0,'dg').setOrigin(0,0)
    pl = this.physics.add.sprite(100,100,'pl')
    pl.setScale(2)
    pl.setCollideWorldBounds(true)



    k = this.input.keyboard.addKeys(keys)
}

function update() {
    if (k.LEFT.isDown){
    pl.setVelocityX(-400)
    }


else if (k.RIGHT.isDown) {
    pl.setVelocityX(400)
}

if (k.UP.isDown) {
    pl.setVelocityY(-300)
}
}
let config = {
    width: 683,
    height: 384,
    pixelArt: true,
    scene: { preload, create, update },
    physics: {
        default: 'arcade',
        arcade: { 
            gravity:{ y: 300},
            debug: false
        }
    },
}


new Phaser.Game(config)
