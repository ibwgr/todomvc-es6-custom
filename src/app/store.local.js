'use strict'
export default class Store{
    constructor(name){
        this.name = name
        this.localStorage = window.localStorage
        this._load()
    }

    _persist(){
        this.localStorage.setItem(this.name, JSON.stringify(this.items))
    }

    _load(){
        this.items = JSON.parse(this.localStorage.getItem(this.name) || '[]')
    }

    add(item){
        this.items.push(item)
        this._persist()
    }

    remove(id){
        let indexToRemove = this.items.findIndex(item=>item.id==id)
        this.items.splice(indexToRemove, 1)
        this._persist()
    }

    all(){
        return this.items
    }
}