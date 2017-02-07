Actor = function(game, x, y, tile_scale, a_type){
	Phaser.Sprite.call(this, game);
	this.game = game;
	this.tile_scale = tile_scale;

	this.actor_type = null;
	this.current_direction = new Phaser.Point(0, 0);
	switch(a_type){
		case "@":
			this.actor_type = ACTOR_TYPES.player;
			break;
		case "%":
			this.actor_type = ACTOR_TYPES.princess;
			break;
		case "1":
			this.actor_type = ACTOR_TYPES.boss1;
			break;
		case "#": 
			this.actor_type = ACTOR_TYPES.box;
			break;
		case "p": 
			this.actor_type = ACTOR_TYPES.pawn;
			break;
		case "r": 
			this.actor_type = ACTOR_TYPES.rook;
			break;
		case "n": 
			this.actor_type = ACTOR_TYPES.knight;
			break;
	}
	

	this.actor_model = new ActorModel();

	this.hp = this.actor_type.hp;
	this.keys = this.actor_type.keys || 0;
	this.damage = this.actor_type.damage;
	this.canControl = true;

	this.actor_model.set("hp", this.hp);
	this.actor_model.set("keys", this.keys);
	this.actor_model.set("damage", this.damage);


	this.isDead = false;



	this.anchor.setTo(.5, .5);
	this.game.add.existing(this);
	this.create();
	this.timer = this.game.time.create(false);
	this.held_items = [];
	this.timer.start();
}

