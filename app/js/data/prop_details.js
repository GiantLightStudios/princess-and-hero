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
		sprite_color: 0x8f5d38,
		blocks: true,
		atlas: "all_sprites",
		sprite_name: "door",
		scale: .75,
		onCollide: function(actor, prop, board){
			// console.log("collide w/ door", actor, prop);
			for(var i = 0;i<actor.held_items.length;i++){
				if(actor.held_items[i].pickup_type.name == "key"){
					console.log(i);
					actor.held_items[i].destroy();
					actor.held_items.splice(i, 1);

					prop.current_tile.current_prop = null;
					prop.destroy();
				}
			}

		},
		onEnter: function(actor){

		}
	},
	"unlocked_door": {
		sprite_color: 0x8f5d38,
		blocks: true,
		atlas: "all_sprites",
		sprite_name: "wall",
		scale: .75,
		onCollide: function(actor, prop, board){
			prop.current_tile.current_prop = null;
			prop.destroy();
		},
		onEnter: function(actor){

		}
	},
	"flame": {
		sprite_color: 0xFFFFFF,
		alpha: .8,
		blocks: false,
		sticky: true,
		atlas: "flame",
		sprite_name: null,
		scale: .75,
		// blendMode: PIXI.blendModes.ADD,
		blendMode: 1,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor){
			// console.log("collide w/ door", actor, prop);
			// actor.TakeDamage(1);
			console.log(actor, "enter");
			actor.TakeDamage(1);
		},
		onLand: function(actor, prop, board){


		}
	},

	"damage": {

	},
	"portal": {
		sprite_color: 0x5cb85c,
		alpha: .8,
		blocks: false,
		atlas: "square",
		sprite_name: null,
		sticky: true,
		scale: .08,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor, prop, board){
			// actor.current_tile.current_actor = null;
			// actor.current_tile = prop.other_portal.current_tile;
			// actor.current_tile.current_actor = actor;
			// return prop.other_portal.current_tile;
			// board.bringToTop(prop);
			// prop.scaleUpTween.start();
			// tile.scaleUpTween.start();
		},
		onLand: function(actor, prop, board){
			actor.isMoving = true;
			actor.current_tile.current_actor = null;
			actor.current_tile = prop.other_portal.current_tile;
			// board.CancelWin();
			actor.warpToCurrentTile();
			actor.slide(actor.current_direction.x, actor.current_direction.y);
			// board.numSlides++;
		}
	},
	"sticky": {
		sprite_color: 0xbcb85c,
		alpha: .8,
		blocks: false,
		atlas: "square",
		sprite_name: null,
		sticky: true,
		scale: .08,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor, prop, board){
			// actor.current_tile.current_actor = null;
			// actor.current_tile = prop.other_portal.current_tile;
			// actor.current_tile.current_actor = actor;
			// return prop.other_portal.current_tile;
			// board.bringToTop(prop);
			// prop.scaleUpTween.start();
			// tile.scaleUpTween.start();
		},
		onLand: function(actor, prop, board){
			// actor.isMoving = true;
			// actor.current_tile.current_actor = null;
			// actor.current_tile = prop.other_portal.current_tile;
			// board.CancelWin();
			// actor.warpToCurrentTile();
			// actor.slide(actor.current_direction.x, actor.current_direction.y);
		}
	},
	"deathOnLand":{
		sprite_color: 0xdd985c,
		alpha: .8,
		blocks: false,
		atlas: "square",
		sprite_name: null,
		sticky: false,
		scale: .08,
		onCollide: function(actor, prop, board){

		},
		onEnter: function(actor, prop, board){
			// actor.current_tile.current_actor = null;
			// actor.current_tile = prop.other_portal.current_tile;
			// actor.current_tile.current_actor = actor;
			// return prop.other_portal.current_tile;
			// board.bringToTop(prop);
			// prop.scaleUpTween.start();
			// tile.scaleUpTween.start();
		},
		onLand: function(actor, prop, board){
			actor.TakeDamage(10);
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