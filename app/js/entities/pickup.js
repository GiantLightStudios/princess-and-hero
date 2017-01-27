Pickup = function(game, x, y, tile_scale, p_type){
	Phaser.Sprite.call(this, game);
	this.x = x;
	this.y = y;
	this.tile_scale = tile_scale;
	this.pickup_type = null;
	switch(p_type){
		case "h":
			this.pickup_type = PICKUP_TYPES.heart;
			break;
		case "k":
			this.pickup_type = PICKUP_TYPES.key;
			break;
	}


	this.game = game;
	
	game.add.existing(this);
	this.create();
}

Pickup.prototype = Object.create(Phaser.Sprite.prototype);
Pickup.prototype.constructor = Pickup;

Pickup.prototype.create = function() { 
	this.square = this.game.add.sprite(0,0, this.pickup_type.atlas, this.pickup_type.sprite_name);
	this.square.tint = this.pickup_type.sprite_color;
	this.square.anchor.set(.5);
	this.addChild(this.square);
	this.scale.set(this.tile_scale*this.pickup_type.scale);


}

// Pickup.prototype.update = function() { 
// 	if(this.current_tile){
// 		// this.current_tile.square.tint = 0xff0000;
// 		this.x = this.current_tile.x;
// 		this.y = this.current_tile.y;
// 	}

// }
