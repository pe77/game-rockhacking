/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export module ui
    {
        export class WallBlock extends Pk.PkElement
        {
            block:Phaser.Sprite;

            animation:Phaser.Animation;

            constructor(game:Pk.PkGame)
            {
                super(game);
            }

            create()
            {
                this.block = this.game.add.sprite(0, 0, "wall-block");
                this.animation = this.block.animations.add("pulse");
                this.animation.loop = true;
                /*
                this.bg = this.game.add.tileSprite(0, 0, this.size, 4, "lane-string-bg")
                this.animation = this.bg.animations.add("pulse");
                this.animation.loop = true;
                */
                this.add(this.block);
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
            export module WallBlock
            {
                // export const OnPulse:string 	= "OnPulseMusic";
            }
        }
        
    }

} 