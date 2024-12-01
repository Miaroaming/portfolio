import { createContext, useReducer } from "react";

export const ProjectsContext = createContext()

export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                projects: action.payload // updates all the workouts to the new workouts
            }
        case 'CREATE_PROJECTS':
            return {
                // creates an array with the new workout at the front and prevous workouts after
                projects: [action.payload, ...state.projects] 
            }
        default:
            return state // return state unchanged
    }
}

export const ProjectsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(projectsReducer, {
        projects: []
    })
    return (
        <ProjectsContext.Provider value={{...state,dispatch}}>  
            {children}
        </ProjectsContext.Provider>
    )
}