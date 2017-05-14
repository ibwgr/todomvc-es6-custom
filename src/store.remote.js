'use strict'

export default class Store{
    constructor(name){
        this.name = name
    }

    add(item){
        let headers = new Headers({
            'Content-Type': 'application/json'
        })
        fetch('http://localhost:3100/items', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(item)
        }).then((response)=>{
            if(response.ok){
                return Promise.resolve(response)
            }else{
                return Promise.reject(response)
            }
        })
    }

    remove(id){
    }

    all(){
    }
}