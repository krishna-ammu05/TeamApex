abstract class TakePhoto{
    constructor(
        public cameraMode :string,
        public filter :string
    ){}
    abstract getSepia ():void
    getReelTime():number{
        return 8
    }
}
class Facebook extends TakePhoto{
    constructor(public cameraMode :string,
        public filter :string,
        public burst :number
    ){
        super(cameraMode,filter)
    }
    
    getSepia ():void{
        console.log("Sepia")
    }
}

const photo = new Facebook("test","Test",90)