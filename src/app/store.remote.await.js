/**
 * Dieser Store funktioniert mit dem Java Spark Server: https://github.com/ibwgr/todomvc-java-server
 * Es gibt keine Login Funktionalität.
 *
 * Verwendet wird async await mit try / catch (nicht Promises).
 */
export default class Store{
    constructor(name){
      this.serverUrl = process.env.API_SERVER_URL != null ? process.env.API_SERVER_URL : 'http://localhost:4567'
      this.name = name
    }

    async add(item){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        const resp = await fetch(this.serverUrl + '/todo/items', {
            method: 'POST',
            headers,
            body: JSON.stringify(item)
        })

        if(resp.ok === true){
            return resp.json()
        }else{
            throw resp
        }
    }

    async remove(id) {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
      const resp = await fetch(this.serverUrl + '/todo/items/' + id, {
        method: 'DELETE',
        headers,
        credentials: 'include'
      })

      if (resp.ok === true) {
        return resp.json()
      } else {
        throw resp
      }
    }

    async all(){
        let headers = new Headers({
            'Accept': 'application/json'
        })
        const resp = await fetch(this.serverUrl + '/todo/items', {
            headers,
        })

        if(resp.ok === true){
            return resp.json()
        }else{
            throw resp
        }
    }
}
