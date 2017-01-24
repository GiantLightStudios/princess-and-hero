Eye = function(game, x, y, scale, target){
	Phaser.Sprite.call(this, game);
	this.game = game;
	this.x = x;
	this.y = y;
	this.target = target;
	this.tile_scale = scale;
	// this.prop_type = null;
	// switch(p_type){
	// 	case "w":
	// 		this.prop_type = PROP_TYPES.wall;
	// 		break;
	// 	case "d":
	// 		this.prop_type = PROP_TYPES.door;
	// 		break;
	// 	case "*":
	// 		this.prop_type = PROP_TYPES.win;
	// 		break;
	// }
	// this.scaleUpTween = this.game.add.tween(this.scale).to({ x: this.tile_scale * 2, y: this.tile_scale * 2}, 500, "Quart.easeOut");
	// this.scaleDownTween = this.game.add.tween(this.scale).to( { x: this.tile_scale, y: this.tile_scale}, 500, "Quart.easeOut");

	
	game.add.existing(this);
	this.create();
}

Eye.prototype = Object.create(Phaser.Sprite.prototype);
Eye.prototype.constructor = Eye;

Eye.prototype.create = function() { 
	this.big_circle = this.game.add.sprite(0,0, "circle");
	this.big_circle.tint = 0xffffff;
	this.big_circle.anchor.set(.5);
	this.addChild(this.big_circle);

	this.small_circle = this.game.add.sprite(0,0, "circle");
	this.small_circle.tint = 0x000000;
	this.small_circle.anchor.set(.5);
	this.small_circle.scale.set(.5);
	this.addChild(this.small_circle);

	var ex_style = {font: "bold 500px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle"};
	this.ex = this.game.add.text(0,0, "x", ex_style);
	this.ex.anchor.set(.5);
	this.ex.visible = false;
	this.addChild(this.ex);
	this.scale.set(this.tile_scale*.8);

}

Eye.prototype.update = function() { 
	if(this.target && this.parent){
		var point = new Phaser.Point();
		point.x = this.target.x - this.parent.x;
		point.y = this.target.y - this.parent.y;
		point.normalize();
		

		var p = new Phaser.Point(this.parent.scale.x, this.parent.scale.y);
		p.normalize();
		this.big_circle.x = point.x*50 * p.x;
		this.big_circle.y = point.y*50 * p.y;
		this.small_circle.x = point.x*150 * p.x;
		this.small_circle.y = point.y*150 * p.y;
		this.ex.x = this.small_circle.x;
		this.ex.y = this.small_circle.y;
	}else{
		this.big_circle.x = 0;
		this.big_circle.y = 0;
		this.small_circle.x = 0;
		this.small_circle.y = 0;
		this.ex.x = 0;
		this.ex.y = 0;
	}

}
