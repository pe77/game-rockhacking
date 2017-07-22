/// <reference path='../../pkframe/refs.ts' />

module GameBase
{

	export class Main extends Pk.PkState {
 
		enterKey:Phaser.Key;


		init(...args:any[])
		{
			super.init(args); // if whant override init, you need this line!
		}

    	create()
    	{
			super.create();

    		// change state bg
            this.game.stage.backgroundColor = "#938da0";

			// prevent stop update when focus out
            this.stage.disableVisibilityChange = true;

    		// get the keyboard key to come back to menu
            this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

			// when press the key...
            this.enterKey.onDown.add(()=>{
                // this.transition.change('Menu', 1111, 'text', {a:true, b:[1, 2]});  // return with some foo/bar args
            }, this);

			var music:GameBase.Music = new GameBase.Music(this.game, 1);
			
			// wait for end decode
			music.event.add(GameBase.E.Music.OnDecode, ()=>{
				console.log('end decode')
				// play music
				music.play(); 
				music.music.volume = 0.0;
			}, this);

			music.event.add(GameBase.E.Music.OnPulse, ()=>{
				console.log('pulse');
				path.pulse();

				wall.pulse();
			}, this);

			// init decode
			music.decode();

			var path:GameBase.Lane = new GameBase.Lane(this.game, 700);
			path.addString();
			path.addString();
			path.addString();

			path.create();

			path.ui.x += 50;
			path.ui.y += 200;

			var wall:GameBase.Wall = new GameBase.Wall(this.game);
			wall.addBlock();
			wall.addBlock();

			wall.create();
    	}
		
		render()
        {
            this.game.debug.text('(Main Screen) ', 35, 35);
        }

		// calls when leaving state
        shutdown()
        {
            
        }

    }

}