/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export class WallBlock extends Pk.PkElement
    {
        ui:GameBase.ui.WallBlock;
        
        constructor(game:Pk.PkGame)
        {
            super(game);

            this.ui = new GameBase.ui.WallBlock(game);
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