//what is the data to look like - object it is 
export const initialState = {
    term: null,
}

// chang of data
export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            }
            default :
                return state:
    }
}

export default reducer