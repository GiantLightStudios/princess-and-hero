var DungeonDashGame = window.DungeonDashGame || {};
DungeonDashGame.wait = function(condition, callback, maxwait, tick) {	
	if (typeof condition != 'function' || typeof callback != 'function')		
		return false;	
	var _tick = tick || 100;	
	var startDate = new Date().getTime();	
	var itv = setInterval(function () {		
		if (condition()) {			
			clearInterval(itv);			
			callback();		
		}		
		if (maxwait) {			
			var date = new Date().getTime();			
			if (date - startDate >= maxwait)				
				clearInterval(itv);		
		}	
	}, _tick);	
	return true;
}


DungeonDashGame.SaveGame = function(){

}



DungeonDashGame.InitializeGame = function(board_index){
	if(!board_index){
		board_index = 0;

		var lastCompletedLevel = localStorage.getItem("last-level-completed");
		console.log("llc: ", lastCompletedLevel);
		if(lastCompletedLevel){
			board_index = lastCompletedLevel;
		}
		
	}





	if(DungeonDashGame.game){




		DungeonDashGame.game.state.states[DungeonDashGame.game.state.current].loadBoard(board_index);
		// this.game.state.start("GameState", true, false, board_index);	

	}else{

		DungeonDashGame.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {

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
				this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
				// this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

				this.game.state.add("BootState", DungeonDashGame.BootState);
				this.game.state.add("SplashState", DungeonDashGame.SplashState);
				this.game.state.add("GameState", DungeonDashGame.GameState);
				this.game.state.start("BootState", true, false, board_index);		

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
    DungeonDashGame.InitializeGame();
});
app_router.on('route:level', function(id) {
    DungeonDashGame.InitializeGame(id);
});

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();