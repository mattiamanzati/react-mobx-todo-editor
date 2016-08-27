import {observable, computed} from 'mobx'

// ignore the two lines below, they just creates unique IDs for the todo
var _nextId = 0
function nextId(){ _nextId++; return _nextId }

// this is our domain model class
export class Todo{
    // the ID of the current Todo
    // a unique id is automatically assigned when the todo object is instanced.
    id = nextId()
    // the text of the todo; notice the "@observable" decorator. 
    // The decorator, imported from mobx library in the first line,
    // will tell that this value is observable and computed values or observer
    // will be notified and updated when it changes.
    @observable text = ''
    // is the todo done?
    @observable done = false

    // computed values are values derived and automatically updated when the observed
    // observable values changes. For example we use it to determine whenever the todo is valid
    @computed get isValid(){
        // a text is required
        return this.text !== ''
    }

    // this two methods will serialize and deserialize the todo
    // to keep the example clean I have done them, but you should consider using
    // https://github.com/mobxjs/serializr
    serialize(){
        return {
            id: this.id,
            text: this.text,
            done: this.done
        }
    }
    static deserialize(json: Object){
        const todo = new Todo()
        todo.id = json['id'] || nextId()
        todo.text = json['text'] || ''
        todo.done = json['done'] || false
        return todo
    }
}