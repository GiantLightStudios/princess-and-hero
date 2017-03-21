var DungeonDashGame = window.DungeonDashGame || {};


DungeonDashGame.GameState = function(game){
	this.game = game;
	this.hudView = new DungeonDashGame.HudView({"el": "#hud-wrapper", "gameState": this});

	this.game_model = new GameModel();


	this.filter = [];
	this.FILTER_VIGNETTE = 0;
	this.FILTER_FILMGRAIN = 1;
	this.FILTER_SNOISE = 2;
}
DungeonDashGame.GameState.prototype  = {
	init: function(current_board_index){
		this.current_board_index = current_board_index;
		this.game_model.set(this.current_board_index);
	},
	preload: function(){
		//preload is handled in splash screen
	},
	create: function(){

		var that = this;
		this.has_lost = false;
		this.game.antialias = false;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.moveClear = true;

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		// this.game.physics.arcade.gravity.y = 200;



		this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		// game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		this.game.stage.backgroundColor = '#ccc';
		this.world = this.game.add.group();


		this.behindAll = new Phaser.Sprite(this.game, 0,0, "square");
		this.behindAll.anchor.set(.5);
		this.behindAll.scale.set(50);
		this.behindAll.tint = 0xcccccc;
		this.behindAll.alpha = 1;
		this.world.add(this.behindAll);


		this.aboveAll = this.game.add.group();

		this.transitionCoverOut = new Phaser.Sprite(this.game, 0, 0, "square");
		this.transitionCoverOut.anchor.set(.5);
		this.transitionCoverOut.scale.set(50);
		this.transitionCoverOut.tint = 0x000000;
		this.transitionCoverOut.alpha = 0;


		this.transitionCoverIn = new Phaser.Sprite(this.game, 0, 0, "square");
		this.transitionCoverIn.anchor.set(.5);
		this.transitionCoverIn.scale.set(50);
		this.transitionCoverIn.tint = 0x000000;
		this.transitionCoverIn.alpha = 1;
		this.aboveAll.add(this.transitionCoverOut);
		this.aboveAll.add(this.transitionCoverIn);




 		this.filter[this.FILTER_VIGNETTE] = this.game.add.filter('Vignette');
	    this.filter[this.FILTER_VIGNETTE].size = 0.03;
	    this.filter[this.FILTER_VIGNETTE].amount = 2.5;
	    this.filter[this.FILTER_VIGNETTE].alpha = 1;


	    this.filter[this.FILTER_FILMGRAIN] = this.game.add.filter('FilmGrain');
	    this.filter[this.FILTER_FILMGRAIN].color = 0.6;
	    this.filter[this.FILTER_FILMGRAIN].amount = .04;
	    this.filter[this.FILTER_FILMGRAIN].luminance = 0.8;

		this.game.stage.filters = [this.filter[this.FILTER_FILMGRAIN], this.filter[this.FILTER_VIGNETTE]];
		// this.vignette = new Phaser.Sprite(this.game, SAFE_ZONE_WIDTH/2, SAFE_ZONE_HEIGHT/2, "vignette");
		// this.vignette.blendMode = PIXI.blendModes.MULTIPLY;
		// this.vignette.scale.set(2);
		// this.vignette.alpha = .55;
		// this.vignette.anchor.set(.5);
		// this.world.add(this.vignette);






		this.resize();
		

		this.swipe = new Swipe(this.game);


		this.bg_music = this.game.add.audio("bg-music");
		this.bg_music.volume = .25;
		this.bg_music.loop = true;

		this.lose_sfx = this.game.add.audio("uh-oh");
		this.lose_sfx.volume = .25;
		this.timer = this.game.time.create(false);
		this.timer.start();




		this.transitionToLevel(this.current_board_index);
		// this.loadBoard(this.current_board_index);
	},

	update: function(){
		var that = this;


	    var f = this.filter[this.FILTER_FILMGRAIN];
	    /*
	    f.amount += 0.01 * direction;
	    if (f.amount <= 0) {
	        f.amount = 0;
	        direction = 1;
	    } else if (f.amount >= 1.0) {
	        f.amount = 1.0;
	        direction = -1;
	    }
	    */

	    f.update();



		if(that.current_board && that.current_board.player.hp<=0 && !that.has_lost){
			that.lose();
		}

		if(this.moveClear){

			var direction = this.swipe.check();
			if(direction!==null){
				var x_dir = 0;
				var y_dir = 0;
				switch(direction.direction){
			    	case this.swipe.DIRECTION_LEFT: // do something
			    		x_dir = -1;
			    		break;
			    	case this.swipe.DIRECTION_RIGHT:
			    		x_dir = 1;
			    		break;
			    	case this.swipe.DIRECTION_UP:
			    		y_dir = 1;
			    		break;
			    	case this.swipe.DIRECTION_DOWN:
			    		y_dir = -1;
			    		break;
			    	// case this.swipe.DIRECTION_UP_LEFT:
			    	// case this.swipe.DIRECTION_UP_RIGHT:
			    	// case this.swipe.DIRECTION_DOWN_LEFT:
			    	// case this.swipe.DIRECTION_DOWN_RIGHT:
				}
				this.current_board.slide(x_dir,y_dir);
				// this.moveClear = false;
			}else{
				// this.moveClear = true;
			}


		}
		if(!this.cursors.up.isDown && !this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown){
			this.moveClear = true;
		}
		
	},
	resetCurrentBoard: function(){
		console.log("resetting a board");
		this.loadBoard(this.current_board_index);
	},
	nextLevel: function(){
		console.log(this.current_board_index);
		this.current_board_index++;
		if(this.current_board_index>=DungeonDashLevels.length){
			this.current_board_index = 0;
		}
		this.transitionToLevel(this.current_board_index);

	},
	previousLevel: function(){
		this.current_board_index--;
		if(this.current_board_index<0){
			this.current_board_index = DungeonDashLevels.length-1;
		}
		this.transitionToLevel(this.current_board_index);

	},
	transitionToLevel: function(index, delay){
		var that = this;

		if(index>=DungeonDashLevels.length){
			index = 0;
		}


		this.world.bringToTop(this.transitionCoverOut);

		if(delay == null)
			delay = 10;



		var new_dungeon_data = DungeonDashLevels[index];
		var new_dungeon_type = BOARD_TYPES[new_dungeon_data.board_type];

		if(this.current_board){

			if(this.current_board.board_type.music!=new_dungeon_type.music){
				this.bg_music.fadeOut(1000);
				this.game.time.events.add(2500, function(){
					that.bg_music = that.game.add.audio(new_dungeon_type.music);
					that.bg_music.volume = .25;
					that.bg_music.loop = true;
					that.bg_music.play();
				});

			}

		}else{
			this.bg_music = this.game.add.audio(new_dungeon_type.music);
			this.bg_music.volume = .25;
			this.bg_music.loop = true;
			this.bg_music.play();
		}




		that.timer.add(delay, function(){
			that.outTween = that.game.add.tween(that.transitionCoverOut);
			that.world.bringToTop(that.transitionCoverOut);
			that.outTween.to({"alpha": 1}, 500);

			that.outTween.onComplete.add(function(){
				that.loadBoard(index);
				that.game.tweens.remove(that.outTween);
			});
			that.outTween.start();
		});




	},
	up: function(){
		console.log("UP");
	},
	loadBoard: function(index){

		var that = this;

		if(index>=DungeonDashLevels.length){
			index = 0;
		}
		this.game.world.bringToTop(this.aboveAll);
		if(this.transitionCoverIn){
			this.transitionCoverIn.alpha = 100;
			this.aboveAll.bringToTop(this.transitionCoverIn);
		}
		if(that.inTween){
			that.game.tweens.remove(that.inTween);
		}


		if(this.current_board){
			this.current_board.destroy();
		}
		var board_tile_scale=.09375;

		this.current_board_index = index;
		this.current_board = new Board(this.game, SAFE_ZONE_WIDTH/2, SAFE_ZONE_HEIGHT/2, board_tile_scale, index);
		this.game_model.set("current_board_index", index);
		this.world.add(this.current_board);
		this.updateHUD();
		this.resize();
		


		



		this.current_board.player.actor_model.on("change", function(a, b, c){
			that.current_board.princess.hp = that.current_board.player.hp;
			that.updateHUD(a,b,c);
		});
		this.current_board.princess.actor_model.on("change", function(a, b, c){
			that.current_board.player.hp = that.current_board.princess.hp;
			that.current_board.player.actor_model.set("hp", that.current_board.player.hp);
		});
		this.current_board.board_model.on("change:win", function(){
			var did_win = that.current_board.board_model.get("win");
			if(did_win){
				that.win();
			}
		});


		// this.world.bringToTop(this.vignette);



		this.game.world.bringToTop(this.aboveAll);
		this.aboveAll.bringToTop(this.transitionCoverIn);
		this.transitionCoverIn.alpha = 1;
		this.transitionCoverOut.alpha = 0;
		this.inTween = that.game.add.tween(that.transitionCoverIn);
		this.inTween.to({"alpha": 0}, 500);
		this.inTween.onComplete.add(function(){
			that.game.tweens.remove(that.inTween);
		});
		
		this.behindAll.tint = this.current_board.board_type.background_color;

		this.has_lost = false;
		this.inTween.start();
	},
	win: function(){
		
		localStorage.setItem("last-level-completed", this.current_board_index);
		this.nextLevel();
	},

	updateHUD: function(a, b, c){
		this.hudView.render();
	},

	resize: function(){

		console.log("game_state.resize");

		// var lGameScale=Math.round(10000 * Math.min(this.game.width/SAFE_ZONE_WIDTH,this.game.height / SAFE_ZONE_HEIGHT)) / 10000;
		// this.world.scale.setTo (lGameScale,lGameScale);
		// this.world.x=(this.game.width-SAFE_ZONE_WIDTH*lGameScale)/2;
		// this.world.y=(this.game.height-SAFE_ZONE_HEIGHT*lGameScale)/2;



		var lGameScale=Math.round(10000 * Math.min(this.game.width/SAFE_ZONE_WIDTH, this.game.height / SAFE_ZONE_HEIGHT)) / 10000;
		if(this.current_board){
			lGameScale *= 16/this.current_board.board_width;
			// this.vignette.scale.set(this.current_board.board_width/16);
		}

		this.game.global_scale = lGameScale;
		this.world.scale.setTo (lGameScale,lGameScale);
		this.world.x=(this.game.width-SAFE_ZONE_WIDTH*lGameScale)/2;
		this.world.y=(this.game.height-SAFE_ZONE_HEIGHT*lGameScale)/2;

		if(this.current_board){
			this.current_board.resize();
		}

		this.game.stage.filterArea = new Phaser.Rectangle(0,0,this.game.width, this.game.height);

	},
	lose: function(){
		var that = this;
		this.has_lost = true;
		var delay = 500;
		that.timer.add(delay, function(){

			that.lose_sfx.play();
			that.lose_sfx._sound.playbackRate.value = 2;
			that.transitionToLevel(that.current_board_index, 300);
		});
	}


}
