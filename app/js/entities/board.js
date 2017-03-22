Board = function(game, x, y, tile_scale, level_data_index){
	Phaser.Group.call(this, game);
	this.game = game;

	
	this.x = x;
	this.y = y;
	this.level_data_index = level_data_index;

	this.tile_scale = tile_scale;
	this.scale_down = .93;
	this.board_width = null;
	this.board_height = null;

	this.board_model = new Backbone.Model();


	this.tiles = [];
	this.props = [];
	this.props_above = [];
	this.pickups = [];
	this.npcs = [];

	if(this.level_data_index)
		this.board_data = DungeonDashLevels[level_data_index];
	else
		this.board_data = DungeonDashLevels[0];

	this.board_type = BOARD_TYPES[this.board_data.board_type];

	this.timer = this.game.time.create(false);

	this.game.add.existing(this);
	this.create();
	this.timer.start();



}

Board.prototype = Object.create(Phaser.Group.prototype);
Board.prototype.constructor = Board;

Board.prototype.create = function() { 
	this.win_sfx = this.game.add.audio("win");
	this.win_sfx.volume = .05;
	this.board_height = this.board_data.tile_data.length;
	this.board_width = this.board_data.tile_data[0].length;
	this.tile_sprite_size = 512; //todo: abstract this to read the actual sprite file size!
	this.board_width = this.board_data.width;
	this.board_height = this.board_data.height;
	this.goal = null;








	this.grunge = new Phaser.TileSprite(this.game, 0, 0, this.game.width, this.game.height, this.board_type.grunge_sprite);
	this.grunge.tileScale.set(this.board_type.grunge_scale);

	// this.grunge.scale.set(SAFE_ZONE_WIDTH/1024, SAFE_ZONE_HEIGHT/1024);
	this.grunge.anchor.set(.5);
	this.grunge.alpha = this.board_type.grunge_alpha;
	this.grunge.blendMode = PIXI.blendModes.MULTIPLY;
	this.add(this.grunge);



	//tiles
	for(var x = 0;x<this.board_width;x++){
		for(var y = 0;y<this.board_height;y++){
			var t_data = this.board_data.tile_data[this.board_width * y + x];




			var tile_color = this.board_type.light_tile_color;
			var tile_alpha = 1;
			if((y%2==0 && x%2==0) || (y%2==1 && x%2==1) ){
				tile_color = this.board_type.dark_tile_color;
			}
			if(t_data == "~"){
				tile_alpha = 0;
			}

			var x_loc = x-(this.board_width/2);
			if(this.board_width%2==0){
				x_loc+=.5;
			}

			var y_loc = y-(this.board_width/2);
			if(this.board_height%2==0){
				y_loc+=.5;
			}


			var x_pos = ((x_loc)*this.tile_sprite_size*this.tile_scale);// + (x*this.tile_padding);
			var y_pos = ((y_loc)*this.tile_sprite_size*this.tile_scale);// + (y*this.tile_padding);
			var new_tile = new Tile(this.game, x_pos, y_pos, this.tile_scale*this.scale_down, 0, tile_color);
			this.add(new_tile);
			new_tile.x = x_pos;
			new_tile.y = y_pos;
			new_tile.alpha = tile_alpha;
			new_tile.ind_x = x;
			new_tile.ind_y = y;
			this.SetTile(y, x, new_tile);




			// this.board_data.tile_data[this.board_width * y + x] = tile;


			switch(t_data){
				case " ":
					break;
				case "@":
				case "%":
				case "1":
				case "#":
				case "p":
				case "r":
					this.SpawnActor(t_data, new_tile);
					break;
				
				//portal
				case "0":
					var prop = new Prop(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data);
					prop.board = this;
					this.add(prop);
					prop.current_tile = this.GetTile(y,x);
					prop.current_tile.current_prop = prop;

					for(var i = 0;i<this.props.length;i++){
						if(this.props[i].prop_type==PROP_TYPES.portal){
							this.props[i].other_portal = prop;
							prop.other_portal = this.props[i];
						}
					}
					this.props.push(prop);
					break;

				//wall
				case "w":
					var prop = new Prop(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data, this.board_type.wall_color);
					prop.board = this;
					this.add(prop);
					prop.current_tile = this.GetTile(y,x);
					prop.current_tile.current_prop = prop;
					this.props.push(prop);
					break;

				//flame
				case "*":
					var prop = new Prop(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data);
					prop.board = this;
					this.add(prop);
					prop.current_tile = this.GetTile(y,x);
					prop.current_tile.current_prop = prop;
					this.props_above.push(prop);
					break;

				//door
				case "d":
					var prop = new Prop(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data);
					prop.board = this;
					this.add(prop);
					prop.current_tile = this.GetTile(y,x);
					prop.current_tile.current_prop = prop;
					this.props.push(prop);
					break;

				//pickups
				case "h":
					var pickup = new Pickup(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data);
					pickup.board = this;
					this.add(pickup);
					pickup.current_tile = this.GetTile(y,x);
					pickup.current_tile.current_pickup = pickup;
					this.pickups.push(pickup);
					break;
				case "k":
					var pickup = new Pickup(this.game, new_tile.x, new_tile.y, this.tile_scale*this.scale_down, t_data);
					pickup.board = this;
					this.add(pickup);
					pickup.current_tile = this.GetTile(y,x);
					pickup.current_tile.current_pickup = pickup;
					this.pickups.push(pickup);
					break;

			}

		}
	}




	for(var i = 0;i<this.props.length;i++){
		this.bringToTop(this.props[i]);
	}
	this.bringToTop(this.grunge);




	for(var i = 0;i<this.npcs.length;i++){
		this.bringToTop(this.npcs[i]);
		this.npcs[i].eye.target = this.player;
	}




	this.bringToTop(this.player);
	this.bringToTop(this.princess);
	this.bringToTop(this.player.heart);
	this.bringToTop(this.princess.heart);

	for(var i = 0;i<this.props_above.length;i++){
		this.bringToTop(this.props_above[i]);
	}



	this.player.eye.target = this.princess;
	this.princess.eye.target = this.player;
	if(this.boss){
		this.boss.eye.target = this.player;
	}




}

