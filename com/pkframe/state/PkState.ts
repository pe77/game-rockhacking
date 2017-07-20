/// <reference path='PkTransition.ts' />
/// <reference path='../element/PkElement.ts' />
/// <reference path='../vendor/phaser/phaser.d.ts' />

module Pk
{

    export module I
    {
        export interface LayerData {

            name:string;
            total:number;
            group:Phaser.Group;
        }
    }


    export class PkState extends Phaser.State {
        
        transition:Pk.PkTransition;

        layers:Array<I.LayerData> = [];

        getGame():Pk.PkGame
        {
            return <Pk.PkGame>this.game;
        }


        addLayer = function(layerName:string)
        {
            var exist = false;

            // check if already exist
            for (var i = 0; i < this.layers.length; i++)
            {
                if(this.layers[i].name == layerName)
                {
                    exist = true;
                    break;
                }
            };
            

            if(!exist)
            {
                // add to layer
                this.layers.push({
                    name:layerName,
                    total:0,
                    group:this.game.add.group()
                });    
            }
            
        }

        getLayer(layerName:string):I.LayerData
        {
            for (var i = 0; i < this.layers.length; i++)
                if(this.layers[i].name == layerName)
                    return this.layers[i];
            //

            return null;
        }

        addToLayer = function(layerName:string, element:any)
        {
            var exist = false;
     
            // check if already exist
            for (var i = 0; i < this.layers.length; i++)
            {
                if(this.layers[i].name == layerName)
                {
                    exist = true;
                    break;
                }
            };

            // if dont exist, wharever
            if(!exist)
                return;
            //

            // add element to layer
            this.layers[i].group.add(element);
            this.layers[i].total = this.layers[i].group.total;

            // order layers
            for (var i = 0; i < this.layers.length; i++)
                this.game.world.bringToTop(this.layers[i].group)
            //
            
        }

		init(...args:any[])
		{
            this.transition = new Pk.PkTransition(this);
		}


    	create()
    	{
    		// console.log('PkState create');
    	}

    }


}
