/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export module ui
    {
        export class Lane extends Pk.PkElement
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
                this.bg = this.game.add.tileSprite(0, 0, this.size, 70, "lane-bg");

                this.add(this.bg);
            }

            pulse()
            {
                
            }
        }

        export module E
        {
            export module Lane
            {
                // export const OnPulse:string 	= "OnPulseMusic";
            }
        }
        
    }

} 