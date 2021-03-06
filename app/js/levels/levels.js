var DungeonDashLevels = window.DungeonDashLevels || [];




//utility levels
var Win = {
	board_type: "dungeon",
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
	board_type: "lair",
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
	board_type: "lair",
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
		"~wwwwwwwwwwwwww~" +
		"ww            ww" +
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
		"w@            %w" +
		"ww            ww" +
		"~wwwwwwwwwwwwww~"
}















// CHAPTER 1
var Chapter1 = {
	board_type: "forest",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w ww w      w  w" +
		"w w  w     ww  w" +
		"w w  www    w  w" +
		"w w  w w    w  w" +
		"w ww w w w www w" +
		"w              w" +
		"w    *    *    w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w @          % w" +
		"w              w" +
		"wwwwwwwwwwwwwwww"
}

var TwoMovesToExit = {
	board_type: "forest",
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Follow me!"
		}
	],
	"tile_data": 		
		"~~~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~~~" +
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w *          * w" +
		"w              w" +
		"w       w      w" +
		"w  @    w   %  w" +
		"w       w      w" +
		"w              w" +
		"w              w" +
		"w *          * w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"~~~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~~~"
}

var ThreeMovesToExit = {
	board_type: "forest",
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Where did you go?"
		}
	],
	"tile_data": 		
		"~~~wwwwwwwwww~~~" +
		"~~~w        w~~~" +
		"~www        www~" +
		"~w*w        w*w~" +
		"wwww        wwww" +
		"w      ww      w" +
		"w      ww      w" +
		"w @    ww    % w" +
		"w      ww      w" +
		"w      ww      w" +
		"wwww        wwww" +
		"~w*w        w*w~" +
		"~www        www~" +
		"~~~w        w~~~" +
		"~~~wwwwwwwwww~~~" +
		"~~~~~~~~~~~~~~~~"
}

var MoveTeachMore = {
	board_type: "forest",
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "We should stick together..."
		}
	],
	"tile_data": 		
		"~~wwww~~~~~~~~~~" +
		"www  w~~~~~~~~~~" +
		"w   @www~~~~~~~~" +
		"w    w*w~~~~~~~~" +
		"w  wwwwwwwwwwwww" +
		"w              w" +
		"w       w      w" +
		"w       w      w" +
		"w       w      w" +
		"w              w" +
		"wwwwwwwwwwwww  w" +
		"~~~~~~~~w*w    w" +
		"~~~~~~~~www%   w" +
		"~~~~~~~~~~w  www" +
		"~~~~~~~~~~wwww~~" +
		"~~~~~~~~~~~~~~~~"
}

var MoveTeachCrazySimpler = {
	board_type: "forest",
	height: 14,
	width: 14,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Very cute."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwww" +
		"w            w" +
		"w  *      *  w" +
		"w@           w" +
		"wwww      wwww" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"wwww      wwww" +
		"w%           w" +
		"w  *      *  w" +
		"w     ww     w" +
		"wwwwwwwwwwwwww"
}

var MoveTeachCrazyFlipped = {
	board_type: "forest",
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Hmmm..."
		}
	],
	"tile_data": 		
		"~wwwwwwwwwwwww~~" +
		"~w           w~~" +
		"~w *       * www" +
		"~w   @         w" +
		"wwwwwwwwwwwww  w" +
		"w              w" +
		"w              w" +
		"wwww        wwww" +
		"~w             w" +
		"~w             w" +
		"~w             w" +
		"~w wwwwwww  wwww" +
		"~w w*   *w    w~" +
		"~w wwwwwww    w~" +
		"~w    %       w~" +
		"~wwwwwwwwwwwwww~"
}

var CombatStart0 = {
	board_type: "forest",
	height: 14,
	width: 14,
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
		"~~~~~~~~~~~~~~" +
		"~www~~~~~~www~" +
		"~w*wwwwwwww*w~" +
		"~www      www~" +
		"~~w        w~~" +
		"~~w wwwwww w~~" +
		"~~w@ p  p %w~~" +
		"~~w wwwwww w~~" +
		"~~w        w~~" +
		"~www      www~" +
		"~w*wwwwwwww*w~" +
		"~www~~~~~~www~" +
		"~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~"
}

