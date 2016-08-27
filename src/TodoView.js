import React from 'react'
import {observer} from 'mobx-react'

// This is a React component.
// The property "model" of the passed props object is an instance of our TodoViewModel class.
// do you remember all those @observable and @computed?
// In order to let your React component automatically update whenever any of
// those observable property of an object in the component props update,
// you should pass your component to the "observer" function/decorator
@observer
export class TodoView extends React.Component{
    
    render(){
        const model = this.props.model

        // just some HTML markup based of the ViewModel data.
        return <div>
            <h1>React & MobX Todo List!</h1>
            <p>
                <button onClick={() => model.add()}>New Todo</button>
                <button onClick={() => model.load()}>Reload Todos</button>
                <button onClick={() => model.save()}>Save Todos</button>
            </p>
            {model.todos.map((todo, i) => <SingleTodoView key={todo.id} model={model} todo={todo} />)}
        </div>
    }
}

// Since putting observer only on the TodoView will result in re-rendering all the todos
// any time a single todo is updated, we create a subcomponent that handles the editing for a single todo
// and decorate it with observer. This way updates in the single todo will result in an update of the SingleTodoView.
@observer
export class SingleTodoView extends React.Component{

    render(){
        const model = this.props.model
        const todo = this.props.todo

        return <p>
                    #{todo.id} 
                    <strong>{todo.text}</strong> 
                    <i>{todo.done ? 'DONE!' : ''}</i>
                    
                    <br/>

                    <input type="checkbox" checked={todo.done} onChange={e => {todo.done = e.target.checked}} />
                    <input type="text" value={todo.text} onChange={e => {todo.text = e.target.value}} />
                    <button onClick={() => model.remove(todo)}>Delete</button>
                </p>
    }
}