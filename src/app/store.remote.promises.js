/**
 * Dieser Store funktioniert mit dem NodeJS Express Server: https://github.com/ibwgr/todomvc-server
 * Der Express Server beherscht einfaches Session Management (Login Funktionalität),
 * deshalb wird mit "credentials: include" gearbeitet.
 *
 * Dieser Store verwendet Promises (nicht async await)
 */
export default class Store{
    constructor(name){
        this.name = name
        this.serverUrl = 'http://localhost:3100'
    }

    add(item){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        return fetch(`${this.serverUrl}/items`, {
            method: 'POST',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify(item)
        }).then((resp)=>{
            if(resp.ok){
                return Promise.resolve(resp)
            }else{
                return Promise.reject(resp)
            }
        })
    }

    remove(id){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        return fetch(`${this.serverUrl}/items/${encodeURIComponent(id.toString())}/`, {
            method: 'DELETE',
            headers: headers,
            credentials: 'include',
            body: JSON.stringify({id})
        }).then((resp)=>{
            if(resp.ok){
                return Promise.resolve(resp)
            }else{
                return Promise.reject(resp)
            }
        })
    }

    all(){
        let headers = new Headers({
            'Accept': 'application/json'
        })
        return fetch(`${this.serverUrl}/items`, {
            method: 'GET',
            headers: headers,
            credentials: 'include'
        }).then((resp)=>{
            if(resp.ok){
                return resp.json()
            }else{
                return Promise.reject(resp)
            }
        })
    }
}
