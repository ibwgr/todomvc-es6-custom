export default class View {
    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.template = `Hi, ich bin Teil von ${this.rootSelector}`
    }

    render(){
        document.querySelector(this.rootSelector).innerHTML = this.template;
    }
}