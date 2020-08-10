import { combineReducers } from 'redux'
import { ADD_USER } from '../actions/actions'
const initialState = [
  {
    name: 'paulo',
    email: 'prog.dandrea@gmail.com',
    senha:  'ag',
    banda: 'klb'
  }
]

const reduceCadastrados = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, {...action.user}]
    default:
      return state
  }
}



export const rootReducer = combineReducers({reduceCadastrados})