var CombatStart3 = {
	board_type: "forest",
	height: 14,
	width: 14,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "No, this way."
		}
	],
	tile_data:
		"~wwww~~~~~~~~~" +
		"~w  wwwwwwwwww" +
		"~w     @    pw" +
		"www wwwwwww ww" +
		"w*www     w w~" +
		"www       w w~" +
		"~w    www w w~" +
		"~w w  w*w w w~" +
		"~w w  www w w~" +
		"~w w        w~" +
		"~w wwwwwwww w~" +
		"~w          w~" +
		"~w     %    w~" +
		"~wwwwwwwwwwww~"
}

var CombatStart4 = {
	board_type: "forest",
	height: 14,
	width: 14,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Be careful!"
		}
	],
	tile_data:
		"~~~~~~~~~~~~~~" +
		"~wwwwwwwwwwww~" +
		"~w          w~" +
		"~w          w~" +
		"~w wwwwwww  w~" +
		"~w wp       w~" +
		"~w@w   wwwwww~" +
		"~wwww      w~~" +
		"~~w%w      w~~" +
		"~~w        w~~" +
		"~~w        w~~" +
		"~~w        w~~" +
		"~~wwwwwwwwww~~" +
		"~~~~~~~~~~~~~~" 
}

var BossFight01 = {
	board_type: "forest",
	height: 10,
	width: 15,
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
		"~~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~~" +
		"www~~~~~~~~~www" +
		"w*wwwwwwwwwww*w" +
		"www         www" +
		"~w  @  1  %  w~" +
		"www         www" +
		"w*wwwwwwwwwww*w" +
		"www~~~~~~~~~www" +
		"~~~~~~~~~~~~~~~" 
}







// CHAPTER 2
var Chapter2 = {
	board_type: "dungeon",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w ww w     www w" +
		"w w  w       w w" +
		"w w  www   www w" +
		"w w  w w   w   w" +
		"w ww w w w www w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww" +
		"wk       @ d % w" +
		"wwwwwwwwwwwwwwww" +
		"wwwwwwwwwwwwwwww"
}

var keyPrincessMoves = {
	board_type: "dungeon",
	height: 12,
	width: 12,
	tile_data:
		"wwwwwww~~~~~" +
		"w     w~~~~~" +
		"w     w~~~~~" +
		"w   k w~~~~~" +
		"w  wwww~~~~~" +
		"w  w~~~wwwww" +
		"w  wwwww   w" +
		"w      w   w" +
		"w      w   w" +
		"w     @d%  w" +
		"wwwwwwww   w" +
		"~~~~~~~wwwww"
}

