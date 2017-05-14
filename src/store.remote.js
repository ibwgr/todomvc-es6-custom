'use strict'

export default class Store{
    constructor(name){
        this.name = name
    }

    add(item){
        let headers = new Headers({
            'Content-Type': 'application/json'
        })
        return fetch('http://localhost:3100/items', {
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
        let headers = new Headers({
            'Accept': 'application/json'
        })
        return fetch('http://localhost:3100/items', {
            method: 'GET',
            headers: headers
        }).then((response)=>{
            if(response.ok){
                return response.json()
            }else{
                return Promise.reject(response)
            }
        })
    }
}