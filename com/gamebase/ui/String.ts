/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export module ui
    {
        export class String extends Pk.PkElement
        {
            bg:Phaser.TileSprite;
            size:number;

            animation:Phaser.Animation;

            constructor(game:Pk.PkGame, size:number)
            {
                super(game);

                this.size = size;
            }

            create()
            {
                this.bg = this.game.add.tileSprite(0, 0, this.size, 4, "lane-string-bg")
                this.animation = this.bg.animations.add("pulse");
                this.animation.loop = true;

                this.add(this.bg);
            }

            pulse()
            {
                if(this.animation) 
                    this.animation.next();
                //
            }
        }

        export module E
        {
            export module String
            {
                // export const OnPulse:string 	= "OnPulseMusic";
            }
        }
        
    }

} 