//B+
var keyWithMobs = {
	board_type: "dungeon",
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

//B-, unfocused
var keyWithMobs2 = {
	board_type: "dungeon",
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

//A
var princessTorture00 = {
	board_type: "dungeon",
	height: 12,
	width: 12,
	tile_data:
		"wwwwwwwwwwww" +
		"w          w" +
		"w          w" +
		"w  www     w" +
		"w  w      ww" +
		"w     wwwww~" +
		"w   k wp  ww" +
		"w     w    w" +
		"w   @ d%   w" +
		"www   w    w" +
		"~~w  www  pw" +
		"~~wwww~wwwww"
}

//A
var princessTorture01 = {
	board_type: "dungeon",
	height: 12,
	width: 12,
	tile_data:
		"wwwwwwwwwwww" +
		"w          w" +
		"w  www     w" +
		"w  w w     w" +
		"w  w       w" +
		"w      wwwww" +
		"w   k ww  pw" +
		"w  @  w    w" +
		"w     d%   w" +
		"wwwwwww    w" +
		"~~~~~~wp  ww" +
		"~~~~~~wwwww~"
}

//Very hard, give player breathing room before and after
//A+
var princessTorture02 = {
	board_type: "dungeon",
	height: 14,
	width: 14,
	tile_data:
		"wwwwwwwwwwwwww" +
		"w    w  w    w" +
		"w            w" +
		"w ww   w  ww w" +
		"w w    wk  w w" +
		"w   ww www   w" +
		"w            w" +
		"w     @      w" +
		"wwwwwwdwwwwwww" +
		"ww    %     ww" +
		"w            w" +
		"w  w      w  w" +
		"wp    w     pw" +
		"wwwwwwwwwwwwww"
}

//B+
var princessTorture03 = {
	board_type: "dungeon",
	height: 14,
	width: 14,
	tile_data:
		"wwwwwwwwwwwwww" +
		"wp   w       w" +
		"w            w" +
		"w     @k     w" +
		"wwwwwwdwwwwwww" +
		"w            w" +
		"ww          ww" +
		"w   wwwwww   w" +
		"w   wr   w   w" +
		"wp  wwwwww  pw" +
		"w            w" +
		"w      %     w" +
		"w     ww     w" +
		"wwwwwwwwwwwwww"
}


//B
var princessTorture02FlippedIsh = {
	board_type: "dungeon",
	height: 14,
	width: 14,
	tile_data:
	
		"wwwwwwwwwwwwww" +
		"wp     w    pw" +
		"w            w" +
		"ww      k   ww" +
		"~w    @     w~" +
		"wwwwwwdwwwwwww" +
		"wp    %     pw" +
		"w            w" +
		"ww          ww" +
		"~w   wwww   w~" +
		"www        www" +
		"w            w" +
		"w     ww     w" +
		"wwwwwwwwwwwwww"
}

//B
var princeTorture00 = {
	board_type: "dungeon",
	height: 14,
	width: 14,
	tile_data:
		"wwwwwwwwwwwwww" +
		"w   w    ww  w" +
		"wp      %d@ kw" +
		"w        w   w" +
		"w        wwwww" +
		"w            w" +
		"w            w" +
		"ww          ww" +
		"w            w" +
		"w            w" +
		"wp          pw" +
		"w            w" +
		"w    w       w" +
		"wwwwwwwwwwwwww"
}


//give player some breathing room here

//A
var BossFight02 = {
	board_type: "dungeon",
	height: 12,
	width: 12,
	tile_data:
		"wwwwwwwwwwww" +
		"w  w   w   w" +
		"w  w  %w@1 w" +
		"w      d   w" +
		"w      wwwww" +
		"w          w" +
		"w          w" +
		"ww        ww" +
		"w          w" +
		"w          w" +
		"wk  w      w" +
		"wwwwwwwwwwww"
}




//CHAPTER 3
var Chapter3 = {
	board_type: "caves",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w ww w     www w" +
		"w w  w       w w" +
		"w w  www    ww w" +
		"w w  w w     w w" +
		"w ww w w w www w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"w   w      w   w" +
		"w r  @    %  r w" +
		"w   w      w   w" +
		"wwwwwwwwwwwwwwww"
}

var JustMovers00 = {
	board_type: "caves",
	height: 14,
	width: 14,
	tile_data:
		"~~~wwwwwwww~~~" +
		"~www      www~" +
		"~w*w      w*w~" +
		"wwww      wwww" +
		"w            w" +
		"w            w" +
		"wr   @  %   rw" +
		"w            w" +
		"w            w" +
		"w            w" +
		"wwww      wwww" +
		"~w*w      w*w~" +
		"~www      www~" +
		"~~~wwwwwwww~~~"
}




//possible to get stuck?
var JustMovers01 = {
	board_type: "caves",
	height: 15,
	width: 15,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "Hmmm..."
		}
	],
	"tile_data": 		
		"wwwwww~~~wwwwww" +
		"~w   wwwww   w~" +
		"~w           w~" +
		"~w           w~" +
		"~w  www www  w~" +
		"ww  w*w w*w  ww" +
		"w   www www   w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w wwww r wwww w" +
		"w  w*wwwww*w  w" +
		"w% www~~~www @w" +
		"wwww~~~~~~~wwww"
}



//B+
var JustMovers02 = {
	board_type: "caves",
	height: 15,
	width: 15,
	tile_data:
		"~wwwwwwwwwwwww~" +
		"ww           ww" +
		"w      @      w" +
		"w             w" +
		"w w    r    w w" +
		"www         www" +
		"w w   www   w w" +
		"w     w*w     w" +
		"w     www     w" +
		"w             w" +
		"w             w" +
		"w   w     w   w" +
		"w  ww  %  ww  w" +
		"ww           ww" +
		"~wwwwwwwwwwwww~"
}




var RooksAndPawns00 = {
	board_type: "caves",
	height: 16,
	width: 16,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "We should stick together..."
		}
	],
	"tile_data": 		
		"~~wwww~~~~~~~~~~" +
		"www  w~~~~~~~~~~" +
		"w   @www~~~~~~~~" +
		"w    w*w~~~~~~~~" +
		"w  wwwwwwwwwwwww" +
		"w              w" +
		"w   r   w     pw" +
		"w       w      w" +
		"wp      w  r   w" +
		"w              w" +
		"wwwwwwwwwwwww  w" +
		"~~~~~~~~w*w    w" +
		"~~~~~~~~www%   w" +
		"~~~~~~~~~~w  www" +
		"~~~~~~~~~~wwww~~" +
		"~~~~~~~~~~~~~~~~"
}


