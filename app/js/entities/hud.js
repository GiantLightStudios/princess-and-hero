HUD = function(game, x, y){
	Phaser.Sprite.call(this, game);
	this.x = x;
	this.y = y;

	this.game = game;
	game.add.existing(this);
	this.create();
}

HUD.prototype = Object.create(Phaser.Sprite.prototype);
HUD.prototype.constructor = HUD;

HUD.prototype.create = function() { 

	this.square = game.add.sprite(0,0, "square");
	this.square.tint = 0x000000;
	this.square.anchor.set(1, 0);

	this.addChild(this.square);
	this.scale.set(.5, 1.5);

	// var text = "HUD";
	// var style = {font: "65px Arial", fill: "#ffffff", align: "center"}
	// this.done_button = game.add.text(0, 200, text, style);
	// this.done_button.anchor.set(1, 1);
	// this.addChild(this.done_button);







	// this.square = game.add.sprite(0,0, "circle");
	// this.square.tint = this.HUD_type.sprite_color;
	// this.square.anchor.set(.5);
	// this.addChild(this.square);
	// this.scale.set(.04);
}

HUD.prototype.update = function() { 
	// if(this.current_tile){
	// 	// this.current_tile.square.tint = 0xff0000;
	// 	this.x = this.current_tile.x;
	// 	this.y = this.current_tile.y;
	// }

}
