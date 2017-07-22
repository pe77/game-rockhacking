/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export class String extends Pk.PkElement
    {
        ui:GameBase.ui.String;

        size:number;

        constructor(game:Pk.PkGame, size)
        {
            super(game);

            this.size = size;
            this.ui = new GameBase.ui.String(game, size);
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