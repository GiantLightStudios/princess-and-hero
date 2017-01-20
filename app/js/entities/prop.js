Prop = function(game, x, y, scale, p_type){
	Phaser.Sprite.call(this, game);
	this.game = game;
	this.x = x;
	this.y = y;
	this.tile_scale = scale;
	this.prop_type = null;
	switch(p_type){
		case "w":
			this.prop_type = PROP_TYPES.wall;
			break;
		case "d":
			this.prop_type = PROP_TYPES.door;
			break;
		case "*":
			this.prop_type = PROP_TYPES.win;
			break;
		case "z":
			this.prop_type = PROP_TYPES.portal;
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
	this.square.tint = this.prop_type.sprite_color;
	this.square.anchor.set(.5);
	this.addChild(this.square);
	this.scale.set(this.prop_type.scale);


}
Prop.prototype.destroy_me_good = function(){
	this.current_tile.current_prop = null;
	this.destroy;
}
Prop.prototype.update = function() { 
	if(this.current_tile){
		// this.current_tile.square.tint = 0xff0000;
		this.x = this.current_tile.x;
		this.y = this.current_tile.y;
	}

}
