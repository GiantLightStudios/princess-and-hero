var DungeonDashGame = window.DungeonDashGame || {};


DungeonDashGame.GameState = function(game){
	this.game = game;
	this.hudView = new DungeonDashGame.HudView({"el": "#hud-wrapper", "gameState": this});

	this.game_model = new GameModel();
}
DungeonDashGame.GameState.prototype  = {
	init: function(current_board_index){
		this.current_board_index = current_board_index;
		this.game_model.set(this.current_board_index);
	},
	preload: function(){
		this.game.load.image("circle", "img/circle.png");
		this.game.load.image("square", "img/square.png");
		this.game.load.image("triangle", "img/triangle.png");
		this.game.load.image("heart", "img/heart.png");
		this.game.load.image("key", "img/key.png");
		// this.game.load.atlas('kenney_roguelike_atlas', 'img/roguelike-pack/Spritesheet/roguelikeSheet_transparent.png', 'img/roguelike-pack/Spritesheet/sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		// this.game.load.atlas('roguelikeitems', 'img/roguelikeitems/roguelikeitems.png', 'img/roguelikeitems/sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		// this.game.load.atlas('kenney_roguelike_characters', 'img/roguelike-characters-pack/Spritesheet/roguelikeChar_transparent.png', 'img/roguelike-characters-pack/Spritesheet/sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		this.game.load.atlas('all_sprites', 'img/game_sprites/all_sprites.png', 'img/game_sprites/all_sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
	},
	create: function(){


		var that = this;
		this.game.antialias = false;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.moveClear = true;

		// game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
		this.game.stage.backgroundColor = '#000';
		this.world = this.game.add.group();


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


		this.loadBoard(this.current_board_index);


		this.resize();
		

		this.swipe = new Swipe(this.game);
	},

	update: function(){
		var that = this;
		
		if(that.current_board.player.hp<=0){
			that.transitionToLevel(that.current_board_index);
		}

		if(this.moveClear){

			// if(this.cursors.up.isDown){
			// 	// this.current_board.player.slide(0, 1);
			// 	this.current_board.slide(0,1);
			// 	this.moveClear = false;
			// }
			// else if(this.cursors.down.isDown){
			// 	// this.current_board.player.slide(0, -1);
			// 	this.current_board.slide(0,-1);
			// 	this.moveClear = false;

			// }
			// else if(this.cursors.right.isDown){
			// 	// this.current_board.player.slide(1, 0);
			// 	this.current_board.slide(1,0);
			// 	this.moveClear = false;

			// }
			// else if(this.cursors.left.isDown){
			// 	// this.current_board.player.slide(-1, 0);
			// 	this.current_board.slide(-1,0);
			// 	this.moveClear = false;

			// }

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
	transitionToLevel: function(index){
		var that = this;
		this.world.bringToTop(this.transitionCoverOut);


		this.outTween = this.game.add.tween(this.transitionCoverOut);
		this.world.bringToTop(this.transitionCoverOut);
		this.outTween.to({"alpha": 1}, 500);

		this.outTween.onComplete.add(function(){
			that.loadBoard(index);
			that.game.tweens.remove(that.outTween);
		});
		this.outTween.start();

	},
	up: function(){
		console.log("UP");
	},
	loadBoard: function(index){
		var that = this;
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

		this.current_board = new Board(this.game, SAFE_ZONE_WIDTH/2, SAFE_ZONE_HEIGHT/2, board_tile_scale, index);
		this.game_model.set("current_board_index", index);
		this.world.add(this.current_board);
		this.updateHUD();
		

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
			if(did_win)
				that.nextLevel();
		});

		this.game.world.bringToTop(this.aboveAll);
		this.aboveAll.bringToTop(this.transitionCoverIn);
		this.transitionCoverIn.alpha = 1;
		this.transitionCoverOut.alpha = 0;
		this.inTween = that.game.add.tween(that.transitionCoverIn);
		this.inTween.to({"alpha": 0}, 500);
		this.inTween.onComplete.add(function(){
			that.game.tweens.remove(that.inTween);
		});
		this.inTween.start();
	},
	updateHUD: function(a, b, c){
		this.hudView.render();
	},
	resize: function(){
		console.log("game_state.resize");




		var lGameScale=Math.round(10000 * Math.min(this.game.width/SAFE_ZONE_WIDTH, this.game.height / SAFE_ZONE_HEIGHT)) / 10000;
		this.game.global_scale = lGameScale;
		this.world.scale.setTo (lGameScale,lGameScale);
		this.world.x=(this.game.width-SAFE_ZONE_WIDTH*lGameScale)/2;
		this.world.y=(this.game.height-SAFE_ZONE_HEIGHT*lGameScale)/2;
	}

}
