export class RemoveObject{
    #Object
    constructor(Object){
        this.#Object = Object
    }

    get Object(){
        return this.#Object
    }

    get RemoveObject(){
        return this.#RemoveObject
    }

    #RemoveObject(){
        console.log(this.Object)
        this.Object.remove()
    }
}