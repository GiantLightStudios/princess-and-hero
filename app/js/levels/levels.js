var DungeonDashLevels = window.DungeonDashLevels || [];


var emptyLevel = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w      @       w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww"
	
}
var Chapter1 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w ww w      w  w" +
		"w w  w     ww  w" +
		"w w  www    w  w" +
		"w ww w w w www w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w @          % w" +
		"w              w" +
		"wwwwwwwwwwwwwwww"
	
}



var TwoMovesToExit = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Follow me!"
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w       w      w" +
		"w  @    w    % w" +
		"w       w      w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}

var ThreeMovesToExit = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Where did you go?"
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"wwww        wwww" +
		"wwww        wwww" +
		"wwww        wwww" +
		"wwww        wwww" +
		"w      ww      w" +
		"w      ww      w" +
		"w @    ww    % w" +
		"w      ww      w" +
		"w      ww      w" +
		"wwww        wwww" +
		"wwww        wwww" +
		"wwww        wwww" +
		"wwww        wwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}
var MoveTeachCrazySimpler = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Very cute."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"ww            ww" +
		"ww            ww" +
		"ww            ww" +
		"ww@           ww" +
		"wwwww      wwwww" +
		"wwwww      wwwww" +
		"wwwww      wwwww" +
		"wwwww      wwwww" +
		"wwwww      wwwww" +
		"wwwww      wwwww" +
		"ww%           ww" +
		"ww            ww" +
		"ww            ww" +
		"ww     ww     ww" +
		"wwwwwwwwwwwwwwww"
}
var MoveTeachMore = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "We should stick together..."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"www  wwwwwwwwwww" +
		"w   @wwwwwwwwwww" +
		"w    wwwwwwwwwww" +
		"w  wwwwwwwwwwwww" +
		"w              w" +
		"w       w      w" +
		"w       w      w" +
		"w       w      w" +
		"w              w" +
		"wwwwwwwwwwwww  w" +
		"wwwwwwwwwww    w" +
		"wwwwwwwwwww%   w" +
		"wwwwwwwwwww  www" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}

var MoveTeachCrazy0 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Hmmm..."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w             ww" +
		"w     @www    ww" +
		"w  wwwwwww    ww" +
		"w  wwwwwww  wwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wwww        wwww" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwww  w" +
		"ww   %ww       w" +
		"ww  wwwww    www" +
		"ww           www" +
		"wwwwwwwwwwwwwwww"
}
var MoveTeachCrazyFlipped = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Hmmm..."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"ww           www" +
		"ww  wwwww    www" +
		"ww   @ww       w" +
		"wwwwwwwwwwwww  w" +
		"w              w" +
		"w              w" +
		"wwww        wwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w  wwwwwww  wwww" +
		"w  wwwwwww    ww" +
		"w     %www    ww" +
		"w             ww" +
		"wwwwwwwwwwwwwwww"



}
var MoveMaster0 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Wait for me!"
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwww  w" +
		"w             @w" +
		"w         wwwwww" +
		"w             ww" +
		"w  wwwwwwwwww ww" +
		"w           w ww" +
		"wwwwwwwwwwwww ww" +
		"w             ww" +
		"w   wwwwww    ww" +
		"w   w  % w    ww" +
		"w   w  www    ww" +
		"w   w          w" +
		"w   ww         w" +
		"w              w" +
		"wwwwwwwwwwwwwwww"

}

var MoveMaster0Flipped = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Hmm, wrong way..."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w   ww         w" +
		"w   w          w" +
		"w   w  www    ww" +
		"w   w  @ w    ww" +
		"w   wwwwww    ww" +
		"w             ww" +
		"wwwwwwwwwwwww ww" +
		"w           w ww" +
		"w  wwwwwwwwww ww" +
		"w             ww" +
		"w         wwwwww" +
		"w             %w" +
		"wwwwwwwwwwwww  w" +
		"wwwwwwwwwwwwwwww"

}





var CombatStart0 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "oh no..."
		},
		{
			"speaker": "hero",
			"text": "They found us."
		}
	],
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"www          www" +
		"www          www" +
		"www  wwwwww  www" +
		"www@  p  p  %www" +
		"www  wwwwww  www" +
		"www          www" +
		"www          www" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}