Actor.prototype = Object.create(Phaser.Sprite.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.create = function() { 
	
	// this.dash_line = this.game.add.sprite(0,0,"triangle");
	// this.dash_line.anchor.setTo(.5);
	// this.addChild(this.dash_line);
	this.move_sfx = this.game.add.audio("swish");
	this.move_sfx.volume = .3;
	this.grunt_sfx = this.game.add.audio("grunts");
	this.grunt_sfx.addMarker("character_grunt", 1.15, .4);
	this.grunt_sfx.volume = 2;

	if(this.actor_type.has_light){
		this.light = this.game.add.sprite(0,0, "light_circle_orange");
		// this.light.scale.set(this.actor_type.sprite_scale);
		// this.light.tint = this.actor_type.sprite_color;
		this.light.blendMode = 1;
		this.light.alpha = .4;
		this.light.scale.set(.67);
		
		this.light.anchor.setTo(.5, .5);
		this.addChild(this.light);
	}


	this.square = this.game.add.sprite(0,0, this.actor_type.atlas, this.actor_type.sprite_name);
	this.square.scale.set(this.actor_type.sprite_scale);
	this.square.tint = this.actor_type.sprite_color;
	this.square.anchor.setTo(.5, .5);
	this.addChild(this.square);

	var eye_offset = this.actor_type.eye_offset || 0;
	var eye_scale = this.actor_type.eye_scale || .05;

	this.eye = new Eye(this.game, 0, eye_offset, eye_scale);
	this.addChild(this.eye);

	this.heart = new Phaser.Sprite(this.game, 0, 0, "heart");
	this.heart.anchor.setTo(.5, .5);
	this.heart.y=-70;
	this.addChild(this.heart);
	this.heart.scale.set(0);

	// this.scale.set(this.actor_type.sprite_scale);
}
Actor.prototype.warpToCurrentTile = function() { 
	if(this.current_tile){
		// this.current_tile.square.tint = 0xff0000;
		this.x = this.current_tile.x;
		this.y = this.current_tile.y;
	}
}
Actor.prototype.showHeart = function(){
	// this.bringToTop(this.heart);
	// this.parent.bringToTop(this.heart);
	this.heart.scale.set(0);

	var showTween = this.game.add.tween(this.heart.scale);
	showTween.to({x: .2, y: .2}, 1500, "Elastic");
	showTween.start();
}
Actor.prototype.update = function() { 
	if(this.eye){
		this.eye.update();
	}
	// if(this.body){
	// 	this.game.debug.body(this.body);
	// }
}
Actor.prototype.slide = function(x_dir, y_dir, resolved_callback){

	// if(!this.actor_type.can_slide)
	// 	return;

	var that = this;
	this.current_direction.x = x_dir;
	this.current_direction.y = y_dir;

	if(this.canControl && this.board && this.current_tile){
		var neighbor = this.board.GetTile(this.current_tile.ind_y - y_dir, this.current_tile.ind_x + x_dir);
		var ct = 1;
		var block_found = false;
		var starting_tile= this.current_tile;
		var target_block = this.current_tile;
		var attack_target = null;
		var warp_list = [];

		var stepCount = 0;
		moveLimit = this.actor_type.move_limit || 0;

		if(moveLimit<=0){
			moveLimit = 10000;
		}
		while(neighbor!=null && !block_found && stepCount<moveLimit){

			//if the actor can pick up, and neighbor has a pickup, pickit up
			if(this.actor_type.can_pickup && neighbor.current_pickup){
				neighbor.current_pickup.onPickup(this);
				neighbor.current_pickup = null;

			}

			//if the neighbor has an actor on it, attack, resolve attack
			if(neighbor.current_actor){
				attack_target = neighbor.current_actor;
				block_found = true;
			}


			//if the neighbor tile blocks, a block has been found
			if(neighbor.tile_type.blocks){
				block_found = true;
			}

			if(neighbor.current_prop){

				if(neighbor.current_prop.prop_type.blocks){
					if(neighbor.current_prop.prop_type.onCollide){
						neighbor.current_prop.prop_type.onCollide(this, neighbor.current_prop, this.board);
					}
					block_found = true;
				}
				else{
				 	if(neighbor.current_prop.prop_type.onEnter){
						var resulting_tile = neighbor.current_prop.prop_type.onEnter(this, neighbor.current_prop, this.board);
						if(resulting_tile){
							warp_list.push({"origin": neighbor, "destination": resulting_tile});
						}
					}
					if(neighbor.current_prop.prop_type.sticky){
						target_block = neighbor;
						block_found = true;
					}
				}


			}




			//if we haven't yet found a blocker, move to the next tile
			if(!block_found){
				target_block = neighbor;
				ct++;
				neighbor = this.board.GetTile(this.current_tile.ind_y - (y_dir*ct), this.current_tile.ind_x + (x_dir*ct));
			}

			stepCount++;
		}




		var move_tween = null;


		if(!this.game)
			return;


		//if we have found our target block, move there
		if(target_block!=null){

			// this.UpdateDashLine(this.current_tile, target_block);
			if(target_block!=this.current_tile){
				this.move_sfx.play();
				var pitch = .95 + (this.game.rnd.frac()*.1);
				this.move_sfx._sound.playbackRate.value = pitch;
			}


			move_tween = this.game.add.tween(this);
			move_tween.to({x: target_block.x, y: target_block.y}, 100);

			if(that.current_tile.current_actor == that){
				that.current_tile.current_actor = null;
			}
			that.current_tile = target_block;
			that.current_tile.current_actor = that;
			if(attack_target && !attack_target.isDead){
				if(attack_target.actor_type.onCollide){
					attack_target.actor_type.onCollide(attack_target, that, that.board);
				}else{
					var didKill = that.attack(attack_target);
				}

			}


			if(resolved_callback!=null){
				resolved_callback.call();
			}


			move_tween.onComplete.add(function(){

				if(that.isDead){
					that.HandleDeathLater();
				}
				if(attack_target && attack_target.isDead){
					attack_target.HandleDeathLater();
				}

				if(!that.isDead && target_block!=starting_tile){
					if(target_block.current_prop && target_block.current_prop.prop_type.onLand){
						target_block.current_prop.prop_type.onLand(that, target_block.current_prop, that.board);
					}
				}

			});
			move_tween.start();


		}


	}
}
Actor.prototype.UpdateDashLine = function(start_tile, end_tile){
	var mid_x = (end_tile.x + start_tile.x)/2;
	var mid_y = (end_tile.y + start_tile.y)/2;
	console.log("mid", mid_x, mid_y);

	var diff_x = mid_x - end_tile.x;
	var diff_y = mid_y - end_tile.y;
	console.log("diff", diff_x, diff_y);

	this.dash_line.x = diff_x/(this.scale.x);
	this.dash_line.y = diff_y/this.scale.y;
	
	var x_dir = -diff_x;
	var y_dir = diff_y;

	if(x_dir!=0){
		this.dash_line.scale.set(.5, Math.abs(diff_x*this.scale.y*1.4));
		if(x_dir<0)
			this.dash_line.rotation =(Math.PI/2);
		else
			this.dash_line.rotation =-(Math.PI/2);

	}
	if(y_dir!=0){
		this.dash_line.scale.set(.5, Math.abs(diff_y*this.scale.y*1.4));
		if(y_dir<0)
			this.dash_line.rotation =0;
		else
			this.dash_line.rotation =(Math.PI);
	}
}
Actor.prototype.attack = function(victim){
	var didKill = false;
	if(this && !this.isDead && victim && !victim.isDead){
		var vdmg = victim.damage;
		didKill = victim.TakeDamage(this.damage);
		this.TakeDamage(vdmg);
	}

	return didKill;

	//else return false
}
Actor.prototype.Blink = function(color){
	if(this.blink_timer)
		this.timer.remove(this.blink_timer);

	var base_color = this.square.tint;
	this.square.tint = color;
	this.blink_timer = this.timer.add(50, function(){
		this.square.tint = base_color;
	}, this);
}

Actor.prototype.die = function(){

	for(var i = 0;i<this.held_items.length;i++){
		var item = this.held_items[i];
		this.board.addChild(item);
		this.current_tile.current_pickup = item;
		item.x = this.current_tile.x;
		item.y = this.current_tile.y;
	}

	this.isDead = true;
	if(this.board){
		var ind = this.board.npcs.indexOf(this);
		if(ind>-1){
			this.board.npcs.splice(ind, 1);
		}
	}
	if(this.current_tile.current_actor == this)
		this.current_tile.current_actor = null;

	this.eye.small_circle.visible = false;
	this.eye.ex.visible = true;
	// this.eye.target = null;
}

Actor.prototype.TakeDamage = function(amount){
	if(amount>0){

		this.hp-=amount;
		this.actor_model.set("hp", this.hp);
		if(this.hp<=0){
			this.die();
			return true;
		}else{
			this.Blink(0xffffff);
			return false;
		}
	}
	return false;
}
Actor.prototype.HandleDeathLater = function(amount){
	this.grunt_sfx.play("character_grunt");
	var pitch = 1.5 + (this.game.rnd.frac()*.4);
	this.grunt_sfx._sound.playbackRate.value = pitch;
	this.eye.target = null;
	this.parent.bringToTop(this);
	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.gravity.y = 1500;
	this.body.velocity.x = 200 * (1-(this.game.rnd.frac()*2));
	this.body.velocity.y = -300;
	this.body.angularVelocity = this.body.velocity.x;
	this.body.angularDrag = 200;
	// this.eye.destroy();
	// this.destroy();
}

