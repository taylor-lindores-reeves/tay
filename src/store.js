import { createStore } from 'redux'
import { counter } from './reducers'

const store = createStore(counter)

console.log(store.getState())

store.dispatch({ type: "INCREMENT" })

console.log(store.getState())
export default store