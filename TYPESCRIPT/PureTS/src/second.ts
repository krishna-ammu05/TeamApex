interface TakePhoto{
    cameraMode :string
    filter :string
    burst :number
}
interface createStory{
    createStory():void
}
class Instagram implements TakePhoto{
    constructor(
        public cameraMode :string,
        public filter :string,
        public burst :number
    ){}
}

class Youtube implements TakePhoto{
    constructor(
        public cameraMode :string,
        public filter :string,
        public burst :number,
        public short :string
    ){}
}