// import needed libraries
import React from 'react'
import {render} from 'react-dom'

// import the view and the viewModel
import {TodoView} from './TodoView.material'
import {TodoViewModel} from './TodoViewModel'

// create a viewModel singleton
const model = new TodoViewModel()

// render the editor
render(<TodoView model={model} />, document.getElementById('app'))