var RooksAndPawns01 = {
	board_type: "caves",
	height: 14,
	width: 14,
	"dialogue": [
		{
			"speaker": "hero",
			"text": "Very cute."
		}
	],
	"tile_data": 		
		"wwwwwwwwwwwwww" +
		"w            w" +
		"w  *      *  w" +
		"w@           w" +
		"wwww      wwww" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"~~~w      w~~~" +
		"wwww p  p wwww" +
		"w%          rw" +
		"w  *      *  w" +
		"w     ww     w" +
		"wwwwwwwwwwwwww"
}






var RooksAndPawns02 = {
	board_type: "caves",
	height: 14,
	width: 14,
	"dialogue": [
		{
			"speaker": "princess",
			"text": "No, this way."
		}
	],
	tile_data:
		"~wwww~~~~~~~~~" +
		"~wp wwwwwwwwww" +
		"~w     @    pw" +
		"www wwwwwww ww" +
		"w*www     w w~" +
		"www       w w~" +
		"~w    www w w~" +
		"~w w  w*w w w~" +
		"~w w  www w w~" +
		"~w wr    p  w~" +
		"~w wwwwwwww w~" +
		"~w         rw~" +
		"~w%    p    w~" +
		"~wwwwwwwwwwww~"
}









var RooksAndPawnsAndKeys00 = {
	board_type: "caves",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w         w    w" +
		"w         w    w" +
		"w         w    w" +
		"w    w         w" +
		"w wwww   wwwwwww" +
		"w         w    w" +
		"w         w kr w" +
		"w         w    w" +
		"w  w  p        w" +
		"w  wwww  wwwwwww" +
		"w        pw    w" +
		"w         w    w" +
		"w         w    w" +
		"w        %d@   w" +
		"wwwwwwwwwwwwwwww"
}

//todo: use monster to pickup key and open door
var RooksAndPawnsAndKeys01 = {
	board_type: "caves",
	height: 16,
	width: 16,
	tile_data:
		"~~wwwww~~wwwww~~" +
		"www   wwwwk  www" +
		"w              w" +
		"w              w" +
		"w   *      *   w" +
		"w              w" +
		"w              w" +
		"www%  wwwwr  www" +
		"~~wdwww  wwwdw~~" +
		"wwwp         www" +
		"w              w" +
		"w           k  w" +
		"w              w" +
		"w              w" +
		"w  @ wwwwww    w" +
		"wwwwww~~~~wwwwww" 
}
//todo: use monster to pickup key and open door
var RooksAndPawnsAndKeys02 = {
	board_type: "caves",
	height: 16,
	width: 16,
	tile_data:
		"~wwwwwwwwwwwwww~" +
		"ww   w        ww" +
		"w    w         w" +
		"w   %w    *    w" +
		"wwwwdw         w" +
		"wp   w r      kw" +
		"w              w" +
		"w              w" +
		"w              w" +
		"wdwwwwwwwwwwwwww" +
		"w@     r     kww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"ww            ww" +
		"~wwwwwwwwwwwwww~"
}


//todo: use monster to pickup key and open door
var BossFight03_TINY = {
	board_type: "caves",
	height: 9,
	width: 13,
	tile_data:
		"~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~" +
		"~wwwwwwwwwww~" +
		"ww        @ww" +
		"w  r    1   w" +
		"w    r*     w" +
		"w      r    w" +
		"w %        pw" +
		"wwwwwwwwwwwww"
}


var BossFight03_BORING = {
	board_type: "caves",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w   kw     w   w" +
		"w    w  *  w % w" +
		"w    w     w1  w" +
		"w    w     wwwdw" +
		"wp     r       w" +
		"w              w" +
		"w              w" +
		"w      k       w" +
		"wdwwwwwwwwwwwwww" +
		"w@            ww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"ww            ww" +
		"~wwwwwwwwwwwwww~"
}


