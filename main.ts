
scene.onOverlapTile(SpriteKind.Player, img`
            5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
            4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
            4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
            2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
            2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
            4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
            2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
            4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
            5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
            4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
            4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
            5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
            5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
            4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
            4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
            4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
        `, function (sprite, location) {
    game.setGameOverMessage(true, "GAME OVER!")
})
let mySprite = sprites.create(img`
    . . . . . . . . . . 
    . f f f f f f f f f 
    4 4 4 4 4 4 4 4 4 4 
    4 4 f f f f f f f f 
    . f f b f f f b f f 
    . f f b f f f b f f 
    . f f b f f f b f f 
    . f f f f f f f f f 
    . f f f f f f f f f 
    . f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100)
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    d d d d d d d c c d d d d d d d
    d d d d c c c 6 5 c 6 6 d d d d
    d d d d c 6 c 5 5 c 7 6 d d d d
    d d d 6 c c 7 5 5 7 c 6 6 d d d
    d d c c 7 7 7 7 7 5 7 7 c 6 d d
    d 6 6 6 c 6 7 7 7 7 6 c c 6 6 d
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6
    d c c 7 6 6 6 6 6 7 7 7 7 c 6 d
    d c 7 7 6 6 7 6 6 7 7 6 7 7 c d
    d c c c c 7 7 6 f 7 7 c c c c d
    d d d d c 7 c f f c 7 c d d d d
    d d d d d 6 f e e e c d d d d d
    d d d d d e e e e e e d d d d d
    d d d d e e d e e d e e d d d d
    d d d d d d d e e d d d d d d d
`, SpriteKind.Food)
mySprite2.setPosition(245, 245)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    game.gameOver(true)
})
game.showLongText("   Help Cole find the Traveller's Tree!", DialogLayout.Bottom)
game.showLongText("Use arrow keys to move! There are invisible walls!", DialogLayout.Bottom)
info.startCountdown(10)
info.onCountdownEnd(function() {
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(false)
    game.setGameOverMessage(true, "GAME OVER!")
})