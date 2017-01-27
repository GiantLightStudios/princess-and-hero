var PICKUP_TYPES = {
	"empty": {},
	"heart": {
		sprite_color: 0xd9534f,
		atlas: "heart",
		sprite_name: null,
		scale: .5,
		onPickup: function(actor){
			actor.hp++;
			actor.actor_model.set("hp", actor.hp);
		}
	},
	"key": {
		sprite_color: 0xf0ad4e,
		atlas: "all_sprites",
		sprite_name: "key",
		scale: 6,
		onPickup: function(actor){
			actor.keys++;
			actor.actor_model.set("keys", actor.keys);
		}
	}
}