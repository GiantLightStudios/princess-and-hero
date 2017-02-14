var DungeonDashGame = window.DungeonDashGame || {};


DungeonDashGame.SplashState = function(game){
	this.game = game;

	this.game_model = new GameModel();


	this.filter = [];
	this.FILTER_VIGNETTE = 0;
	this.FILTER_FILMGRAIN = 1;
	this.FILTER_SNOISE = 2;
}
DungeonDashGame.SplashState.prototype  = {
	init: function(current_board_index){
    	this.stage.backgroundColor = '#000000';
    	this.current_board_index = current_board_index;
	},
	preload: function(){
		// this.game.time.advancedTiming = true;

	    this.loaderBg = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'square')
	    this.loaderBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'square')

	 	this.loaderBg.anchor.setTo(0, .5);
	 	this.loaderBar.anchor.setTo(0, .5);

	 	this.loaderBar.width = this.loaderBg.width = 256;
	 	this.loaderBar.height = this.loaderBg.height = 16;

	 	this.loaderBar.x = this.loaderBg.x = this.game.world.centerX-128;

	 	this.loaderBg.tint = "0x999999";
	    this.game.load.setPreloadSprite(this.loaderBar)

		//IMAGES

		//primary shapes
		this.game.load.image("circle", "img/circle.png");
		// this.game.load.image("square", "img/square.png");
		this.game.load.image("triangle", "img/triangle.png");

		//items and pickups
		this.game.load.image("heart", "img/heart.png");
		this.game.load.image("key", "img/key.png");


		//props
		this.game.load.image("flame", "img/flame.png");

		//spritesheet. 
		//currently characters and walls. someday, everything.
		this.game.load.atlas('all_sprites', 'img/game_sprites/all_sprites.png', 'img/game_sprites/all_sprites.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);


		//lights and fx
		this.game.load.image("light_circle_orange", "img/light_circle_orange.png");


		//overlay elements
		this.game.load.image("vignette", "img/vignette.png");
		
		this.game.load.image("forest_grunge", "img/overlays/leaves_styled.png");
		this.game.load.image("dungeon_grunge", "img/grunge.png");

		this.game.load.image("greyscale_natural_grunge3", "img/1096-greyscale-natural-grunge-textures/greyscale_natural_grunge3.jpg");
		this.game.load.image("greyscale_natural_grunge4", "img/1096-greyscale-natural-grunge-textures/greyscale_natural_grunge4.jpg");
		this.game.load.image("greyscale_natural_grunge5", "img/1096-greyscale-natural-grunge-textures/greyscale_natural_grunge5.jpg");
		this.game.load.image("greyscale_natural_grunge6", "img/1096-greyscale-natural-grunge-textures/greyscale_natural_grunge6.jpg");
		
		this.game.load.image("scrapbooking_01", "img/vintage-seamless-digital-scrapbooking-paper-textures/vintage-seamless-digital-scrapbooking-paper-textures-001-01.jpg");


		//AUDIO

		//sfx
		this.game.load.audio("swish", "audio/sfx/75534__ra-gun__swish-bamboo-pole-w-insect-net-02.wav");
		this.game.load.audio("win", "audio/sfx/171671__fins__success-1.wav");
		this.game.load.audio("grunts", "audio/sfx/144907__sketchygio__male-grunts.mp3");
		this.game.load.audio("uh-oh", "audio/sfx/144258__d-w__human-man-uh-oh.wav");
		this.game.load.audio("oh-no", "audio/sfx/131407__ecfike__oh-no-2.wav");
		
		//music

		//wolfram
		
		//http://tones.wolfram.com/generate/GuEXwBaJgI0LSF4elOs8JIqmYGD0YiFPGNk3ChC9Jxy4
		this.game.load.audio("bg-music", "audio/music/NKM-G-25-31-925709975-1-31537-30-40-3-2394-50-0-10-102-69-540-47-350-0-0-0-0-0.mp3");
		
		// http://tones.wolfram.com/generate/GRPiC6IJmSNGhj4dyTsrdcxYG0qylRibWvAxQelZqxFbsI
		this.game.load.audio("boss-music", "audio/music/NKM-G-25-31-254543185-1-20654-40-40-3-3680-32-0-10-203-69-122-70-101-0-0-47-127-0.wav")
		

		//ccMixter
		//this.game.load.audio("bg-music", "audio/music/Lancefield_-_Love_Is.mp3");


	},
	create: function(){
		var that = this;
		this.state.start('GameState');
	},

	update: function(){

	}


}