Board.prototype.SpawnActor = function(actor_type_code, tile){
	if(tile){
		if(tile.current_actor || (tile.current_prop && tile.current_prop.prop_type.blocks)){
			return;
		}
		switch(actor_type_code){
			case "@":
				this.player = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				this.player.board = this;
				this.add(this.player);
				this.player.current_tile = tile;
				this.player.current_tile.current_actor = this.player;
				this.player.warpToCurrentTile();
				break;
			case "%":
				this.princess = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				this.princess.board = this;
				this.add(this.princess);
				this.princess.current_tile = tile;
				this.princess.current_tile.current_actor = this.princess;
				this.princess.warpToCurrentTile();
				// this.goal = this.princess;
				break;
			case "1":
				var npc = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				npc.board = this;
				this.add(npc);
				npc.current_tile = tile;
				npc.current_tile.current_actor = npc;
				npc.warpToCurrentTile();
				if(this.player)
					npc.eye.target = this.player;
				this.npcs.push(npc);
				break;
			case "#":
				var npc = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				npc.board = this;
				this.add(npc);
				npc.current_tile = tile;
				npc.current_tile.current_actor = npc;
				npc.warpToCurrentTile();
				this.npcs.push(npc);
				break;
			case "p":
				var npc = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				npc.board = this;
				this.add(npc);
				npc.current_tile = tile;
				npc.current_tile.current_actor = npc;
				npc.warpToCurrentTile();
				this.npcs.push(npc);
				break;
			case "r":
				var npc = new Actor(this.game, tile.x, tile.y, this.tile_scale*this.scale_down, actor_type_code);
				npc.board = this;
				this.add(npc);
				npc.current_tile = tile;
				npc.current_tile.current_actor = npc;
				npc.warpToCurrentTile();
				this.npcs.push(npc);
				break;
					
		}
	}


}

