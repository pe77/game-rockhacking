/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export class Wall extends Pk.PkElement
    {
        blocks:Array<GameBase.WallBlock> = [];

        ui:GameBase.ui.Wall;

        constructor(game:Pk.PkGame)
        {
            super(game);

            this.ui = new GameBase.ui.Wall(game);
        }

        addBlock():void
        {
            var block:GameBase.WallBlock = new GameBase.WallBlock(this.game);
            this.blocks.push(block);
        }

        create()
        {
            this.ui.create();

            this.blocks.forEach((block:GameBase.WallBlock, i:number) => {
                block.ui.create();

                block.ui.y += i * (block.ui.height + 15);
                block.ui.y += 10;

                /*
                string.ui.y += i * (string.ui.height + 20);
                string.ui.y += 10;

                // create even|odd pulse strings
                if(i%2 == 0)
                    string.ui.pulse();
                //
                */

                this.ui.add(block.ui);

            });

            
        }

        pulse()
        {
            // pulse lane
            this.ui.pulse();

            // pulse strings
            this.blocks.forEach((block:GameBase.WallBlock) => {
                block.ui.pulse();
            });
        }
    }


    export module E
    {
        export module Wall
        {
            // export const OnPulse:string 	= "OnPulseMusic";
        }
    }
    
} 