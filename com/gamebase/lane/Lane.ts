/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export class Lane extends Pk.PkElement
    {
        strings:Array<GameBase.String> = [];
        mark:GameBase.Mark;
        size:number;

        ui:GameBase.ui.Lane;

        constructor(game:Pk.PkGame, size:number)
        {
            super(game);

            this.size = size;
            this.ui = new GameBase.ui.Lane(game, size);
        }

        setMark(mark:GameBase.Mark)
        {
            this.mark = mark;
        }

        addString():void
        {
            var string:GameBase.String = new GameBase.String(this.game, this.size);
            this.strings.push(string);
        }

        create()
        {
            this.ui.create();

            this.strings.forEach((string:GameBase.String, i:number) => {
                string.ui.create();

                string.ui.y += i * (string.ui.height + 20);
                string.ui.y += 10;

                // create even|odd pulse strings
                if(i%2 == 0)
                    string.ui.pulse();
                //

                this.ui.add(string.ui);

            });

            
        }

        pulse()
        {
            // pulse lane
            this.ui.pulse();

            // pulse strings
            this.strings.forEach((string:GameBase.String) => {
                string.ui.pulse();
            });
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