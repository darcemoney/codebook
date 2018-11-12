new Phaser.Game({
    width: 683,
    height: 384,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{ y: 300, x: 100},
            debug: true
        }
    },
    scene: {
        preload(){
            this.load.image('bg', './assets/plat-dg.png')
            this.load.image('pr', './assets/wow.png')
        },
        create(){
            this.add.image(0,0,'bg').setOrigin(0,0)
           this.player = this.physics.add.sprite(100,100,'pr')
           this.player.setCollideWorldBounds(true)
           this.player.setBounce(10)
        }
    }
})