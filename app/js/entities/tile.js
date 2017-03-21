Tile = function(game, x, y, tile_scale, t_type, color){
	Phaser.Sprite.call(this, game);
	this.tile_scale = tile_scale;
	this.x = x;
	this.y = y;
	this.tile_type = null;

	switch(t_type){
		case 0:
			this.tile_type = TILE_TYPES.empty;
			break;
		case 1:
			this.tile_type = TILE_TYPES.wall;
			break;
		case 2: 
			this.tile_type = TILE_TYPES.sticky;
			break;
		case 3: 
			this.tile_type = TILE_TYPES.damage;
			break;

	}
	

		this.color = color;



	// this.scaleUpTween = game.add.tween(this).to( { scale: this.tile_scale.x * 1.2 }, 200, "Quart.easeOut");
	// this.scaleDownTween = game.add.tween(this).to( { scale: this.tile_scale.x }, 200, "Quart.easeOut");


	this.game = game;

	game.add.existing(this);
	this.create();
}

Tile.prototype = Object.create(Phaser.Sprite.prototype);
Tile.prototype.constructor = Tile;

Tile.prototype.create = function() { 
	this.square = this.game.add.sprite(0,0, "square", null);
	this.square.tint = this.color;
	this.square.anchor.set(.5);
	this.addChild(this.square);
	this.scale.set(this.tile_scale);
}
// Tile.prototype.update = function() { 
// 	console.log("tileupdate");
// }
Tile.prototype.isSticky = function(){
	//todo, if tile or prop on tile is sticky, return true
	return false;
}
Tile.prototype.isBlocker = function(){
	//todo, if tile or prop is a blocker, return true
	return false;
}
Tile.prototype.land = function(actor){
	//called when an actor finishes their move on this tile
}