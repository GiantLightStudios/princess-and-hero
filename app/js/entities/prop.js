Prop = function(game, x, y, scale, p_type, color){
	Phaser.Sprite.call(this, game);
	this.game = game;
	this.x = x;
	this.y = y;
	this.color = color;
	this.tile_scale = scale;
	this.prop_type = null;
	switch(p_type){
		case "w":
			this.prop_type = PROP_TYPES.wall;
			break;
		case "d":
			this.prop_type = PROP_TYPES.door;
			break;
		case "0":
			this.prop_type = PROP_TYPES.portal;
			break;
		case "*":
			this.prop_type = PROP_TYPES.flame;
			break;

	}
	
	this.scaleUpTween = this.game.add.tween(this.scale).to({ x: this.tile_scale * 2, y: this.tile_scale * 2}, 500, "Quart.easeOut");
	this.scaleDownTween = this.game.add.tween(this.scale).to( { x: this.tile_scale, y: this.tile_scale}, 500, "Quart.easeOut");

	
	game.add.existing(this);
	this.create();
}

Prop.prototype = Object.create(Phaser.Sprite.prototype);
Prop.prototype.constructor = Prop;

Prop.prototype.create = function() { 
	this.square = this.game.add.sprite(0,0, this.prop_type.atlas, this.prop_type.sprite_name);
	if(this.color){
		this.square.tint = this.color;
	}else{
		this.square.tint = this.prop_type.sprite_color;
	}
	this.square.anchor.set(.5);
	this.addChild(this.square);

	this.square.alpha = this.prop_type.alpha ? this.prop_type.alpha : 1;

	if(this.prop_type.blendMode){
		console.log(this.prop_type.blendMode);
		this.square.blendMode = this.prop_type.blendMode;
	}
	this.scale.set(this.prop_type.scale);



}
Prop.prototype.destroy_me_good = function(){
	this.current_tile.current_prop = null;
	this.destroy;
}
// Prop.prototype.update = function() { 
// 	// if(this.current_tile){
// 	// 	this.x = this.current_tile.x;
// 	// 	this.y = this.current_tile.y;
// 	// }

// }
