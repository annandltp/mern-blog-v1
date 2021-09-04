const initialState = {
    name: 'Anan'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Anan'
        }
    }
    return state
}

export default globalReducer