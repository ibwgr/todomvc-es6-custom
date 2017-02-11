'use strict'

export default class Store{
    constructor(){
        this.items = []
    }

    insert(item){
        this.items.push(item)
    }

    all(){
        return this.items
    }
}