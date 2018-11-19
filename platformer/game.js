let pr, curs

new Phaser.Game({
    width: 683,
    height: 384,
    physics: {
        default: 'arcade',
        arcade: {
            gravity:{ y: 300},
            debug: false
        }
    },
    scene: {
        preload(){
            this.load.image('bg', './assets/plat-dg.png')
            this.load.image('pr', './assets/wow.png')
        },
        create(){
            this.add.image(0,0,'bg').setOrigin(0,0)
           pr = this.physics.add.sprite(100,100,'pr')
           pr.setCollideWorldBounds(true)
           pr.setBounce(0.5)
           pr.setDragX(900)

           curs = this.input.keyboard.createCursorKeys()
        },

        update() {
            if (curs.left.isDown) {
                pr.setVelocityX(-200)
            }   else if (curs.right.isDown) {
                pr.setVelocityX(200)
            }
        }
            
        
    }
})