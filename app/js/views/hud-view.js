var DungeonDashGame = window.DungeonDashGame || {};
DungeonDashGame.HudView = Backbone.View.extend({

	hud_template: _.template( $('#HUDTemplate').html() ),
	events: {
		"click .reset": "reset",
		"click .next": "next",
		"click .back": "back"
	},
	initialize: function(options){
		this.options = options;
	},
	reset: function(e){
		this.options.gameState.resetCurrentBoard();
	},
	next: function(e){
		this.options.gameState.nextLevel();
	},
	back: function(e){
		this.options.gameState.previousLevel();
	},
	render: function(){
		this.$el.html();
		console.log(this.options.gameState);
		var html = this.hud_template({
			"player": this.options.gameState.current_board.player.actor_model.toJSON(),
			"board": this.options.gameState.current_board,
			"board_data": DungeonDashLevels[this.options.gameState.current_board_index],
			"game": this.options.gameState.game,
		});
		$("#hud-wrapper").html(html);
    	return this;
	}

});