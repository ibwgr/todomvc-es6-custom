'use strict'
export default class{
    constructor($el){
        this.$el = $el
    }
    [Symbol.iterator](){
        let sibling = this.$el

        return {
            next(){
                let next = sibling.nextSibling
                return { 
                    done: next == null, 
                    value: (sibling = next)
                }
            }
        }
    }
}