import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import noteReducer from './reducers/noteReducer'

const store = createStore(noteReducer)
//const store = createStore(counterReducer)

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

store.dispatch({ 
    type: 'NEW_NOTE', 
    data: {
        content: 'the app state is in the redux store',
        important: true,
        id: 1
    }
})

store.dispatch({
    type: 'NEW_NOTE',
    data: {
        content: 'state changes are made with actions',
        important: false,
        id: 2
    }
})


const App = () => {
    const addNote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        store.dispatch({
            type: 'NEW_NOTE',
            data: {
                content,
                important: false,
                id: generateId()
            }
        })
        event.target.note.value = ''
    }

    const toggleImportance = (id) => {
        store.dispatch({
            type: 'TOGGLE_IMPORTANCE',
            data: { id }
        })
    }
    return (
/*         <div>
            <div>
                {store.getState()}
            </div>
            <button onClick={e => store.dispatch({ type: 'INCREMENT' })}>Plus</button>
            <button onClick={e => store.dispatch({ type: 'DECREMENT' })}>Minus</button>
            <button onClick={e => store.dispatch({ type: 'ZERO' })}>Zero</button>
        </div> */
        <div>
            <form onSubmit={addNote}>
                <input name="note"/>
                <button type="submit">Add   </button>
            </form>
            <ul>
                {store.getState().map(note => 
                    <li key={note.id}>
                        {note.content} <strong>{note.important ? 'important' : ''}</strong>
                    </li>
                )}
            </ul>
        </div>
    )
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)

export default App