var BossFight03 = {
	board_type: "caves",
	height: 13,
	width: 11,
	tile_data:
		"~~~~~~~~~~~" +
		"www~~~~~www" +
		"w*wwwwwww*w" +
		"www@    www" +
		"~w       w~" +
		"ww       ww" +
		"w  r 1 r  w" +
		"ww       ww" +
		"~w       w~" +
		"www    %www" +
		"w*wwwwwww*w" +
		"www~~~~~www" +
		"~~~~~~~~~~~" 

}






//CHAPTER 4
var Chapter4 = {
	board_type: "lair",
	height: 16,
	width: 16,
	tile_data:
		"wwwwwwwwwwwwwwww" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w ww w     w w w" +
		"w w  w     w w w" +
		"w w  www   www w" +
		"w w  w w     w w" +
		"w ww w w w   w w" +
		"w              w" +
		"w              w" +
		"wwwwwwwwwwwwwwww" +
		"w@            0w" +
		"www          www" +
		"w0            %w" +
		"wwwwwwwwwwwwwwww"
}



var TeleporterSymmetricalSwap = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		"~wwwwwwwwwwwww~" +
		"ww           ww" +
		"w             w" +
		"w             w" +
		"ww@    0     ww" +
		"~wwwwwwwwwwwww~" +
		"~~~~~~w*w~~~~~~" +
		"~wwwwwwwwwwwww~" +
		"ww%    0     ww" +
		"w             w" +
		"w             w" +
		"ww           ww" +
		"~wwwwwwwwwwwww~" 
}

var Teleporter00 = {
	board_type: "lair",
	height: 15,
	width: 16,
	tile_data:
		"~wwwwwwwwwwwwww~" +
		"ww           0ww" +
		"w@             w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w    wwwwww    w" +
		"ww www*ww*www ww" +
		"w    wwwwww    w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w0   wwwwww   %w" +
		"wwwwww~~~~wwwwww"
}




var Teleporter01 = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		"wwwwwwwwwwwwwww" +
		"w0           pw" +
		"w             w" +
		"w             w" +
		"ww  ww   ww  ww" +
		"wwwww* @ *wwwww" +
		"w   ww   ww   w" +
		"w      0      w" +
		"ww  w     w  ww" +
		"~wwwwp % pwwww~" +
		"~~~~wwwwwww~~~~" +
		"~~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~~" +
		"~~~~~~~~~~~~~~~" 
}



var Teleporter04 = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		" wwwwwwwwwwwww~" +
		"ww        w  ww" +
		"w         ww  w" +
		"w             w" +
		"ww@    0     ww" +
		"~wwwwwwwwwwwww~" +
		"~~~~~~w*w~~~~~~" +
		"~wwwwwwwwwwwww~" +
		"w %    0      w" +
		"w             w" +
		"w  ww         w" +
		"w   w         w" +
		"~wwwwwwwwwwwww~" 

}


var TeleporterEasyMobAndKey = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		"wwwwwwwww~wwwww" +
		"w   @   w~wp 0w" +
		"w       w~w   w" +
		"w       w~w   w" +
		"w       w~w   w" +
		"w  www  w~ww kw" +
		"wdww*wwww~~wwww" +
		"w  www  w~~~~~~" +
		"w       w~~~~~~" +
		"w       w~~~~~~" +
		"w       w~~~~~~" +
		"w0  %   w~~~~~~" +
		"wwwwwwwww~~~~~~"
}
var TeleporterEasyMobAndKey02 = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		"~~~~wwwwwwwwwww" +
		"~~~~w         w" +
		"~~~~w www www w" +
		"~~~~w w~w w*w w" +
		"wwwww w~w www w" +
		"w   w w~w    kw" +
		"w     w~www   w" +
		"w   www~~~w w w" +
		"wwwdw~~~~~w   w" +
		"w  0w~~~~~w* *w" +
		"w   w~~~~~w   w" +
		"w@*%w~~~~~w 0 w" +
		"wwwww~~~~~wwwww"
}


var TeleporterMobAndKey03 = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"wwwwwwww~wwwwww" +
		"w      w~w*%@*w" +
		"w      w~w    w" +
		"w      w~w 0  w" +
		"w      w~wwwwww" +
		"w      w~~~~~~~" +
		"wwdwww wwwww~~~" +
		"~w        kw~~~" +
		"~w   w w   w~~~" +
		"~w  ww ww  w~~~" +
		"~w  w 0 w  w~~~" +
		"~w  ww ww  w~~~" +
		"~w   w w   w~~~" +
		"~w         w~~~" +
		"~wwwwwwwwwww~~~"
}



