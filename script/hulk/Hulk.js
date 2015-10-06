var game;
var HEIGHT = 40;
var WIDTH = 40;
var widthMap = WIDTH * 18;
var heightMap = HEIGHT * 13;
var background;
var hulk = {};
var gameEngine;
var countFrame = 0;
game = new Phaser.Game(widthMap, heightMap, Phaser.AUTO, "content", {preload:preload, create:create, update:update});
game.trasparent = true;
//gameEngine = new GameEngine(game);
function preload() {
	game.load.image('background', "script/hulk/background/background.jpg");
	game.load.image('hulk', "script/hulk/sprite/hulk.png", WIDTH, HEIGHT);
	game.load.image('err404', "script/hulk/sprite_404/404.jpg");
}
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	background = game.add.sprite(0, 0, "background");
	background.width = widthMap;
	background.height = heightMap;
	game.enableBody = true;
	hulk.image = game.add.sprite(widthMap - WIDTH, heightMap - HEIGHT, "hulk");
	hulk.image.width = WIDTH * 2;
	hulk.image.height = HEIGHT * 2;
	hulk.image.anchor.setTo(0.5, 0.5);
	hulk.image.game.physics.arcade.enable(hulk.image);
	hulk.image.body.enable = true;
	hulk.image.body.collideWorldBounds = true;
	hulk.image.body.bounce.y = 0.8;
   	hulk.image.body.gravity.y = 800;
}
function update() {
	if (hulk.image.x === 0 + WIDTH) {
		hulk.image.kill();
		background.image = game.add.sprite(0, 0, "err404");
	}
	else {
		if(countFrame < 30) {
			countFrame++;
		} else {
			if ((countFrame == 30) && (hulk.image.angle >= 0)) {
				hulk.image.angle = -20;
				hulk.image.x -= 50;
				countFrame = 0;
			} else {
				hulk.image.angle = 20;
				hulk.image.x -= 50;
				countFrame = 0;
			}
		}
	}
}
