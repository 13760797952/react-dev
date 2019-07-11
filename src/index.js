import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './App'
import {counter} from './index.redux'


const store = createStore(counter,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)



// // 通过reducer建立
// // 根据老的state和action 生成新的state
// function counter(state = 0, action) {
//   switch (action.type) {
//     case ADD_GUN:
//       return state + 1
//     case SUBTRACT:
//       return state - 1
//     default:
//       return 10
//   }
// }

// // 1.新建store
// const store = createStore(counter)

// // 2.
// const init = store.getState()
// console.log(init)

// // 4.监听
// function listener() {
//   const current = store.getState()
//   console.log(`现在有机枪${current}把`)
// }
// // 5.订阅 每次修改狗重新渲染
// store.subscribe(listener)

// // 3.派发事件 传递action
// store.dispatch({ type: ADD_GUN })
// console.log(store.getState())