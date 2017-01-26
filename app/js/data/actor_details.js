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
		atlas: "triangle",
		sprite_name: null,
		can_activate: false,
		can_slide: true,
		move_limit: 1,
		hp: 10,
		damage: 1,
		sprite_scale: -.09,
		sprite_color: 0xc9302c,
		eye_offset: -15

	},
	"rook": {
		atlas: "all_sprites",
		sprite_name: "rook",
		can_activate: false,
		can_slide: true,
		hp: 1,
		damage: 1,
		sprite_scale: .67,
		eye_scale: .04,
		eye_offset: 4,
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