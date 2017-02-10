export default class View {
    constructor(rootSelector){
        this.rootSelector = rootSelector
        this.$newTodo = document.querySelector('.new-todo')
        this.$todoList = document.querySelector('.todo-list')

        this.bindEvents()
    }

    bindEvents(){
        this.$newTodo.addEventListener('change', ({target})=>{
            let title = target.value.trim();
            console.log('going to add', title, 'to the storage')
        })
    }
}