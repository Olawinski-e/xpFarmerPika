export class Stats {

    public money: number=0;
    public level: number=0;
    public levelPoint: number=0;

    constructor(options : Object ={}= null){
        if(typeof options == 'object'){
          Object.assign(this,options);
        }

    }
    
}


