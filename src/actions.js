import store from './store'

store.dispatch({ type: "INCREMENT" })

console.log(store.getState())