var TeleporterMovers01 = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		"wwwwwwwww~wwwww" +
		"w   @   w~wr 0w" +
		"w       w~w   w" +
		"w       w~w   w" +
		"w       w~w   w" +
		"w  www  w~ww  w" +
		"wpww1wwww~~wwww" +
		"w  www  w~~~~~~" +
		"w       w~~~~~~" +
		"w       w~~~~~~" +
		"w       w~~~~~~" +
		"w0  %   w~~~~~~" +
		"wwwwwwwww~~~~~~"
}

var TeleporterMovers02 = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"wwwwwwww~wwwwww" +
		"wr     w~wp%@pw" +
		"w      w~w    w" +
		"w      w~w 0  w" +
		"w      w~wwwwww" +
		"w      w~~~~~~~" +
		"wwpwww wwwww~~~" +
		"~w         w~~~" +
		"~w   w w   w~~~" +
		"~w  ww ww  w~~~" +
		"~w  w 0rw  w~~~" +
		"~w  ww ww  w~~~" +
		"~w   w w   w~~~" +
		"~wr        w~~~" +
		"~wwwwwwwwwww~~~"
}






var TeleporterMoversKeys00 = {
	board_type: "lair",
	height: 13,
	width: 14,
	tile_data:
		"~~~~~~~~~~~~~~" +
		"wwwww~wwwwwwww" +
		"wr@%w~wk     w" +
		"w   w~w      w" +
		"w 0 w~w      w" +
		"wwwww~w      w" +
		"~~~~~~wp 0   w" +
		"wwwwwwwww wwdw" +
		"w            w" +
		"w  *         w" +
		"w            w" +
		"wwwwwwwwwwwwww"
}

var TeleporterMoversKeys01 = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"wwwwwwwwwwwwwww" +
		"w  *  @k%  *  w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"w             w" +
		"wwwwwwwwwwwwwww"
}


var TeleporterInfiniteGag = {
	board_type: "lair",
	height: 14,
	width: 15,
	tile_data:
		"~~~~~~~~~~~~~~~" +
		" wwwwwwwwwwwww~" +
		"ww     0     ww" +
		"w             w" +
		"w             w" +
		"w             w" +
		"ww    @      ww" +
		"~wwwwww%wwwwww~" +
		"ww           ww" +
		"w             w" +
		"w             w" +
		"w             w" +
		"ww     0     ww" +
		"~wwwwwwwwwwwww~" 
}





// var BossFight04_00 = {
// 	board_type: "lair",
// 	height: 15,
// 	width: 15,
// 	tile_data:
// 		"wwwwwwwwwwwwwww" +
// 		"w             w" +
// 		"w             w" +
// 		"w             w" +
// 		"w             w" +
// 		"w        *    w" +
// 		"w             w" +
// 		"w  @0    %01  w" +
// 		"w             w" +
// 		"w        *    w" +
// 		"w             w" +
// 		"w             w" +
// 		"w             w" +
// 		"w             w" +
// 		"wwwwwwwwwwwwwww"
// }

// var BossFight04_02 = {
// 	board_type: "lair",
// 	height: 15,
// 	width: 15,
// 	tile_data:
// 		"wwwwwwwwwwwwwww" +
// 		"w@1w         kw" +
// 		"w 0w          w" +
// 		"wwww          w" +
// 		"w             w" +
// 		"w  w www *    w" +
// 		"w  w          w" +
// 		"w  w  %       w" +
// 		"w  w          w" +
// 		"w  w www *    w" +
// 		"w             w" +
// 		"wwww          w" +
// 		"w 0w          w" +
// 		"w  d         ww" +
// 		"wwwwwwwwwwwwww~"
// }
var BossFight04 = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"wwwwwwwwwwwwwww" +
		"w@1 w        kw" +
		"w 0 w         w" +
		"wwwww         w" +
		"~w            w" +
		"~w    w  *    w" +
		"~w            w" +
		"~w    %       w" +
		"~w            w" +
		"~w    w  *    w" +
		"~w            w" +
		"wwwww         w" +
		"w 0 w         w" +
		"w   d         w" +
		"wwwwwwwwwwwwwww"
}