var CombatStart3 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "No, this way."
		}
	],
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"www  wwwwwwwwwww" +
		"www     @    pww" +
		"wwww wwwwwww www" +
		"wwwwwwwwwwww www" +
		"www        w www" +
		"www w      w www" +
		"www w      w www" +
		"www w      w www" +
		"www w        www" +
		"www wwwwwwww www" +
		"www wwwwwww  www" +
		"www     %    www" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}
var CombatStart4 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Be careful!"
		}
	],
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"www          www" +
		"www          www" +
		"www wwwwwww  www" +
		"www wp       www" +
		"www@w   wwwwwwww" +
		"wwwwww       www" +
		"wwww%w       www" +
		"wwww wwwwwww www" +
		"wwww         www" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}


var BossFight01 = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "It's him.",
		},
		{
			"speaker": "hero",
			"text": "...",
		}
	],
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"www          www" +
		"www @   1  % www" +
		"www          www" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}



var Chapter2 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w ww w     www w" +
		"w w  w      ww w" +
		"w w  www   w   w" +
		"w ww w w w www w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wk@        d % w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
	
}


var keyPrincessMoves = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"www        wwwww" +
		"www        wwwww" +
		"www     k  wwwww" +
		"www   wwwwwwwwww" +
		"www   wwwwwwwwww" +
		"www   wwwwwwwwww" +
		"www   wwwwwwwwww" +
		"www        w   w" +
		"www        w   w" +
		"www       @d%  w" +
		"wwwwwwwwwwww   w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
	
}


var keyWithMobs = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w         w    w" +
		"w         w    w" +
		"w         w    w" +
		"w    w    dp   w" +
		"w wwww   wwwwwww" +
		"w         w    w" +
		"w         w  p w" +
		"w         w   kw" +
		"w  w           w" +
		"w  wwww  wwwwwww" +
		"w         w    w" +
		"w         w    w" +
		"w         w    w" +
		"w        @d%   w" +
		"wwwwwwwwwwwwwwww"
}




var keyWithMobs2 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"www            w" +
		"w       www    w" +
		"w   www wwwwww w" +
		"w    p         w" +
		"wwwwwww        w" +
		"ww          p  w" +
		"w  wk      www w" +
		"w pw           w" +
		"w  w wwww     @w" +
		"w  w      wwwwdw" +
		"w         w   %w" +
		"w         w    w" +
		"w  www    w    w" +
		"w         w    w" +
		"wwwwwwwwwwwwwwww"
	
}


var princessTorture00 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w  p           w" +
		"w  wwwwwwwwww  w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w  www         w" +
		"w  w           w" +
		"w     wwwwwwwwww" +
		"w   k wp      ww" +
		"w     w        w" +
		"w   @ d%       w" +
		"ww    w        w" +
		"w     ww      pw" +
		"wwwwwwwwwwwwwwww"
	
}
var princessTorture01 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w             ww" +
		"w  p           w" +
		"w              w" +
		"w  ww wwwwwww  w" +
		"w              w" +
		"w   w        w w" +
		"w  w wwwwwwwww w" +
		"w  w           w" +
		"w     wwwwwwwwww" +
		"w   k ww      pw" +
		"ww @  w        w" +
		"w     d%       w" +
		"w     w        w" +
		"w     wp      ww" +
		"wwwwwwwwwwwwwwww"
	
}


var princessTorture02 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w    ww  ww    w" +
		"w              w" +
		"w ww    w   ww w" +
		"w w     w k  w w" +
		"w   www wwww   w" +
		"w              w" +
		"w  www    www  w" +
		"w      @       w" +
		"wwwwwwwdwwwwwwww" +
		"ww     %      ww" +
		"w              w" +
		"w              w" +
		"w  w        w  w" +
		"wp     w      pw" +
		"wwwwwwwwwwwwwwww"
	
}


var princessTorture02FlippedIsh = {
	height: 16,
	width: 16,
	tile_data:
	
		"wwwwwwwwwwwwwwww" +
		"w       w      w" +
		"w w          w w" +
		"w             kw" +
		"wp            pw" +
		"ww     @      ww" +
		"wwwwwwwdwwwwwwww" +
		"wp     %      pw" +
		"w  www    www  w" +
		"w              w" +
		"w   www wwww   w" +
		"w w     w    w w" +
		"w ww    w   ww w" +
		"w              w" +
		"w    w    w    w" +
		"wwwwwwwwwwwwwwww"
}

