let p, k, plats
let keys = 'RIGHT,LEFT,UP,DOWN,SPACE,W,A,S,D'


const preload = function() {
    this.load.image('dg','./assets/plat-dg.png')
    this.load.image('pl','./assets/wow.png')
    this.load.image('bgg','./assets/boxeeloxeeV2.png')
    this.load.image('form','./assets/thecolorboxeeloxee.png')
}

const create = function() {
    this.add.image(0,0,'dg').setOrigin(0,0)
    
    plats = this.physics.add.staticGroup()
    plats.create(200,300,'form')

    pl = this.physics.add.sprite(100,100,'pl')
    pl.setScale(2)
    pl.setCollideWorldBounds(true)
    pl.setGravityY(1200)

    this.physics.add.collider(pl,form)

    k = this.input.keyboard.addKeys(keys)
}

function update() {
    if (k.LEFT.isDown){
    pl.setVelocityX(-400)
    }


else if (k.RIGHT.isDown) {
    pl.setVelocityX(400)
}

if (k.UP.isDown && pl.body.onFloor()) {
    pl.setVelocityY(-300)
}
}
let config = {
    width: 683,
    height: 384,
    pixelArt: true,
    scene: { preload, create, update },
    physics: { default: 'arcade'},
    }



new Phaser.Game(config)