var TeleporterMoversBlah = {
	board_type: "lair",
	height: 15,
	width: 15,
	tile_data:
		"wwwwwww~wwwwwww" +
		"w     w~w    0w" +
		"w     w~w     w" +
		"w     w~w     w" +
		"w*   @w~w%   rw" +
		"wwwwwdw~wwwwwdw" +
		"w     w~w     w" +
		"w     w~w     w" +
		"w    pw~w    kw" +
		"wdwwwww~w wwwww" +
		"w    kw~w     w" +
		"w     w~w     w" +
		"w     w~w     w" +
		"w0    w~wk    w" +
		"wwwwwww~wwwwwww"
}












var BossKill = {
	board_type: "lair",
	height: 15,
	width: 16,
	tile_data:
		"~wwwwwwwwwwwwww~" +
		"ww           0ww" +
		"w@             w" +
		"w      *1*     w" +
		"w       *      w" +
		"w      * *     w" +
		"w    wwwwww    w" +
		"ww www*ww*www ww" +
		"w    wwwwww    w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w              w" +
		"w0   wwwwww   %w" +
		"wwwwww~~~~wwwwww"
}
//start of act 1
//hero and princess on the lamb, caught
DungeonDashLevels.push(Chapter1);

DungeonDashLevels.push(TwoMovesToExit);
DungeonDashLevels.push(ThreeMovesToExit);
DungeonDashLevels.push(MoveTeachMore);

DungeonDashLevels.push(MoveTeachCrazySimpler);
DungeonDashLevels.push(MoveTeachCrazyFlipped);

DungeonDashLevels.push(CombatStart0);
DungeonDashLevels.push(CombatStart3);
DungeonDashLevels.push(CombatStart4);

DungeonDashLevels.push(BossFight01);

//end of act 1



//start of act 2
//princess has been captured and brought to the evil lair,
//introduce keys and doors, fluency with red guys
//swap from princess capture to hero capture?
DungeonDashLevels.push(Chapter2);

DungeonDashLevels.push(keyPrincessMoves);
DungeonDashLevels.push(keyWithMobs);
DungeonDashLevels.push(keyWithMobs2);

DungeonDashLevels.push(princessTorture00);
DungeonDashLevels.push(princessTorture01);
DungeonDashLevels.push(princessTorture02);

DungeonDashLevels.push(princessTorture03);
DungeonDashLevels.push(princessTorture02FlippedIsh);
DungeonDashLevels.push(princeTorture00);

DungeonDashLevels.push(BossFight02);
//end of act 2





//start of act 3
//princess and hero have escaped the prison, but are now being chased
//introduce green moving mobs, fluency with keys and doors (chained keys? need one key to unlock door to get next key)


DungeonDashLevels.push(Chapter3);

DungeonDashLevels.push(JustMovers00);
DungeonDashLevels.push(JustMovers01);
DungeonDashLevels.push(JustMovers02);

DungeonDashLevels.push(RooksAndPawns00);
DungeonDashLevels.push(RooksAndPawns01);
DungeonDashLevels.push(RooksAndPawns02);

DungeonDashLevels.push(RooksAndPawnsAndKeys00); //use monster to pickup key
DungeonDashLevels.push(RooksAndPawnsAndKeys01); //use monster to pickup key and open door
DungeonDashLevels.push(RooksAndPawnsAndKeys02); //use monster to pickup key, open door, so player can pickup second key

DungeonDashLevels.push(BossFight03);

//end of act 3


//start of act 4
DungeonDashLevels.push(Chapter4);

DungeonDashLevels.push(TeleporterSymmetricalSwap);
DungeonDashLevels.push(Teleporter00);
DungeonDashLevels.push(Teleporter01);

DungeonDashLevels.push(TeleporterEasyMobAndKey);
DungeonDashLevels.push(TeleporterEasyMobAndKey02);
DungeonDashLevels.push(TeleporterMobAndKey03);

DungeonDashLevels.push(TeleporterMovers01);
DungeonDashLevels.push(TeleporterMovers02);

DungeonDashLevels.push(TeleporterMoversKeys00);
// DungeonDashLevels.push(TeleporterMoversKeys01);
//TODO: More movers/teleporters/keys levels


DungeonDashLevels.push(TeleporterInfiniteGag);
DungeonDashLevels.push(BossFight04);

// DungeonDashLevels.push(BossKill);

//end of act 4




// DungeonDashLevels.push(Win);
// DungeonDashLevels.push(End);
DungeonDashLevels.push(ToBeContinued);
// DungeonDashLevels.push(KitchenSink);