var princessTorture03 = {
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wp      w      w" +
		"w              w" +
		"w             kw" +
		"w     @        w" +
		"wwwwwwwdwwwwwwww" +
		"ww             w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wp            pw" +
		"w      %       w" +
		"w              w" +
		"w              w" +
		"w             ww" +
		"wwwwwwwwwwwwwwww"
	
}


var Win = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "That was close..."
		},
		{
			"speaker": "princess",
			"text": "We made it!"
		},

	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w@             w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w w w w w w  w w" +
		"w w w w w ww w w" +
		"w w w w w w ww w" +
		"w  w w  w w  w w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w             %w" +
		"wwwwwwwwwwwwwwww"
}

var End = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "That was close..."
		},
		{
			"speaker": "princess",
			"text": "We made it!"
		},

	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w@             w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w www          w" +
		"w w   w  w ww  w" +
		"w www ww w w w w" +
		"w w   w ww w w w" +
		"w www w  w ww  w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w             %w" +
		"wwwwwwwwwwwwwwww"
}
var ToBeContinued = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "That was close..."
		},
		{
			"speaker": "princess",
			"text": "We made it!"
		},

	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w www ww   ww  w" +
		"w  w  w w w    w" +
		"w  w  ww  w    w" +
		"w  w  w w w    w" +
		"w  w  ww   ww  w" +
		"w              w" +
		"w   w  w  w    w" +
		"w              w" +
		"w              w" +
		"w@            %w" +
		"wwwwwwwwwwwwwwww"
}
var KitchenSink = {
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "BONUS ROUND!!!"
		},
		{
			"speaker": "hero",
			"text": "I don't think anyone tested this level..."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwwwww" +
		"w     p        w" +
		"w           h  w" +
		"w           p  w" +
		"w              w" +
		"w  r   ww      w" +
		"w      ww      w" +
		"w@     wwk     w" +
		"w      ww     pw" +
		"w      wwp     w" +
		"w      wwz   wdw" +
		"w            w w" +
		"wz           w w" +
		"w      1     w w" +
		"w           pw%w" +
		"wwwwwwwwwwwwwwww"
}



// DungeonDashLevels.push(emptyLevel);
// DungeonDashLevels.push(omegaTest);


//start of act 1
//hero and princess on the lamb, caught
DungeonDashLevels.push(Chapter1);
DungeonDashLevels.push(TwoMovesToExit);
DungeonDashLevels.push(ThreeMovesToExit);
DungeonDashLevels.push(MoveTeachMore);
DungeonDashLevels.push(MoveTeachCrazySimpler);
DungeonDashLevels.push(MoveTeachCrazy0);
DungeonDashLevels.push(MoveTeachCrazyFlipped);
DungeonDashLevels.push(MoveMaster0Flipped);
DungeonDashLevels.push(MoveMaster0);
DungeonDashLevels.push(CombatStart0);
DungeonDashLevels.push(CombatStart3);
DungeonDashLevels.push(CombatStart4);
DungeonDashLevels.push(BossFight01);

//end of act 1



//start of act 2
//princess has been captured and brought to the evil lair,
//introduce keys, fluency with red guys, introduce green guys
//swap from princess capture to hero capture?
DungeonDashLevels.push(Chapter2);
DungeonDashLevels.push(keyPrincessMoves);
DungeonDashLevels.push(keyWithMobs);
DungeonDashLevels.push(keyWithMobs2);
DungeonDashLevels.push(princessTorture00);
DungeonDashLevels.push(princessTorture01);
DungeonDashLevels.push(princessTorture02);
DungeonDashLevels.push(princessTorture02FlippedIsh);
// DungeonDashLevels.push(princessTorture03);
//end of act 2





// DungeonDashLevels.push(princessTorture03);

// DungeonDashLevels.push(Win);
DungeonDashLevels.push(End);
// DungeonDashLevels.push(ToBeContinued);
// DungeonDashLevels.push(KitchenSink);




