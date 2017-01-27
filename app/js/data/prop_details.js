var PROP_TYPES = {
	"empty": {

	},
	"wall": {
		sprite_color: 0xbbbbbb,
		blocks: true,
		atlas: "all_sprites",
		sprite_name: "wall",
		scale: .75,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor){

		}
	},
	"door": {
		sprite_color: 0x8b754b,
		blocks: true,
		atlas: "all_sprites",
		sprite_name: "wall",
		scale: .75,
		onCollide: function(actor, prop, board){
			// console.log("collide w/ door", actor, prop);
			if(actor.keys>=1){
				actor.keys--;
				actor.actor_model.set("keys", actor.keys);
				prop.current_tile.current_prop = null;
				prop.destroy();
			}
		},
		onEnter: function(actor){

		}
	},
	"flame": {
		sprite_color: 0xFFFFFF,
		alpha: .8,
		blocks: true,
		atlas: "flame",
		sprite_name: null,
		scale: .75,
		// blendMode: PIXI.blendModes.ADD,
		blendMode: 1,
		onCollide: function(actor, prop, board){
			// console.log("collide w/ door", actor, prop);
			actor.TakeDamage(1);
		},
		onEnter: function(actor){

		}
	},
	"damage": {

	},
	"portal": {
		sprite_color: 0x5cb85c,
		atlas: "square",
		sprite_name: null,
		sticky: true,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor, prop, board){
			// actor.current_tile.current_actor = null;
			// actor.current_tile = prop.other_portal.current_tile;
			// actor.current_tile.current_actor = actor;
			return prop.other_portal.current_tile;
			// board.bringToTop(prop);
			// prop.scaleUpTween.start();
			// tile.scaleUpTween.start();
		},
		onLand: function(actor, prop, board){
			actor.current_tile.current_actor = null;
			actor.current_tile = prop.other_portal.current_tile;
			actor.warpToCurrentTile();
			actor.slide(actor.current_direction.x, actor.current_direction.y);
		}
	},
	"win": {
		sprite_color: 0xffffff,
		atlas: "square",
		sprite_name: null,
		sticky: true,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor, prop, board){

		},
		onLand: function(actor, prop, board){
			if(actor.actor_type.can_activate){

			board.bringToTop(prop);
			prop.scaleUpTween.start();
			// tile.scaleUpTween.start();
				board.Win();
			}
		}
	}

}