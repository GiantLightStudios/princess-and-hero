var DungeonDashGame = window.DungeonDashGame || {};




DungeonDashGame.InitializeGame = function(id){
	if(DungeonDashGame.game){
		this.game.state.start("GameState", true, false, id);		

	}else{

		DungeonDashGame.game = new Phaser.Game(1024, 1024, Phaser.AUTO, 'canvas-wrapper', {

			init: function(){
				console.log("game.init");
			},

			//global preload
			preload: function(){
				console.log("game.preload");
			},
			create: function(){ 
				console.log("game.create");		


				// this.game.kineticScrolling = game.plugins.add(Phaser.Plugin.KineticScrolling);		
				// this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
				this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

				this.game.state.add("GameState", DungeonDashGame.GameState);		
				this.game.state.start("GameState", true, false, id);		

			},
			resize: function(){
				//not called
				console.log("game.resize");		


			},
			updateHUD: function(){
				console.log("game.updateHUD()");
			},
			up: function(){
				console.log("UP");
			},

			//NOTE: built in update won't run, overwritten by the current state update function

		});
	}

};






var AppRouter = Backbone.Router.extend({
    routes: {
        "level/:id": "level",
    	"*actions": "defaultRoute",
        // matches http://example.com/#anything-here
    }
});
// Initiate the router
var app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {
    DungeonDashGame.InitializeGame(0);
});
app_router.on('route:level', function(id) {
    DungeonDashGame.InitializeGame(id);
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();