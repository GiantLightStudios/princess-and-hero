var TILE_TYPES = {
	"empty": {

	},
	"wall": {
		damage: 1,
		sprite_color: 0xaaaaaa,
		blocks: true,
	},
	"sticky": {
		damage: 1,
		sprite_color: 0xaa3333,
		sticky: true
	},
	"damage": {
		damage: 1,
		sprite_color: 0xcc3300,
		onEnter: function(actor, tile, board){
			actor.hp--;
			actor.actor_model.set("hp", actor.hp);
		}
	},
	"door": {
		damage: 1,
		sprite_color: 0xcc3300,
		onCollide: function(actor, tile, board){
			if(actor.keys>=1){
				actor.keys--;
				actor.actor_model.set("keys", actor.keys);
			}
		},
		onEnter: function(actor, tile, board){
		}

	}


}