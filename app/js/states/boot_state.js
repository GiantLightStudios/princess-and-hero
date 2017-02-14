var DungeonDashGame = window.DungeonDashGame || {};


DungeonDashGame.BootState = function(game){
	this.game = game;

	this.filter = [];
	this.FILTER_VIGNETTE = 0;
	this.FILTER_FILMGRAIN = 1;
	this.FILTER_SNOISE = 2;
}
DungeonDashGame.BootState.prototype  = {
	init: function(current_board_index){
    	this.stage.backgroundColor = '#000000'
		this.fontsLoaded = this.fontsLoaded.bind(this);
		this.boardIndex = current_board_index;

	},
	preload: function(){
		// this.game.time.advancedTiming = true;

		// WebFont.load({
		// 	google: {

		// 	},
		// 	active: this.fontsLoaded
		// });
		

	    var text = this.add.text(this.world.centerX, this.world.centerY, '...', { font: '16px Arial', fill: '#dddddd', align: 'center' });
	    text.anchor.setTo(0.5, 0.5);

		this.game.load.image("square", "img/square.png");

		//SCRIPTS/FILTERS/PLUGINS
	    this.load.script('filter-vignette', 'js/vendor/phaser-filterkit-master/src/Vignette.js');
	    //this.load.script('filter-snoise', '../src/SNoise.js');
	    this.load.script('filter-filmgrain', 'js/vendor/phaser-filterkit-master/src/FilmGrain.js');


	},
	create: function(){

		var that = this;
	      this.state.start('SplashState', true, false, this.boardIndex);

	},

	update: function(){
	    // if (this.fontsReady) {
	    //   this.state.start('SplashState', true, false, this.boardIndex);
	    // }
	},
	fontsLoaded: function () {
    	this.fontsReady = true
  	}


}