Board.prototype.GetRandomEmptyTile = function(num_attempts){
	if(num_attempts==null){
		num_attempts = 0;
	}
	else if(num_attempts>1000){
		alert("couldn't find a random empty tile");
		return null;
	}
	var i =  this.game.rnd.integerInRange(0, this.tiles.length);
	var t = this.tiles[i];

	if(t.tile_type==0 && t.current_actor==null){
		return t;
	}
	else{
		return this.GetRandomTile(num_attempts++)
	}
	
}
Board.prototype.slide = function(x_dir, y_dir){
	var that = this;

	if(this.numSlides != null && this.numSlides > 0){
		return false;
	}

	var allActors = [];
	allActors.push(this.player);
	allActors.push(this.princess);

	for(var i = 0;i<that.npcs.length;i++){
		if(that.npcs[i].actor_type.can_slide){
			allActors.push(that.npcs[i]);
		}
	}


	var sortedActors = [];
	if(x_dir<0){
		sortedActors = allActors.sort(function(a, b){
			return a.x - b.x;
		});
	}
	if(x_dir>0){
		sortedActors = allActors.sort(function(a, b){
			return b.x - a.x;
		});
	}

	if(y_dir>0){
		sortedActors = allActors.sort(function(a, b){
			return a.y-b.y;
		});
	}
	if(y_dir<0){
		sortedActors = allActors.sort(function(a, b){
			return b.y - a.y;
		});
	}

	// for(var i = 0;i<allActors.length;i++){
	// 	allActors[i].slide(x_dir, y_dir);
	// }





	// this.player.slide(x_dir, y_dir);
	// 	for(var i = 0;i<that.npcs.length;i++){

	// 		if(that.npcs[i]){
	// 			that.npcs[i].slide(x_dir, y_dir);
	// 		}
	// 	}


	this.numSlides = sortedActors.length;

	for(var i = 0;i<sortedActors.length;i++){
		// sortedActors[i].slide(x_dir, y_dir);

		var delay = 10*i;//Math.max(20*i, 100);

		var a = sortedActors[i];
		(function(actor){
			if(!actor.isDead){

			that.timer.add(delay, function(){
				actor.slide(x_dir, y_dir, function(){
					that.numSlides --;
				});
			}, that);
			}
		})(a);

	}
	that.CheckWin();
	DungeonDashGame.wait(
		function(){return that.numSlides==0 },
		function(){that.CheckWin()}
	);

}

Board.prototype.SetTile = function(row, col, tile ){
	this.tiles[this.board_width * row + col] = tile;
}
Board.prototype.GetTile = function(row, col){
	if(row<0 || row>=this.board_height || col<0 || col>=this.board_width){
		return null;
	}
	return this.tiles[this.board_width * row + col];
}

Board.prototype.CheckWin = function(){
	var that = this;

	if(this.has_won == true && this.isWinning!==true && that.player.isDead == false && that.princess.isDead == false){
		this.isWinning = true;
		if(this.player.y>this.princess.y){
			this.bringToTop(this.player);
		}else{
			this.bringToTop(this.princess);
		}
		that.player.showHeart();
		that.princess.showHeart();
		this.win_sfx.play();
		this.timer.add(500, function(){
			that.board_model.set("win", true);
		}, this);
	}
}

Board.prototype.Win = function(){
	var that = this;
	that.player.canControl = false;
	that.princess.canControl = false;
	this.has_won = true;




}

Board.prototype.resize = function(){
	this.grunge.width = (this.game.width/this.parent.scale.x);
	this.grunge.height = (this.game.height/this.parent.scale.y);
}
Board.prototype.update = function() { 
	if(this.player)
		this.player.update();
	if(this.princess)
		this.princess.update();

	for(var i = 0;i<this.npcs.length;i++){
		this.npcs[i].update();
	}
	// for(var i = 0;i<this.pickups.length;i++){
	// 	this.pickups[i].update();
	// }
	// for(var i = 0;i<this.props.length;i++){
	// 	this.props[i].update();
	// }
	// for(var i = 0;i<this.props_above.length;i++){
	// 	this.props_above[i].update();
	// }
}
