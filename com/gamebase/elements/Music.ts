/// <reference path='../../pkframe/refs.ts' />
 
module GameBase {
 
    export class Music extends Pk.PkElement
    {
        // music id
        musicId:number;

        // music meta
        bpm:number = 50;
        name:string = "";
        author:string = "";
        pulseDelay = 0;

        // audio info
        duration:number = 0; // ms
        bpmPulses:Array<number>; // all pulses data

        music:Phaser.Sound;

        decoded:boolean = false;
        
        xmlData:any;

        constructor(game:Pk.PkGame, musicId:number)
        {
            super(game);

            this.musicId = musicId;

            // get Data
            this.xmlData = this.game.cache.getXML('level'+this.musicId+'-data');

            // setting meta
            this.bpm            = parseInt(this.xmlData.getElementsByTagName("music")[0].attributes.bpm.value);
            this.pulseDelay     = parseInt(this.xmlData.getElementsByTagName("music")[0].attributes.pulseDealy.value); // wait for pulse count 
            this.name           = this.xmlData.getElementsByTagName("music")[0].attributes.name.value;
            this.author         = this.xmlData.getElementsByTagName("music")[0].attributes.author.value;

            // music
            this.music = this.game.add.audio('level'+this.musicId+'-song');

            console.log('Create music['+this.name+' - ' + this.author + '] '+this.bpm+'BPM')
        }

        decode()
        {
            this.game.sound.setDecodedCallback([this.music], ()=>{

                // get duration and calc pulses
                this.duration = this.game.cache.getSound('level'+this.musicId+'-song').data.duration * 1000; // music duration (in ms)
                this.bpmPulses = GameBase.Music.pulseCalculation(0, this.duration, this.bpm); // total pulses (bpm based)

                this.decoded = true;

                // dispatch
                this.event.dispatch(GameBase.E.Music.OnDecode);
            }, this);
        }

        play()
        {
            if(this.decoded)
            {
                this.music.play();

                // init pulse count event
                var pulseTime = (Phaser.Timer.SECOND * 60) / this.bpm;
                var even = true;

                this.game.time.events.add(this.pulseDelay, function(){
                    this.game.time.events.loop(pulseTime, function(){
                        this.event.dispatch(GameBase.E.Music.OnPulse, {even:even = !even, pulseTime:pulseTime});
                    }, this);
                }, this);
                
            }
        }

        static pulseCalculation(from, to, bpm):Array<number>
        {
            var totalPulseTime = from;
            var pulseMoment = 0;
            var pulses = [];

            pulses.push(from);
            
            while(totalPulseTime < to)
            {
                pulseMoment = ((Phaser.Timer.SECOND * 60) / (bpm * 1000)) * 1000;
                pulses.push(pulseMoment + totalPulseTime);

                totalPulseTime += pulseMoment;
            }

            if(pulses[pulses.length-1] > to)
                pulses.pop();
            //

            return pulses;
        }

    }


    export module E
    {
        export module Music
        {
            export const OnDecode:string 	= "OnDecodeMusic";
            export const OnPulse:string 	= "OnPulseMusic";
        }
    }
    
} 