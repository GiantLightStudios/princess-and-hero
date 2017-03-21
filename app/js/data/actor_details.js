var ACTOR_TYPES = {
	"empty": {},

	"player": {
		isPlayer: true,
		friendly: true,
		has_light: true,
		atlas: "all_sprites",
		sprite_name: "hero_base",
		can_activate: true,
		can_pickup: true,
		can_slide: true,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		eye_scale: .05,
		sprite_color: 0xffffff,
		onCollide: function(this_actor, that_actor, board){
			if(that_actor.actor_type.isPrincess){
				board.Win();
			}else{
				this_actor.attack(that_actor);
			}
		}

	},
	"princess": {
		isPrincess: true,
		friendly: true,
		has_light: true,
		atlas: "all_sprites",
		sprite_name: "princess_base",
		can_activate: true,
		can_pickup: true,
		can_slide: true,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		eye_scale: .05,
		sprite_color: 0xffffff,
		onCollide: function(this_actor, that_actor, board){
			if(that_actor.actor_type.isPlayer){
				board.Win();
			}else{
				this_actor.attack(that_actor);
			}
		}
	},
	"pawn": {
		atlas: "all_sprites",
		sprite_name: "pawn_base",
		can_activate: false,
		can_slide: false,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		sprite_color: 0xffffff
	},
	"boss1": {
		atlas: "all_sprites",
		sprite_name: "boss",
		can_activate: true,
		can_slide: true,
		move_limit: 1,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		sprite_color: 0xffffff,
		eye_offset: -15,
		onDeathCallback: function(actor, board){
			console.log("boss dead");
			var tl = board.GetTile(actor.current_tile.ind_y+1, actor.current_tile.ind_x-1);
			var tr = board.GetTile(actor.current_tile.ind_y+1, actor.current_tile.ind_x+1);
			var br = board.GetTile(actor.current_tile.ind_y-1, actor.current_tile.ind_x+1);
			var bl = board.GetTile(actor.current_tile.ind_y-1, actor.current_tile.ind_x-1);

			if(tl)
				board.SpawnActor("1", tl);

			if(tr)
				board.SpawnActor("1", tr);

			if(br)
				board.SpawnActor("1", br);

			if(bl)
				board.SpawnActor("1", bl);

		}

	},
	"rook": {
		atlas: "all_sprites",
		sprite_name: "rook",
		can_activate: false,
		can_pickup: true,
		can_slide: true,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		eye_scale: .05,
		eye_offset: 0,
		sprite_color: 0xffffff
	},
	"box": {
		atlas: "square",
		sprite_name: null,
		can_activate: false,
		can_slide: true,
		hp: 100,
		damage: 0,
		sprite_scale: .75,
		sprite_color: 0xbbbbbb,
		onCollide: function(this_actor, that_actor, board){

		}
	},

	"knight": {
		hp: 1,
		sprite_name: null,
		hp: 3,
		damage: 1,
		sprite_scale: 1,
		sprite_color: 0xffffff
	},

	"bishop": {
		hp: 5,
		damage: 2,
		sprite_color: 0xffffff
	},
	"queen": {
		hp: 3,
		damage: 1,
		sprite_color: 0xffffff
	},
}