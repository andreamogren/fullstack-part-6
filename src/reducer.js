const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
  const counterReducer = (state = initialState, action) => {
    console.log(action, state)
    switch (action.type) {
      case 'GOOD':
        return {
            ...state,
            //state.good: good +1 
        }
      case 'OK':
        return {
            ...state,
            //state.ok: ok +1 
        }
      case 'BAD':
        return {
            ...state,
            //state.bad: bad +1 
        }
      case 'ZERO':
       //return state.good = 0, state.ok = 0, state.bad = 0
      default: 
        return state
    }
  }
  
  export default counterReducer