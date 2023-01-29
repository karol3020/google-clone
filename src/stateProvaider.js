import React, { createContext, useContext, useReducer} from "react"

//Preparing the data layer
export const StateContext = createContext()

//reducer listen to changes and initial is responsible for look of the data
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
    {/* // Reffering to app in index.js // */}
        {children}  
        </StateContext.Provider>
)

//Hook which allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext)