import React from 'react'
import Notes from './components/Notes'
import NewNote from './components/NewNote.js'

const App = (props) => {
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
            <NewNote store={props.store}/>
            <Notes store={props.store}/>
        </div>
    )
}

export default App